'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var jetpack = require('fs-jetpack');
var bundle = require('./bundle');
var utils = require('./utils');
var lessImport = require('less-plugin-npm-import')

var projectDir = jetpack;
var srcDir = jetpack.cwd('./src');
var destDir = jetpack.cwd('./app');

gulp.task('bundle', function () {
    return Promise.all([
        bundle(srcDir.path('background.js'), destDir.path('background.js')),
        bundle(srcDir.path('index.js'), destDir.path('index.js')),
    ]);
});

gulp.task('less', function () {
    return gulp.src(srcDir.path('stylesheets/main.less'))
        .pipe(plumber())
        .pipe(less({
            plugins: [new lessImport({
              prefix: '~'
            })]
          }))
        .pipe(gulp.dest(destDir.path('stylesheets')));
});

gulp.task('environment', function () {
    var configFile = 'config/env_' + utils.getEnvName() + '.json';
    projectDir.copy(configFile, destDir.path('env.json'), { overwrite: true });
});

gulp.task('watch', function () {
    var beepOnError = function (done) {
        return function (err) {
            if (err) {
                utils.beepSound();
            }
            done(err);
        };
    };

    watch('src/**/*.js', batch(function (events, done) {
        gulp.start('bundle', beepOnError(done));
    }));
    watch('src/**/*.less', batch(function (events, done) {
        gulp.start('less', beepOnError(done));
    }));
});

gulp.task('build', ['bundle', 'less', 'environment']);
