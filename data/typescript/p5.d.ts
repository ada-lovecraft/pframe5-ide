// This file was auto-generated. Please do not edit it.

declare class p5 {
  // Properties from p5
  
  // src/color/creating_reading.js
  
  /**
   * <p>Extracts the alpha value from a color or pixel array.</p>
   * 
   */
  alpha(obj: any): void
  
  /**
   * <p>Extracts the blue value from a color or pixel array.</p>
   * 
   */
  blue(obj: any): void
  
  /**
   * <p>Extracts the HSB brightness value from a color or pixel array.</p>
   * 
   */
  brightness(color: any): void
  
  /**
   * <p>Creates colors for storing in variables of the color datatype.
   */
  color(): any[]
  
  /**
   * <p>Extracts the green value from a color or pixel array.</p>
   * 
   */
  green(color: any): void
  
  /**
   * <p>Extracts the hue value from a color or pixel array.</p>
   * <p>Hue exists in both HSB and HSL.
   */
  hue(color: any): void
  
  // TODO: Fix lerpColor() errors in src/color/creating_reading.js:
  //
  //   param "c1" has invalid type: Array/Number
  //   param "c2" has invalid type: Array/Number
  //   return has invalid type: Array/Number
  //
  // lerpColor(c1: Array/Number, c2: Array/Number, amt: number): Array/Number
  
  /**
   * <p>Extracts the HSL lightness value from a color or pixel array.</p>
   * 
   */
  lightness(color: any): void
  
  /**
   * <p>Extracts the red value from a color or pixel array.</p>
   * 
   */
  red(obj: any): void
  
  /**
   * <p>Extracts the saturation value from a color or pixel array.</p>
   * <p>Saturation is scaled differently in HSB and HSL.
   */
  saturation(color: any): void
  
  // src/color/setting.js
  
  /**
   * <p>The background() function sets the color used for the background of the
   * p5.js canvas.
   */
  background(): void
  
  /**
   * <p>Clears the pixels within a buffer.
   */
  clear(): void
  
  // TODO: Fix colorMode() errors in src/color/setting.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // colorMode(mode: Constant, max1?: number, max2?: number, max3?: number, maxA?: number): void
  
  /**
   * <p>Sets the color used to fill shapes.
   */
  fill(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): void
  
  /**
   * <p>Disables filling geometry.
   */
  noFill(): void
  
  /**
   * <p>Disables drawing the stroke (outline).
   */
  noStroke(): void
  
  /**
   * <p>Sets the color used to draw lines and borders around shapes.
   */
  stroke(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): void
  
  // src/core/2d_primitives.js
  
  // TODO: Fix arc() errors in src/core/2d_primitives.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // arc(a: number, b: number, c: number, d: number, start: number, stop: number, mode?: Constant): any
  
  /**
   * <p>Draws an ellipse (oval) to the screen.
   */
  ellipse(): p5
  
  /**
   * <p>Draws a line (a direct path between two points) to the screen.
   */
  line(x1: number, y1: number, x2: number, y2: number): p5
  
  /**
   * <p>Draws a point, a coordinate in space at the dimension of one pixel.
   */
  point(x: number, y: number): p5
  
  /**
   * <p>Draw a quad.
   */
  quad(): p5
  
  /**
   * <p>Draws a rectangle to the screen.
   */
  rect(): p5
  
  /**
   * <p>A triangle is a plane created by connecting three points.
   */
  triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5
  
  // src/core/attributes.js
  
  // TODO: Fix ellipseMode() errors in src/core/attributes.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // ellipseMode(mode: Constant): p5
  
  /**
   * <p>Draws all geometry with jagged (aliased) edges.
   */
  noSmooth(): p5
  
  // TODO: Fix rectMode() errors in src/core/attributes.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // rectMode(mode: Constant): p5
  
  /**
   * <p>Draws all geometry with smooth (anti-aliased) edges.
   */
  smooth(): p5
  
  // TODO: Fix strokeCap() errors in src/core/attributes.js:
  //
  //   param "cap" has invalid type: Number/Constant
  //
  // strokeCap(cap: Number/Constant): p5
  
  // TODO: Fix strokeJoin() errors in src/core/attributes.js:
  //
  //   param "join" has invalid type: Number/Constant
  //
  // strokeJoin(join: Number/Constant): p5
  
  /**
   * <p>Sets the width of the stroke used for lines, points, and the border
   * around shapes.
   */
  strokeWeight(weight: number): p5
  
  // src/core/constants.js
  
  /**
   * <p>HALF_PI is a mathematical constant with the value
   * 1.57079632679489661923.
   */
  HALF_PI: any
  
  /**
   * <p>PI is a mathematical constant with the value
   * 3.14159265358979323846.
   */
  PI: any
  
  /**
   * <p>QUARTER_PI is a mathematical constant with the value 0.7853982.
   */
  QUARTER_PI: any
  
  /**
   * <p>TAU is an alias for TWO_PI, a mathematical constant with the
   * value 6.28318530717958647693.
   */
  TAU: any
  
  /**
   * <p>TWO_PI is a mathematical constant with the value
   * 6.28318530717958647693.
   */
  TWO_PI: any
  
  // src/core/core.js
  
  /**
   * <p>Called directly before setup(), the preload() function is used to handle
   * asynchronous loading of external files.
   */
  preload(): void
  
  /**
   * <p>The setup() function is called once when the program starts.
   */
  setup(): void
  
  /**
   * <p>Called directly after setup(), the draw() function continuously executes
   * the lines of code contained inside its block until the program is stopped
   * or noLoop() is called.
   */
  draw(): void
  
  /**
   * <p>Removes the entire p5 sketch.
   */
  remove(): void
  
  // src/core/curves.js
  
  /**
   * <p>Draws a cubic Bezier curve on the screen.
   */
  bezier(): any
  
  /**
   * <p>Evaluates the Bezier at position t for points a, b, c, d.
   */
  bezierPoint(a: number, b: number, c: number, d: number, t: number): number
  
  /**
   * <p>Evaluates the tangent to the Bezier at position t for points a, b, c, d.
   */
  bezierTangent(a: number, b: number, c: number, d: number, t: number): number
  
  /**
   * <p>Draws a curved line on the screen between two points, given as the
   * middle four parameters.
   */
  curve(): any
  
  /**
   * <p>Modifies the quality of forms created with curve() and curveVertex().
   */
  curveTightness(amount: number): any
  
  /**
   * <p>Evaluates the curve at position t for points a, b, c, d.
   */
  curvePoint(a: number, b: number, c: number, d: number, t: number): number
  
  /**
   * <p>Evaluates the tangent to the curve at position t for points a, b, c, d.
   */
  curveTangent(a: number, b: number, c: number, d: number, t: number): number
  
  // src/core/environment.js
  
  /**
   * <p>The print() function writes to the console area of your browser.
   */
  print(contents: any): void
  
  /**
   * <p>The system variable frameCount contains the number of frames that have
   * been displayed since the program started.
   */
  frameCount: any
  
  /**
   * <p>Confirms if the window a p5.js program is in is &quot;focused,&quot; meaning that
   * the sketch will accept mouse or keyboard input.
   */
  focused: any
  
  // TODO: Fix cursor() errors in src/core/environment.js:
  //
  //   param "type" has invalid type: Number/Constant
  //
  // cursor(type: Number/Constant, x?: number, y?: number): void
  
  /**
   * <p>Specifies the number of frames to be displayed every second.
   */
  frameRate(fps?: number): number
  
  /**
   * <p>Hides the cursor from view.</p>
   * 
   */
  noCursor(): void
  
  /**
   * <p>System variable that stores the width of the entire screen display.
   */
  displayWidth: any
  
  /**
   * <p>System variable that stores the height of the entire screen display.
   */
  displayHeight: any
  
  /**
   * <p>System variable that stores the width of the inner window, it maps to
   * window.innerWidth.</p>
   * 
   */
  windowWidth: any
  
  /**
   * <p>System variable that stores the height of the inner window, it maps to
   * window.innerHeight.</p>
   * 
   */
  windowHeight: any
  
  /**
   * <p>The windowResized() function is called once every time the browser window
   * is resized.
   */
  windowResized(): void
  
  /**
   * <p>System variable that stores the width of the drawing canvas.
   */
  width: any
  
  /**
   * <p>System variable that stores the height of the drawing canvas.
   */
  height: any
  
  /**
   * <p>If argument is given, sets the sketch to fullscreen or not based on the
   * value of the argument.
   */
  fullscreen(val?: boolean): boolean
  
  /**
   * <p>Sets the pixel scaling for high pixel density displays.
   */
  pixelDensity(val?: number): number
  
  /**
   * <p>Returns the pixel density of the current display the sketch is running on.</p>
   * 
   */
  displayDensity(): number
  
  /**
   * <p>Gets the current URL.</p>
   * 
   */
  getURL(): string
  
  /**
   * <p>Gets the current URL path as an array.</p>
   * 
   */
  getURLPath(): any[]
  
  /**
   * <p>Gets the current URL params as an Object.</p>
   * 
   */
  getURLParams(): any
  
  // src/core/rendering.js
  
  // TODO: Fix createCanvas() errors in src/core/rendering.js:
  //
  //   param "renderer" has invalid type: Constant
  //
  // createCanvas(w: number, h: number, renderer?: Constant): any
  
  /**
   * <p>Resizes the canvas to given width and height.
   */
  resizeCanvas(): void
  
  /**
   * <p>Removes the default canvas for a p5 sketch that doesn&#39;t
   * require a canvas</p>
   * 
   */
  noCanvas(): void
  
  // TODO: Fix createGraphics() errors in src/core/rendering.js:
  //
  //   param "renderer" has invalid type: Constant
  //
  // createGraphics(w: number, h: number, renderer?: Constant): any
  
  // TODO: Fix blendMode() errors in src/core/rendering.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // blendMode(mode: Constant): void
  
  // src/core/structure.js
  
  /**
   * <p>Stops p5.js from continuously executing the code within draw().
   */
  noLoop(): void
  
  /**
   * <p>By default, p5.js loops through draw() continuously, executing the code
   * within it.
   */
  loop(): void
  
  /**
   * <p>The push() function saves the current drawing style settings and
   * transformations, while pop() restores these settings.
   */
  push(): void
  
  /**
   * <p>The push() function saves the current drawing style settings and
   * transformations, while pop() restores these settings.
   */
  pop(): void
  
  /**
   * <p>Executes the code within draw() one time.
   */
  redraw(n?: number): void
  
  // src/core/transform.js
  
  /**
   * <p>Multiplies the current matrix by the one specified through the parameters.
   */
  applyMatrix(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number): p5
  
  /**
   * <p>Replaces the current matrix with the identity matrix.</p>
   * 
   */
  resetMatrix(): p5
  
  /**
   * <p>Rotates a shape the amount specified by the angle parameter.
   */
  rotate(): p5
  
  // TODO: Fix rotateX() errors in src/core/transform.js:
  //
  //   return has invalid type: [type]
  //
  // rotateX(rad: number): [type]
  
  // TODO: Fix rotateY() errors in src/core/transform.js:
  //
  //   return has invalid type: [type]
  //
  // rotateY(rad: number): [type]
  
  // TODO: Fix rotateZ() errors in src/core/transform.js:
  //
  //   return has invalid type: [type]
  //
  // rotateZ(rad: number): [type]
  
  // TODO: Fix scale() errors in src/core/transform.js:
  //
  //   param "s" has invalid type: Number | p5.Vector | Array
  //
  // scale(s: Number | p5.Vector | Array, y?: number, z?: number): p5
  
  /**
   * <p>Shears a shape around the x-axis the amount specified by the angle
   * parameter.
   */
  shearX(angle: number): p5
  
  /**
   * <p>Shears a shape around the y-axis the amount specified by the angle
   * parameter.
   */
  shearY(angle: number): p5
  
  /**
   * <p>Specifies an amount to displace objects within the display window.
   */
  translate(x: number, y: number, z?: number): p5
  
  // src/core/vertex.js
  
  /**
   * <p>Use the beginContour() and endContour() functions to create negative
   * shapes within shapes such as the center of the letter &#39;O&#39;.
   */
  beginContour(): any
  
  // TODO: Fix beginShape() errors in src/core/vertex.js:
  //
  //   param "kind" has invalid type: Constant
  //
  // beginShape(kind: Constant): any
  
  /**
   * <p>Specifies vertex coordinates for Bezier curves.
   */
  bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): any
  
  /**
   * <p>Specifies vertex coordinates for curves.
   */
  curveVertex(x: number, y: number): any
  
  /**
   * <p>Use the beginContour() and endContour() functions to create negative
   * shapes within shapes such as the center of the letter &#39;O&#39;.
   */
  endContour(): any
  
  // TODO: Fix endShape() errors in src/core/vertex.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // endShape(mode: Constant): any
  
  /**
   * <p>Specifies vertex coordinates for quadratic Bezier curves.
   */
  quadraticVertex(cx: number, cy: number, x3: number, y3: number): any
  
  /**
   * <p>All shapes are constructed by connecting a series of vertices.
   */
  vertex(x: number, y: number): any
  
  // src/events/acceleration.js
  
  /**
   * <p>The system variable deviceOrientation always contains the orientation of
   * the device.
   */
  deviceOrientation: any
  
  /**
   * <p>The system variable accelerationX always contains the acceleration of the
   * device along the x axis.
   */
  accelerationX: any
  
  /**
   * <p>The system variable accelerationY always contains the acceleration of the
   * device along the y axis.
   */
  accelerationY: any
  
  /**
   * <p>The system variable accelerationZ always contains the acceleration of the
   * device along the z axis.
   */
  accelerationZ: any
  
  /**
   * <p>The system variable pAccelerationX always contains the acceleration of the
   * device along the x axis in the frame previous to the current frame.
   */
  pAccelerationX: any
  
  /**
   * <p>The system variable pAccelerationY always contains the acceleration of the
   * device along the y axis in the frame previous to the current frame.
   */
  pAccelerationY: any
  
  /**
   * <p>The system variable pAccelerationZ always contains the acceleration of the
   * device along the z axis in the frame previous to the current frame.
   */
  pAccelerationZ: any
  
  /**
   * <p>The system variable rotationX always contains the rotation of the
   * device along the x axis.
   */
  rotationX: any
  
  /**
   * <p>The system variable rotationY always contains the rotation of the
   * device along the y axis.
   */
  rotationY: any
  
  /**
   * <p>The system variable rotationZ always contains the rotation of the
   * device along the z axis.
   */
  rotationZ: any
  
  /**
   * <p>The system variable pRotationX always contains the rotation of the
   * device along the x axis in the frame previous to the current frame.
   */
  pRotationX: any
  
  /**
   * <p>The system variable pRotationY always contains the rotation of the
   * device along the y axis in the frame previous to the current frame.
   */
  pRotationY: any
  
  /**
   * <p>The system variable pRotationZ always contains the rotation of the
   * device along the z axis in the frame previous to the current frame.
   */
  pRotationZ: any
  
  /**
   * <p>The setMoveThreshold() function is used to set the movement threshold for
   * the deviceMoved() function.
   */
  setMoveThreshold(value: number): void
  
  /**
   * <p>The setShakeThreshold() function is used to set the movement threshold for
   * the deviceShaken() function.
   */
  setShakeThreshold(value: number): void
  
  /**
   * <p>The deviceMoved() function is called when the device is moved by more than
   * the threshold value along X, Y or Z axis.
   */
  deviceMoved(): void
  
  /**
   * <p>The deviceTurned() function is called when the device rotates by
   * more than 90 degrees continuously.
   */
  deviceTurned(): void
  
  /**
   * <p>The deviceShaken() function is called when the device total acceleration
   * changes of accelerationX and accelerationY values is more than
   * the threshold value.
   */
  deviceShaken(): void
  
  // src/events/keyboard.js
  
  /**
   * <p>The boolean system variable keyIsPressed is true if any key is pressed
   * and false if no keys are pressed.</p>
   * 
   */
  keyIsPressed: any
  
  /**
   * <p>The system variable key always contains the value of the most recent
   * key on the keyboard that was typed.
   */
  key: any
  
  /**
   * <p>The variable keyCode is used to detect special keys such as BACKSPACE,
   * DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW,
   * DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.
   */
  keyCode: any
  
  /**
   * <p>The keyPressed() function is called once every time a key is pressed.
   */
  keyPressed(): void
  
  /**
   * <p>The keyReleased() function is called once every time a key is released.
   */
  keyReleased(): void
  
  /**
   * <p>The keyTyped() function is called once every time a key is pressed, but
   * action keys such as Ctrl, Shift, and Alt are ignored.
   */
  keyTyped(): void
  
  /**
   * <p>The keyIsDown() function checks if the key is currently down, i.e.
   */
  keyIsDown(code: number): boolean
  
  // src/events/mouse.js
  
  /**
   * <p>The system variable mouseX always contains the current horizontal
   * position of the mouse, relative to (0, 0) of the canvas.
   */
  mouseX: any
  
  /**
   * <p>The system variable mouseY always contains the current vertical position
   * of the mouse, relative to (0, 0) of the canvas.
   */
  mouseY: any
  
  /**
   * <p>The system variable pmouseX always contains the horizontal position of
   * the mouse or finger in the frame previous to the current frame, relative to
   * (0, 0) of the canvas.</p>
   * 
   */
  pmouseX: any
  
  /**
   * <p>The system variable pmouseY always contains the vertical position of the
   * mouse or finger in the frame previous to the current frame, relative to
   * (0, 0) of the canvas.</p>
   * 
   */
  pmouseY: any
  
  /**
   * <p>The system variable winMouseX always contains the current horizontal
   * position of the mouse, relative to (0, 0) of the window.</p>
   * 
   */
  winMouseX: any
  
  /**
   * <p>The system variable winMouseY always contains the current vertical
   * position of the mouse, relative to (0, 0) of the window.</p>
   * 
   */
  winMouseY: any
  
  /**
   * <p>The system variable pwinMouseX always contains the horizontal position
   * of the mouse in the frame previous to the current frame, relative to
   * (0, 0) of the window.</p>
   * 
   */
  pwinMouseX: any
  
  /**
   * <p>The system variable pwinMouseY always contains the vertical position of
   * the mouse in the frame previous to the current frame, relative to (0, 0)
   * of the window.</p>
   * 
   */
  pwinMouseY: any
  
  /**
   * <p>Processing automatically tracks if the mouse button is pressed and which
   * button is pressed.
   */
  mouseButton: any
  
  /**
   * <p>The boolean system variable mouseIsPressed is true if the mouse is pressed
   * and false if not.</p>
   * 
   */
  mouseIsPressed: any
  
  /**
   * <p>The mouseMoved() function is called every time the mouse moves and a mouse
   * button is not pressed.<br><br>
   * Browsers may have different default
   * behaviors attached to various mouse events.
   */
  mouseMoved(): void
  
  /**
   * <p>The mouseDragged() function is called once every time the mouse moves and
   * a mouse button is pressed.
   */
  mouseDragged(): void
  
  /**
   * <p>The mousePressed() function is called once after every time a mouse button
   * is pressed.
   */
  mousePressed(): void
  
  /**
   * <p>The mouseReleased() function is called every time a mouse button is
   * released.
   */
  mouseReleased(): void
  
  /**
   * <p>The mouseClicked() function is called once after a mouse button has been
   * pressed and then released.<br><br>
   * Browsers may have different default
   * behaviors attached to various mouse events.
   */
  mouseClicked(): void
  
  /**
   * <p>The function mouseWheel() is executed every time a vertical mouse wheel
   * event is detected either triggered by an actual mouse wheel or by a
   * touchpad.<br><br>
   * The event.delta property returns the amount the mouse wheel
   * have scrolled.
   */
  mouseWheel(): void
  
  // src/events/touch.js
  
  // TODO: Property "touches[]", defined in src/events/touch.js, is not a valid JS symbol name
  
  /**
   * <p>The touchStarted() function is called once after every time a touch is
   * registered.
   */
  touchStarted(): void
  
  /**
   * <p>The touchMoved() function is called every time a touch move is registered.
   */
  touchMoved(): void
  
  /**
   * <p>The touchEnded() function is called every time a touch ends.
   */
  touchEnded(): void
  
  // src/image/image.js
  
  /**
   * <p>Creates a new p5.Image (the datatype for storing images).
   */
  createImage(width: number, height: number): p5.Image
  
  // TODO: Fix saveCanvas() errors in src/image/image.js:
  //
  //   param "canvas" has invalid type: [selectedCanvas]
  //   param "filename" has invalid type: [String]
  //   param "extension" has invalid type: [String]
  //
  // saveCanvas(canvas: [selectedCanvas], filename: [String], extension: [String]): void
  
  /**
   * <p>Capture a sequence of frames that can be used to create a movie.
   */
  saveFrames(filename: string, extension: string, duration: number, framerate: number, callback?: () => any): void
  
  // src/image/loading_displaying.js
  
  // TODO: Fix loadImage() errors in src/image/loading_displaying.js:
  //
  //   param "successCallback" has invalid type: Function(p5.Image)
  //   param "failureCallback" has invalid type: Function(Event)
  //
  // loadImage(path: string, successCallback?: Function(p5.Image), failureCallback?: Function(Event)): p5.Image
  
  /**
   * <p>Draw an image to the main canvas of the p5js sketch</p>
   * 
   */
  image(): void
  
  /**
   * <p>Sets the fill value for displaying images.
   */
  tint(v1: number|any[], v2?: number|any[], v3?: number|any[], a?: number|any[]): void
  
  /**
   * <p>Removes the current fill value for displaying images and reverts to
   * displaying images with their original hues.</p>
   * 
   */
  noTint(): void
  
  // TODO: Fix imageMode() errors in src/image/loading_displaying.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // imageMode(mode: Constant): void
  
  // src/image/pixels.js
  
  // TODO: Property "pixels[]", defined in src/image/pixels.js, is not a valid JS symbol name
  
  // TODO: Fix blend() errors in src/image/pixels.js:
  //
  //   param "srcImage" has invalid type: p5.Image|undefined
  //
  // blend(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: number): void
  
  // TODO: Fix copy() errors in src/image/pixels.js:
  //
  //   param "srcImage" has invalid type: p5.Image|undefined
  //
  // copy(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void
  
  // TODO: Fix filter() errors in src/image/pixels.js:
  //
  //   param "filterType" has invalid type: Constant
  //
  // filter(filterType: Constant, filterParam: number): void
  
  /**
   * <p>Returns an array of [R,G,B,A] values for any pixel or grabs a section of
   * an image.
   */
  get(x?: number, y?: number, w?: number, h?: number): any[]|p5.Image
  
  /**
   * <p>Loads the pixel data for the display window into the pixels[] array.
   */
  loadPixels(): void
  
  /**
   * <p>Changes the color of any pixel, or writes an image directly to the
   * display window.</p>
   * <p>The x and y parameters specify the pixel to change and the c parameter
   * specifies the color value.
   */
  set(x: number, y: number, c: number|any[]|any): void
  
  // TODO: Fix updatePixels() errors in src/image/pixels.js:
  //
  //   param "w" is defined multiple times
  //
  // updatePixels(x?: number, y?: number, w?: number, w?: number): void
  
  // src/io/files.js
  
  /**
   * <p>Loads an opentype font file (.otf, .ttf) from a file or a URL,
   * and returns a PFont Object.
   */
  loadFont(path: string, callback?: () => any): any
  
  /**
   * <p>Loads a JSON file from a file or a URL, and returns an Object or Array.
   */
  loadJSON(path: string, callback?: () => any, errorCallback?: () => any, datatype?: string): any|any[]
  
  /**
   * <p>Reads the contents of a file and creates a String array of its individual
   * lines.
   */
  loadStrings(filename: string, callback?: () => any, errorCallback?: () => any): any[]
  
  // TODO: Fix loadTable() errors in src/io/files.js:
  //
  //   param "options" has invalid type: String|Strings
  //
  // loadTable(filename: string, options?: string|Strings, callback?: () => any): any
  
  /**
   * <p>Reads the contents of a file and creates an XML object with its values.
   */
  loadXML(filename: string, callback?: () => any, errorCallback?: () => any): any
  
  /**
   * <p>Method for executing an HTTP GET request.
   */
  httpGet(path: string, data?: any, datatype?: string, callback?: () => any, errorCallback?: () => any): void
  
  /**
   * <p>Method for executing an HTTP POST request.
   */
  httpPost(path: string, data?: any, datatype?: string, callback?: () => any, errorCallback?: () => any): void
  
  /**
   * <p>Method for executing an HTTP request.
   */
  httpDo(path: string, method?: string, data?: any, datatype?: string, callback?: () => any, errorCallback?: () => any): void
  
  // TODO: Fix save() errors in src/io/files.js:
  //
  //   param "objectOrFilename" has invalid type: [Object|String]
  //   param "filename" has invalid type: [String]
  //   param "options" has invalid type: [Boolean/String]
  //
  // save(objectOrFilename: [Object|String], filename: [String], options: [Boolean/String]): void
  
  /**
   * <p>Writes the contents of an Array or a JSON object to a .json file.
   */
  saveJSON(json: any[]|any, filename: string, optimize?: boolean): void
  
  /**
   * <p>Writes an array of Strings to a text file, one line per String.
   */
  saveStrings(list: any[], filename: string): void
  
  /**
   * <p>Writes the contents of a Table object to a file.
   */
  saveTable(Table: p5.Table, filename: string, options?: string): void
  
  // src/math/calculation.js
  
  /**
   * <p>Calculates the absolute value (magnitude) of a number.
   */
  abs(n: number): number
  
  /**
   * <p>Calculates the closest int value that is greater than or equal to the
   * value of the parameter.
   */
  ceil(n: number): number
  
  /**
   * <p>Constrains a value between a minimum and maximum value.</p>
   * 
   */
  constrain(n: number, low: number, high: number): number
  
  // TODO: Fix dist() errors in src/math/calculation.js:
  //
  //   required param "x2" follows an optional param
  //   required param "y2" follows an optional param
  //
  // dist(x1: number, y1: number, z1?: number, x2: number, y2: number, z2?: number): number
  
  /**
   * <p>Returns Euler&#39;s number e (2.71828...) raised to the power of the n
   * parameter.
   */
  exp(n: number): number
  
  /**
   * <p>Calculates the closest int value that is less than or equal to the
   * value of the parameter.
   */
  floor(n: number): number
  
  /**
   * <p>Calculates a number between two numbers at a specific increment.
   */
  lerp(start: number, stop: number, amt: number): number
  
  /**
   * <p>Calculates the natural logarithm (the base-e logarithm) of a number.
   */
  log(n: number): number
  
  /**
   * <p>Calculates the magnitude (or length) of a vector.
   */
  mag(a: number, b: number): number
  
  /**
   * <p>Re-maps a number from one range to another.
   */
  map(value: number, start1: number, stop1: number, start2: number, stop2: number): number
  
  /**
   * <p>Determines the largest value in a sequence of numbers, and then returns
   * that value.
   */
  max(n0: number|any[]): number
  
  /**
   * <p>Determines the smallest value in a sequence of numbers, and then returns
   * that value.
   */
  min(n0: number|any[]): number
  
  /**
   * <p>Normalizes a number from another range into a value between 0 and 1.
   */
  norm(value: number, start: number, stop: number): number
  
  /**
   * <p>Facilitates exponential expressions.
   */
  pow(n: number, e: number): number
  
  /**
   * <p>Calculates the integer closest to the n parameter.
   */
  round(n: number): number
  
  /**
   * <p>Squares a number (multiplies a number by itself).
   */
  sq(n: number): number
  
  /**
   * <p>Calculates the square root of a number.
   */
  sqrt(n: number): number
  
  // src/math/math.js
  
  /**
   * <p>Creates a new p5.Vector (the datatype for storing vectors).
   */
  createVector(x?: number, y?: number, z?: number): void
  
  // src/math/noise.js
  
  /**
   * <p>Returns the Perlin noise value at specified coordinates.
   */
  noise(x: number, y: number, z: number): number
  
  /**
   * <p>Adjusts the character and level of detail produced by the Perlin noise
   *  function.
   */
  noiseDetail(lod: number, falloff: number): void
  
  /**
   * <p>Sets the seed value for <b>noise()</b>.
   */
  noiseSeed(seed: number): void
  
  // src/math/random.js
  
  /**
   * <p>Sets the seed value for random().</p>
   * <p>By default, random() produces different results each time the program
   * is run.
   */
  randomSeed(seed: number): void
  
  // TODO: Fix random() errors in src/math/random.js:
  //
  //   return has invalid type: Number|mixed
  //
  // random(): number|mixed
  
  /**
   * <p>Returns a random number fitting a Gaussian, or
   *  normal, distribution.
   */
  randomGaussian(mean: number, sd: number): number
  
  // src/math/trigonometry.js
  
  /**
   * <p>The inverse of cos(), returns the arc cosine of a value.
   */
  acos(value: number): number
  
  /**
   * <p>The inverse of sin(), returns the arc sine of a value.
   */
  asin(value: number): number
  
  /**
   * <p>The inverse of tan(), returns the arc tangent of a value.
   */
  atan(value: number): number
  
  /**
   * <p>Calculates the angle (in radians) from a specified point to the coordinate
   * origin as measured from the positive x-axis.
   */
  atan2(y: number, x: number): number
  
  /**
   * <p>Calculates the cosine of an angle.
   */
  cos(angle: number): number
  
  /**
   * <p>Calculates the sine of an angle.
   */
  sin(angle: number): number
  
  /**
   * <p>Calculates the tangent of an angle.
   */
  tan(angle: number): number
  
  /**
   * <p>Converts a radian measurement to its corresponding value in degrees.
   */
  degrees(radians: number): number
  
  /**
   * <p>Converts a degree measurement to its corresponding value in radians.
   */
  radians(degrees: number): number
  
  // TODO: Fix angleMode() errors in src/math/trigonometry.js:
  //
  //   param "mode" has invalid type: Constant
  //
  // angleMode(mode: Constant): void
  
  // src/typography/attributes.js
  
  // TODO: Fix textAlign() errors in src/typography/attributes.js:
  //
  //   param "horizAlign" has invalid type: Constant
  //   param "vertAlign" has invalid type: Constant
  //
  // textAlign(horizAlign: Constant, vertAlign: Constant): number
  
  /**
   * <p>Sets/gets the spacing, in pixels, between lines of text.
   */
  textLeading(leading: number): any|number
  
  /**
   * <p>Sets/gets the current font size.
   */
  textSize(theSize: number): any|number
  
  // TODO: Fix textStyle() errors in src/typography/attributes.js:
  //
  //   param "theStyle" has invalid type: Number/Constant
  //
  // textStyle(theStyle: Number/Constant): any|string
  
  /**
   * <p>Calculates and returns the width of any character or text string.</p>
   * 
   */
  textWidth(theText: string): number
  
  // src/typography/loading_displaying.js
  
  /**
   * <p>Draws text to the screen.
   */
  text(str: string, x: number, y: number, x2: number, y2: number): any
  
  /**
   * <p>Sets the current font that will be drawn with the text() function.</p>
   * 
   */
  textFont(f: any|string): any
  
  // src/utilities/array_functions.js
  
  /**
   * <p>Adds a value to the end of an array.
   */
  append(array: any[], value: any): void
  
  // TODO: Fix arrayCopy() errors in src/utilities/array_functions.js:
  //
  //   required param "dst" follows an optional param
  //
  // arrayCopy(src: any[], srcPosition?: number, dst: any[], dstPosition?: number, length?: number): void
  
  /**
   * <p>Concatenates two arrays, maps to Array.concat().
   */
  concat(a: any[], b: any[]): any[]
  
  /**
   * <p>Reverses the order of an array, maps to Array.reverse()</p>
   * 
   */
  reverse(list: any[]): void
  
  /**
   * <p>Decreases an array by one element and returns the shortened array,
   * maps to Array.pop().</p>
   * 
   */
  shorten(list: any[]): any[]
  
  /**
   * <p>Randomizes the order of the elements of an array.
   */
  shuffle(array: any[], bool?: boolean): any[]
  
  /**
   * <p>Sorts an array of numbers from smallest to largest, or puts an array of
   * words in alphabetical order.
   */
  sort(list: any[], count?: number): void
  
  /**
   * <p>Inserts a value or an array of values into an existing array.
   */
  splice(list: any[], value: any, position: number): void
  
  /**
   * <p>Extracts an array of elements from an existing array.
   */
  subset(list: any[], start: number, count?: number): any[]
  
  // src/utilities/conversion.js
  
  /**
   * <p>Converts a string to its floating point representation.
   */
  float(str: string): number
  
  /**
   * <p>Converts a boolean, string, or float to its integer representation.
   */
  int(n: string|boolean|number|any[]): number
  
  /**
   * <p>Converts a boolean, string or number to its string representation.
   */
  str(n: string|boolean|number|any[]): string
  
  /**
   * <p>Converts a number or string to its boolean representation.
   */
  boolean(n: string|boolean|number|any[]): boolean
  
  /**
   * <p>Converts a number, string or boolean to its byte representation.
   */
  byte(n: string|boolean|number|any[]): number
  
  /**
   * <p>Converts a number or string to its corresponding single-character
   * string representation.
   */
  char(n: string|number|any[]): string
  
  /**
   * <p>Converts a single-character string to its corresponding integer
   * representation.
   */
  unchar(n: string|any[]): number
  
  /**
   * <p>Converts a number to a string in its equivalent hexadecimal notation.
   */
  hex(n: number|any[]): string
  
  /**
   * <p>Converts a string representation of a hexadecimal number to its equivalent
   * integer value.
   */
  unhex(n: string|any[]): number
  
  // src/utilities/string_functions.js
  
  /**
   * <p>Combines an array of Strings into one String, each separated by the
   * character(s) used for the separator parameter.
   */
  join(list: any[], separator: string): string
  
  /**
   * <p>This function is used to apply a regular expression to a piece of text,
   * and return matching groups (elements found inside parentheses) as a
   * String array.
   */
  match(str: string, regexp: string): any[]
  
  /**
   * <p>This function is used to apply a regular expression to a piece of text,
   * and return a list of matching groups (elements found inside parentheses)
   * as a two-dimensional String array.
   */
  matchAll(str: string, regexp: string): any[]
  
  /**
   * <p>Utility function for formatting numbers into strings.
   */
  nf(num: number|any[], left?: number, right?: number): string|any[]
  
  /**
   * <p>Utility function for formatting numbers into strings and placing
   * appropriate commas to mark units of 1000.
   */
  nfc(num: number|any[], right?: number): string|any[]
  
  /**
   * <p>Utility function for formatting numbers into strings.
   */
  nfp(num: number|any[], left?: number, right?: number): string|any[]
  
  /**
   * <p>Utility function for formatting numbers into strings.
   */
  nfs(num: number|any[], left?: number, right?: number): string|any[]
  
  /**
   * <p>The split() function maps to String.split(), it breaks a String into
   * pieces using a character or string as the delimiter.
   */
  split(value: string, delim: string): any[]
  
  /**
   * <p>The splitTokens() function splits a String at one or many character
   * delimiters or &quot;tokens.&quot; The delim parameter specifies the character or
   * characters to be used as a boundary.
   */
  splitTokens(value: string, delim?: string): any[]
  
  /**
   * <p>Removes whitespace characters from the beginning and end of a String.
   */
  trim(str: string|any[]): string|any[]
  
  // src/utilities/time_date.js
  
  /**
   * <p>p5.js communicates with the clock on your computer.
   */
  day(): number
  
  /**
   * <p>p5.js communicates with the clock on your computer.
   */
  hour(): number
  
  /**
   * <p>p5.js communicates with the clock on your computer.
   */
  minute(): number
  
  /**
   * <p>Returns the number of milliseconds (thousandths of a second) since
   * starting the program.
   */
  millis(): number
  
  /**
   * <p>p5.js communicates with the clock on your computer.
   */
  month(): number
  
  /**
   * <p>p5.js communicates with the clock on your computer.
   */
  second(): number
  
  /**
   * <p>p5.js communicates with the clock on your computer.
   */
  year(): number
  
  // src/webgl/camera.js
  
  /**
   * <p>Sets camera position</p>
   * 
   */
  camera(x: number, y: number, z: number): p5
  
  /**
   * <p>Sets perspective camera</p>
   * 
   */
  perspective(fovy: number, aspect: number, near: number, far: number): p5
  
  /**
   * <p>Setup ortho camera</p>
   * 
   */
  ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): p5
  
  // src/webgl/light.js
  
  /**
   * <p>Creates an ambient light with a color</p>
   * 
   */
  ambientLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5
  
  // TODO: Fix directionalLight() errors in src/webgl/light.js:
  //
  //   required param "x" follows an optional param
  //
  // directionalLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number, x: number|p5.Vector, y?: number, z?: number): p5
  
  // TODO: Fix pointLight() errors in src/webgl/light.js:
  //
  //   required param "x" follows an optional param
  //
  // pointLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number, x: number|p5.Vector, y?: number, z?: number): p5
  
  // src/webgl/loading.js
  
  // TODO: Fix loadModel() errors in src/webgl/loading.js:
  //
  //   param "successCallback" has invalid type: Function(p5.Geometry3D)
  //   param "failureCallback" has invalid type: Function(Event)
  //   return has invalid type: p5.Geometry
  //
  // loadModel(path: string, normalize?: boolean, successCallback?: Function(p5.Geometry3D), failureCallback?: Function(Event)): p5.Geometry
  
  // TODO: Fix model() errors in src/webgl/loading.js:
  //
  //   param "model" has invalid type: p5.Geometry
  //
  // model(model: p5.Geometry): void
  
  // src/webgl/material.js
  
  /**
   * <p>Normal material for geometry.
   */
  normalMaterial(): p5
  
  // TODO: Fix texture() errors in src/webgl/material.js:
  //
  //   param "tex" has invalid type: p5.Image | p5.MediaElement | p5.Graphics
  //
  // texture(tex: p5.Image | p5.MediaElement | p5.Graphics): p5
  
  /**
   * <p>Ambient material for geometry with a given color.
   */
  ambientMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5
  
  /**
   * <p>Specular material for geometry with a given color.
   */
  specularMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5
  
  // src/webgl/primitives.js
  
  /**
   * <p>Draw a plane with given a width and height</p>
   * 
   */
  plane(width: number, height: number, detailX?: number, detailY?: number): p5
  
  /**
   * <p>Draw a box with given width, height and depth</p>
   * 
   */
  box(width: number, Height: number, depth: number, detailX?: number, detailY?: number): p5
  
  /**
   * <p>Draw a sphere with given radius</p>
   * 
   */
  sphere(radius: number, detailX?: number, detailY?: number): p5
  
  /**
   * <p>Draw a cylinder with given radius and height</p>
   * 
   */
  cylinder(radius: number, height: number, detailX?: number, detailY?: number): p5
  
  /**
   * <p>Draw a cone with given radius and height</p>
   * 
   */
  cone(radius: number, height: number, detailX?: number, detailY?: number): p5
  
  /**
   * <p>Draw an ellipsoid with given radius</p>
   * 
   */
  ellipsoid(radiusx: number, radiusy: number, radiusz: number, detailX?: number, detailY?: number): p5
  
  /**
   * <p>Draw a torus with given radius and tube radius</p>
   * 
   */
  torus(radius: number, tubeRadius: number, detailX?: number, detailY?: number): p5
  
  // Properties from p5.dom
  
  // lib/addons/p5.dom.js
  
  // TODO: Fix select() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element|Null
  //
  // select(name: string, container?: string): Object/p5.Element|Null
  
  /**
   * <p>Searches the page for elements with the given class or tag name (using the &#39;.&#39; prefix
   * to specify a class and no prefix for a tag) and returns them as p5.Elements
   * in an array.
   */
  selectAll(name: string, container?: string): any[]
  
  /**
   * <p>Removes all elements created by p5, except any canvas / graphics
   * elements created by createCanvas or createGraphics.
   */
  removeElements(): void
  
  // TODO: Fix createDiv() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createDiv(html: string): Object/p5.Element
  
  // TODO: Fix createP() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createP(html: string): Object/p5.Element
  
  // TODO: Fix createSpan() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSpan(html: string): Object/p5.Element
  
  // TODO: Fix createImg() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createImg(src: string, alt?: string, successCallback?: () => any): Object/p5.Element
  
  // TODO: Fix createA() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createA(href: string, html: string, target?: string): Object/p5.Element
  
  // TODO: Fix createSlider() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSlider(min: number, max: number, value?: number, step?: number): Object/p5.Element
  
  // TODO: Fix createButton() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createButton(label: string, value?: string): Object/p5.Element
  
  // TODO: Fix createCheckbox() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createCheckbox(label?: string, value?: boolean): Object/p5.Element
  
  // TODO: Fix createSelect() errors in lib/addons/p5.dom.js:
  //
  //   param "multiple] [true if dropdown should support multiple selections" is not a valid JS symbol name
  //   return has invalid type: Object/p5.Element
  //
  // createSelect(multiple] [true if dropdown should support multiple selections?: boolean): Object/p5.Element
  
  // TODO: Fix createRadio() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createRadio(divId?: string): Object/p5.Element
  
  // TODO: Fix createInput() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createInput(value?: number, type?: string): Object/p5.Element
  
  // TODO: Fix createFileInput() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createFileInput(callback?: () => any, multiple?: string): Object/p5.Element
  
  // TODO: Fix createVideo() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createVideo(src: string|any[], callback?: any): Object/p5.Element
  
  // TODO: Fix createAudio() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createAudio(src: string|any[], callback?: any): Object/p5.Element
  
  // TODO: Fix createCapture() errors in lib/addons/p5.dom.js:
  //
  //   param "type" has invalid type: String|Constant|Object
  //   return has invalid type: Object/p5.Element
  //
  // createCapture(type: string|Constant|any, callback: () => any): Object/p5.Element
  
  // TODO: Fix createElement() errors in lib/addons/p5.dom.js:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createElement(tag: string, content?: string): Object/p5.Element
  
  // Properties from p5.sound
  
  // lib/addons/p5.sound.js
  
  /**
   * <p>Returns the Audio Context for this sketch.
   */
  getAudioContext(): any
  
  /**
   * <p>Returns a number representing the master amplitude (volume) for sound
   * in this sketch.</p>
   * 
   */
  getMasterVolume(): number
  
  /**
   * <p>Scale the output of all sound in this sketch</p>
   * Scaled between 0.0 (silence) and 1.0 (full volume).
   */
  masterVolume(volume: number|any, rampTime?: number, timeFromNow?: number): void
  
  /**
   * <p><code>p5.soundOut</code> is the p5.sound master output.
   */
  soundOut: any
  
  /**
   * <p>Returns a number representing the sample rate, in samples per second,
   * of all sound objects in this audio context.
   */
  sampleRate(): number
  
  /**
   * <p>Returns the frequency value of a MIDI note value.
   */
  midiToFreq(midiNote: number): number
  
  // TODO: Fix soundFormats() errors in lib/addons/p5.sound.js:
  //
  //   param "formats" has invalid type: String|Strings
  //
  // soundFormats(formats: string|Strings): void
  
  // TODO: Property "{String} failedPath path to the file that failed to load", defined in lib/addons/p5.sound.js, is not a valid JS symbol name
  
}

declare namespace p5 {
  // src/color/p5.Color.js
  
  class Color {
    /**
     * <p>We define colors to be immutable objects.
     */
    constructor()
  }
  
  // src/core/p5.Element.js
  
  class Element {
    /**
     * <p>Base class for all elements added to a sketch, including canvas,
     * graphics buffers, and other HTML elements.
     */
    constructor(elt: string, pInst?: any)
    
    /**
     * <p>Underlying HTML element.
     */
    elt: any
    
    /**
     * <p>Attaches the element to the parent specified.
     */
    parent(parent: string|any): p5.Element
    
    /**
     * <p>Sets the ID of the element.
     */
    id(id?: string): p5.Element|string
    
    // TODO: Fix class() errors in src/core/p5.Element.js:
    //
    //   param "class" is a reserved word in JS
    //
    // class(class?: string): p5.Element|string
    
    /**
     * <p>The .mousePressed() function is called once after every time a
     * mouse button is pressed over the element.
     */
    mousePressed(fxn: () => any): p5.Element
    
    /**
     * <p>The .mouseWheel() function is called once after every time a
     * mouse wheel is scrolled over the element.
     */
    mouseWheel(fxn: () => any): p5.Element
    
    /**
     * <p>The .mouseReleased() function is called once after every time a
     * mouse button is released over the element.
     */
    mouseReleased(fxn: () => any): p5.Element
    
    /**
     * <p>The .mouseClicked() function is called once after a mouse button is
     * pressed and released over the element.
     */
    mouseClicked(fxn: () => any): p5.Element
    
    /**
     * <p>The .mouseMoved() function is called once every time a
     * mouse moves over the element.
     */
    mouseMoved(fxn: () => any): p5.Element
    
    /**
     * <p>The .mouseOver() function is called once after every time a
     * mouse moves onto the element.
     */
    mouseOver(fxn: () => any): p5.Element
    
    /**
     * <p>The .changed() function is called when the value of an
     * element is changed.
     */
    changed(fxn: () => any): p5.Element
    
    /**
     * <p>The .input() function is called when any user input is
     * detected with an element.
     */
    input(fxn: () => any): p5.Element
    
    /**
     * <p>The .mouseOut() function is called once after every time a
     * mouse moves off the element.
     */
    mouseOut(fxn: () => any): p5.Element
    
    /**
     * <p>The .touchStarted() function is called once after every time a touch is
     * registered.
     */
    touchStarted(fxn: () => any): p5.Element
    
    /**
     * <p>The .touchMoved() function is called once after every time a touch move is
     * registered.
     */
    touchMoved(fxn: () => any): p5.Element
    
    /**
     * <p>The .touchEnded() function is called once after every time a touch is
     * registered.
     */
    touchEnded(fxn: () => any): p5.Element
    
    /**
     * <p>The .dragOver() function is called once after every time a
     * file is dragged over the element.
     */
    dragOver(fxn: () => any): p5.Element
    
    /**
     * <p>The .dragLeave() function is called once after every time a
     * dragged file leaves the element area.
     */
    dragLeave(fxn: () => any): p5.Element
    
    // TODO: Fix drop() errors in src/core/p5.Element.js:
    //
    //   param "callback" is defined multiple times
    //
    // drop(callback: () => any, callback: () => any): p5.Element
    
    // lib/addons/p5.dom.js
    
    // TODO: Fix addClass() errors in lib/addons/p5.dom.js:
    //
    //   param "class" is a reserved word in JS
    //   return has invalid type: Object/p5.Element
    //
    // addClass(class: string): Object/p5.Element
    
    // TODO: Fix removeClass() errors in lib/addons/p5.dom.js:
    //
    //   param "class" is a reserved word in JS
    //   return has invalid type: Object/p5.Element
    //
    // removeClass(class: string): Object/p5.Element
    
    /**
     * <p>Attaches the element  as a child to the parent specified.
     */
    child(child?: string|any|p5.Element): p5.Element
    
    // TODO: Fix html() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element|String
    //
    // html(html?: string, append?: boolean): Object/p5.Element|string
    
    // TODO: Fix position() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // position(x?: number, y?: number): Object/p5.Element
    
    // TODO: Fix style() errors in lib/addons/p5.dom.js:
    //
    //   param "value" is defined multiple times
    //   param "value" is defined multiple times
    //   param "value" is defined multiple times
    //   return has invalid type: String|Object/p5.Element
    //
    // style(property: string, value?: string|number|p5.Color, value?: string|number, value?: string|number, value?: string|number): string|Object/p5.Element
    
    // TODO: Fix attribute() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: String|Object/p5.Element
    //
    // attribute(attr: string, value?: string): string|Object/p5.Element
    
    // TODO: Fix removeAttribute() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // removeAttribute(attr: string): Object/p5.Element
    
    // TODO: Fix value() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: String|Object/p5.Element
    //
    // value(value?: string|number): string|Object/p5.Element
    
    // TODO: Fix show() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // show(): Object/p5.Element
    
    // TODO: Fix hide() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // hide(): Object/p5.Element
    
    // TODO: Fix size() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // size(w?: number, h?: number): Object/p5.Element
    
    /**
     * <p>Removes the element and deregisters all listeners.</p>
     * 
     */
    remove(): void
  }
  
  // src/core/p5.Graphics.js
  
  class Graphics extends p5.Element {
    // TODO: Fix p5.Graphics() errors in src/core/p5.Graphics.js:
    //
    //   required param "whether" follows an optional param
    //
    // constructor(elt: string, pInst?: any, whether: boolean)
    
  }
  
  // src/core/p5.Renderer.js
  
  class Renderer extends p5.Element {
    // TODO: Fix p5.Renderer() errors in src/core/p5.Renderer.js:
    //
    //   required param "whether" follows an optional param
    //
    // constructor(elt: string, pInst?: any, whether: boolean)
    
  }
  
  // src/image/p5.Image.js
  
  class Image {
    /**
     * <p>Creates a new p5.Image.
     */
    constructor(width: number, height: number, pInst: any)
    
    /**
     * <p>Image width.</p>
     * 
     */
    width: any
    
    /**
     * <p>Image height.</p>
     * 
     */
    height: any
    
    // TODO: Property "pixels[]", defined in src/image/p5.Image.js, is not a valid JS symbol name
    
    /**
     * <p>Loads the pixels data for this image into the [pixels] attribute.</p>
     * 
     */
    loadPixels(): void
    
    // TODO: Fix updatePixels() errors in src/image/p5.Image.js:
    //
    //   param "x" has invalid type: Integer|undefined
    //   param "y" has invalid type: Integer|undefined
    //   param "w" has invalid type: Integer|undefined
    //   param "h" has invalid type: Integer|undefined
    //
    // updatePixels(x: number|undefined, y: number|undefined, w: number|undefined, h: number|undefined): void
    
    // TODO: Fix get() errors in src/image/p5.Image.js:
    //
    //   return has invalid type: Array/Color | p5.Image
    //
    // get(x?: number, y?: number, w?: number, h?: number): Array/Color | p5.Image
    
    /**
     * <p>Set the color of a single pixel or write an image into
     * this p5.Image.</p>
     * <p>Note that for a large number of pixels this will
     * be slower than directly manipulating the pixels array
     * and then calling updatePixels().</p>
     * 
     */
    set(x: number, y: number, a: number|any[]|any): void
    
    /**
     * <p>Resize the image to a new width and height.
     */
    resize(width: number, height: number): void
    
    // TODO: Fix copy() errors in src/image/p5.Image.js:
    //
    //   param "srcImage" has invalid type: p5.Image|undefined
    //
    // copy(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void
    
    /**
     * <p>Masks part of an image from displaying by loading another
     * image and using it&#39;s alpha channel as an alpha channel for
     * this image.</p>
     * 
     */
    mask(srcImage: p5.Image): void
    
    // TODO: Fix filter() errors in src/image/p5.Image.js:
    //
    //   param "value" has invalid type: Number|undefined
    //
    // filter(operation: string, value: number|undefined): void
    
    // TODO: Fix blend() errors in src/image/p5.Image.js:
    //
    //   param "srcImage" has invalid type: p5.Image|undefined
    //
    // blend(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: number): void
    
    /**
     * <p>Saves the image to a file and force the browser to download it.
     */
    save(filename: string, extension: string): void
  }
  
  // src/io/p5.Table.js
  
  class Table {
    /**
     * <p>Table objects store data with multiple rows and columns, much
     * like in a traditional spreadsheet.
     */
    constructor(rows?: any[])
    columns: any
    rows: any
    
    /**
     * <p>Use addRow() to add a new row of data to a p5.Table object.
     */
    addRow(row?: p5.TableRow): void
    
    /**
     * <p>Removes a row from the table object.</p>
     * 
     */
    removeRow(id: number): void
    
    // TODO: Fix getRow() errors in src/io/p5.Table.js:
    //
    //   return has invalid type: TableRow
    //
    // getRow(rowID: number): TableRow
    
    /**
     * <p>Gets all rows from the table.
     */
    getRows(): any[]
    
    // TODO: Fix findRow() errors in src/io/p5.Table.js:
    //
    //   return has invalid type: TableRow
    //
    // findRow(value: string, column: number|string): TableRow
    
    /**
     * <p>Finds the rows in the Table that contain the value
     * provided, and returns references to those rows.
     */
    findRows(value: string, column: number|string): any[]
    
    // TODO: Fix matchRow() errors in src/io/p5.Table.js:
    //
    //   return has invalid type: TableRow
    //
    // matchRow(regexp: string, column: string|number): TableRow
    
    /**
     * <p>Finds the rows in the Table that match the regular expression provided,
     * and returns references to those rows.
     */
    matchRows(regexp: string, column?: string|number): any[]
    
    /**
     * <p>Retrieves all values in the specified column, and returns them
     * as an array.
     */
    getColumn(column: string|number): any[]
    
    /**
     * <p>Removes all rows from a Table.
     */
    clearRows(): void
    
    /**
     * <p>Use addColumn() to add a new column to a Table object.
     */
    addColumn(title?: string): void
    
    /**
     * <p>Returns the total number of rows in a Table.</p>
     * 
     */
    getRowCount(): number
    
    /**
     * <p>Removes any of the specified characters (or &quot;tokens&quot;).</p>
     * 
     * <p>If no column is specified, then the values in all columns and
     * rows are processed.
     */
    removeTokens(chars: string, column?: string|number): void
    
    /**
     * <p>Trims leading and trailing whitespace, such as spaces and tabs,
     * from String table values.
     */
    trim(column: string|number): void
    
    /**
     * <p>Use removeColumn() to remove an existing column from a Table
     * object.
     */
    removeColumn(column: string|number): void
    
    /**
     * <p>Stores a value in the Table&#39;s specified row and column.
     */
    set(column: string|number, value: string|number): void
    
    /**
     * <p>Stores a Float value in the Table&#39;s specified row and column.
     */
    setNum(row: number, column: string|number, value: number): void
    
    /**
     * <p>Stores a String value in the Table&#39;s specified row and column.
     */
    setString(row: number, column: string|number, value: string): void
    
    /**
     * <p>Retrieves a value from the Table&#39;s specified row and column.
     */
    get(row: number, column: string|number): string|number
    
    /**
     * <p>Retrieves a Float value from the Table&#39;s specified row and column.
     */
    getNum(row: number, column: string|number): number
    
    /**
     * <p>Retrieves a String value from the Table&#39;s specified row and column.
     */
    getString(row: number, column: string|number): string
    
    /**
     * <p>Retrieves all table data and returns as an object.
     */
    getObject(headerColumn: string): any
    
    /**
     * <p>Retrieves all table data and returns it as a multidimensional array.</p>
     * 
     */
    getArray(): any[]
  }
  
  // src/io/p5.TableRow.js
  
  class TableRow {
    /**
     * <p>A TableRow object represents a single row of data values,
     * stored in columns, from a table.</p>
     * <p>A Table Row contains both an ordered array, and an unordered
     * JSON object.</p>
     * 
     */
    constructor(str?: string, separator?: string)
    
    /**
     * <p>Stores a value in the TableRow&#39;s specified column.
     */
    set(column: string|number, value: string|number): void
    
    /**
     * <p>Stores a Float value in the TableRow&#39;s specified column.
     */
    setNum(column: string|number, value: number): void
    
    /**
     * <p>Stores a String value in the TableRow&#39;s specified column.
     */
    setString(column: string|number, value: string): void
    
    /**
     * <p>Retrieves a value from the TableRow&#39;s specified column.
     */
    get(column: string|number): string|number
    
    /**
     * <p>Retrieves a Float value from the TableRow&#39;s specified
     * column.
     */
    getNum(column: string|number): number
    
    /**
     * <p>Retrieves an String value from the TableRow&#39;s specified
     * column.
     */
    getString(column: string|number): string
  }
  
  // src/io/p5.XML.js
  
  class XML {
    /**
     * <p>XML is a representation of an XML object, able to parse XML code.
     */
    constructor()
    
    /**
     * <p>Gets a copy of the element&#39;s parent.
     */
    getParent(): any
    
    /**
     * <p>Gets the element&#39;s full name, which is returned as a String.</p>
     * 
     */
    getName(): string
    
    /**
     * <p>Sets the element&#39;s name, which is specified as a String.</p>
     * 
     */
    setName(the: string): void
    
    /**
     * <p>Checks whether or not the element has any children, and returns the result
     * as a boolean.</p>
     * 
     */
    hasChildren(): boolean
    
    /**
     * <p>Get the names of all of the element&#39;s children, and returns the names as an
     * array of Strings.
     */
    listChildren(): any[]
    
    /**
     * <p>Returns all of the element&#39;s children as an array of p5.XML objects.
     */
    getChildren(name?: string): any[]
    
    /**
     * <p>Returns the first of the element&#39;s children that matches the name parameter
     * or the child of the given index.It returns undefined if no matching
     * child is found.</p>
     * 
     */
    getChild(name: string|number): p5.XML
    
    /**
     * <p>Appends a new child to the element.
     */
    addChild(a: any): void
    
    /**
     * <p>Removes the element specified by name or index.</p>
     * 
     */
    removeChild(name: string|number): void
    
    /**
     * <p>Counts the specified element&#39;s number of attributes, returned as an Number.</p>
     * 
     */
    getAttributeCount(): number
    
    /**
     * <p>Gets all of the specified element&#39;s attributes, and returns them as an
     * array of Strings.</p>
     * 
     */
    listAttributes(): any[]
    
    /**
     * <p>Checks whether or not an element has the specified attribute.</p>
     * 
     */
    hasAttribute(the: string): boolean
    
    /**
     * <p>Returns an attribute value of the element as an Number.
     */
    getNumber(name: string, defaultValue?: number): number
    
    /**
     * <p>Returns an attribute value of the element as an String.
     */
    getString(name: string, defaultValue?: number): number
    
    /**
     * <p>Sets the content of an element&#39;s attribute.
     */
    setAttribute(name: string, value: number): void
    
    /**
     * <p>Returns the content of an element.
     */
    getContent(defaultValue?: string): string
    
    /**
     * <p>Sets the element&#39;s content.</p>
     * 
     */
    setContent(text: string): void
  }
  
  // src/math/p5.Vector.js
  
  class Vector {
    /**
     * <p>A class to describe a two or three dimensional vector, specifically
     * a Euclidean (also known as geometric) vector.
     */
    constructor(x?: number, y?: number, z?: number)
    
    /**
     * <p>The x component of the vector</p>
     * 
     */
    x: any
    
    /**
     * <p>The y component of the vector</p>
     * 
     */
    y: any
    
    /**
     * <p>The z component of the vector</p>
     * 
     */
    z: any
    
    /**
     * <p>Returns a string representation of a vector v by calling String(v)
     * or v.toString().
     */
    toString(): void
    
    /**
     * <p>Sets the x, y, and z component of the vector using two or three separate
     * variables, the data from a p5.Vector, or the values from a float array.</p>
     * 
     */
    set(x?: number|p5.Vector|any[], y?: number, z?: number): void
    
    /**
     * <p>Gets a copy of the vector, returns a p5.Vector object.</p>
     * 
     */
    copy(): p5.Vector
    
    /**
     * <p>Adds x, y, and z components to a vector, adds one vector to another, or
     * adds two independent vectors together.
     */
    add(x: number|p5.Vector|any[], y?: number, z?: number): p5.Vector
    
    /**
     * <p>Subtracts x, y, and z components from a vector, subtracts one vector from
     * another, or subtracts two independent vectors.
     */
    sub(x: number|p5.Vector|any[], y?: number, z?: number): p5.Vector
    
    /**
     * <p>Multiply the vector by a scalar.
     */
    mult(n: number): p5.Vector
    
    /**
     * <p>Divide the vector by a scalar.
     */
    div(n: number): p5.Vector
    
    /**
     * <p>Calculates the magnitude (length) of the vector and returns the result as
     * a float (this is simply the equation sqrt(x<em>x + y</em>y + z*z).)</p>
     * 
     */
    mag(): number
    
    /**
     * <p>Calculates the squared magnitude of the vector and returns the result
     * as a float (this is simply the equation <em>(x<em>x + y</em>y + z*z)</em>.)
     * Faster if the real length is not required in the
     * case of comparing vectors, etc.</p>
     * 
     */
    magSq(): number
    
    /**
     * <p>Calculates the dot product of two vectors.
     */
    dot(x: number|p5.Vector, y?: number, z?: number): number
    
    /**
     * <p>Calculates and returns a vector composed of the cross product between
     * two vectors.
     */
    cross(v: p5.Vector): p5.Vector
    
    /**
     * <p>Calculates the Euclidean distance between two points (considering a
     * point as a vector object).</p>
     * 
     */
    dist(v: p5.Vector): number
    
    /**
     * <p>Normalize the vector to length 1 (make it a unit vector).</p>
     * 
     */
    normalize(): p5.Vector
    
    /**
     * <p>Limit the magnitude of this vector to the value used for the <b>max</b>
     * parameter.</p>
     * 
     */
    limit(max: number): p5.Vector
    
    /**
     * <p>Set the magnitude of this vector to the value used for the <b>len</b>
     * parameter.</p>
     * 
     */
    setMag(len: number): p5.Vector
    
    /**
     * <p>Calculate the angle of rotation for this vector (only 2D vectors)</p>
     * 
     */
    heading(): number
    
    /**
     * <p>Rotate the vector by an angle (only 2D vectors), magnitude remains the
     * same</p>
     * 
     */
    rotate(angle: number): p5.Vector
    
    // TODO: Fix lerp() errors in src/math/p5.Vector.js:
    //
    //   required param "amt" follows an optional param
    //
    // lerp(x: p5.Vector, y?: p5.Vector, z?: p5.Vector, amt: number): p5.Vector
    
    /**
     * <p>Return a representation of this vector as a float array.
     */
    array(): any[]
    
    /**
     * <p>Equality check against a p5.Vector</p>
     * 
     */
    equals(x?: number|p5.Vector|any[], y?: number, z?: number): boolean
    
    /**
     * <p>Make a new 2D unit vector from an angle</p>
     * 
     */
    static fromAngle(angle: number): p5.Vector
    
    /**
     * <p>Make a new 2D unit vector from a random angle</p>
     * 
     */
    static random2D(): p5.Vector
    
    /**
     * <p>Make a new random 3D unit vector.</p>
     * 
     */
    static random3D(): p5.Vector
    
    /**
     * <p>Calculates and returns the angle (in radians) between two vectors.</p>
     * 
     */
    static angleBetween(v1: p5.Vector, v2: p5.Vector): number
  }
  
  // src/typography/p5.Font.js
  
  class Font {
    /**
     * <p>Base class for font handling</p>
     * 
     */
    constructor(pInst?: any)
    
    /**
     * <p>Underlying opentype font implementation</p>
     * 
     */
    font: any
    
    /**
     * <p>Returns a tight bounding box for the given text string using this
     * font (currently only supports single lines)</p>
     * 
     */
    textBounds(line: string, x: number, y: number, fontSize: number, options: any): any
  }
  
  // src/webgl/p5.RendererGL.js
  
  class RendererGL extends p5.Renderer {
    constructor()
    
    /**
     * <p>Basic fill material for geometry with a given color</p>
     * 
     */
    fill(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5
  }
  
  // lib/addons/p5.dom.js
  
  class MediaElement {
    /**
     * <p>Extends p5.Element to handle audio and video.
     */
    constructor(elt: string, pInst?: any)
    
    /**
     * <p>Path to the media element source.</p>
     * 
     */
    src: any
    
    // TODO: Fix play() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // play(): Object/p5.Element
    
    // TODO: Fix stop() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // stop(): Object/p5.Element
    
    // TODO: Fix pause() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // pause(): Object/p5.Element
    
    // TODO: Fix loop() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // loop(): Object/p5.Element
    
    // TODO: Fix noLoop() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // noLoop(): Object/p5.Element
    
    // TODO: Fix autoplay() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.Element
    //
    // autoplay(autoplay: boolean): Object/p5.Element
    
    /**
     * <p>Sets volume for this HTML5 media element.
     */
    volume(val?: number): number|p5.MediaElement
    
    // TODO: Fix speed() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Number|Object/p5.MediaElement
    //
    // speed(speed?: number): number|Object/p5.MediaElement
    
    // TODO: Fix time() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Number|Object/p5.MediaElement
    //
    // time(time?: number): number|Object/p5.MediaElement
    
    /**
     * <p>Returns the duration of the HTML5 media element.</p>
     * 
     */
    duration(): number
    
    // TODO: Fix onended() errors in lib/addons/p5.dom.js:
    //
    //   return has invalid type: Object/p5.MediaElement
    //
    // onended(callback: () => any): Object/p5.MediaElement
    
    // TODO: Fix connect() errors in lib/addons/p5.dom.js:
    //
    //   param "audioNode" has invalid type: AudioNode|p5.sound object
    //
    // connect(audioNode: AudioNode|p5.sound object): void
    
    /**
     * <p>Disconnect all Web Audio routing, including to master output.
     */
    disconnect(): void
    
    /**
     * <p>Show the default MediaElement controls, as determined by the web browser.</p>
     * 
     */
    showControls(): void
    
    /**
     * <p>Hide the default mediaElement controls.</p>
     * 
     */
    hideControls(): void
    
    /**
     * <p>Schedule events to trigger every time a MediaElement
     * (audio/video) reaches a playback cue point.</p>
     * <p>Accepts a callback function, a time (in seconds) at which to trigger
     * the callback, and an optional parameter for the callback.</p>
     * <p>Time will be passed as the first parameter to the callback function,
     * and param will be the second parameter.</p>
     * 
     */
    addCue(time: number, callback: () => any, value?: any): number
    
    /**
     * <p>Remove a callback based on its ID.
     */
    removeCue(id: number): void
    
    /**
     * <p>Remove all of the callbacks that had originally been scheduled
     * via the addCue method.</p>
     * 
     */
    clearCues(): void
  }
  class File {
    // TODO: Fix p5.File() errors in lib/addons/p5.dom.js:
    //
    //   param "file" has invalid type: File
    //
    // constructor(file: File, pInst?: any)
    
    /**
     * <p>Underlying File object.
     */
    file: any
    
    /**
     * <p>File type (image, text, etc.)</p>
     * 
     */
    type: any
    
    /**
     * <p>File subtype (usually the file extension jpg, png, xml, etc.)</p>
     * 
     */
    subtype: any
    
    /**
     * <p>File name</p>
     * 
     */
    name: any
    
    /**
     * <p>File size</p>
     * 
     */
    size: any
    
    /**
     * <p>URL string containing image data.</p>
     * 
     */
    data: any
  }
  
  // lib/addons/p5.sound.js
  
  class SoundFile {
    // TODO: Fix p5.SoundFile() errors in lib/addons/p5.sound.js:
    //
    //   param "path" has invalid type: String/Array
    //
    // constructor(path: String/Array, successCallback?: () => any, errorCallback?: () => any, whileLoadingCallback?: () => any)
    
    // TODO: Fix loadSound() errors in lib/addons/p5.sound.js:
    //
    //   param "path" has invalid type: String/Array
    //   return has invalid type: SoundFile
    //
    // loadSound(path: String/Array, successCallback?: () => any, errorCallback?: () => any, whileLoading?: () => any): SoundFile
    
    /**
     * <p>Returns true if the sound file finished loading successfully.</p>
     * 
     */
    isLoaded(): boolean
    
    /**
     * <p>Play the p5.SoundFile</p>
     * 
     */
    play(startTime?: number, rate?: number, amp?: number, cueStart?: number, duration?: number): void
    
    /**
     * <p>p5.SoundFile has two play modes: <code>restart</code> and
     * <code>sustain</code>.
     */
    playMode(str: string): void
    
    /**
     * <p>Pauses a file that is currently playing.
     */
    pause(startTime?: number): void
    
    /**
     * <p>Loop the p5.SoundFile.
     */
    loop(startTime?: number, rate?: number, amp?: number, cueLoopStart?: number, duration?: number): void
    
    /**
     * <p>Returns true if a p5.SoundFile is playing, false if not (i.e.
     */
    isPlaying(): boolean
    
    /**
     * <p>Returns true if a p5.SoundFile is paused, false if not (i.e.
     */
    isPaused(): boolean
    
    /**
     * <p>Stop soundfile playback.</p>
     * 
     */
    stop(startTime?: number): void
    
    /**
     * <p>Multiply the output volume (amplitude) of a sound file
     * between 0.0 (silence) and 1.0 (full volume).
     */
    setVolume(volume: number|any, rampTime?: number, timeFromNow?: number): void
    
    // TODO: Fix pan() errors in lib/addons/p5.sound.js:
    //
    //   required param "timeFromNow" follows an optional param
    //
    // pan(panValue?: number, timeFromNow: number): void
    
    /**
     * <p>Set the playback rate of a sound file.
     */
    rate(playbackRate?: number): void
    
    /**
     * <p>Returns the duration of a sound file in seconds.</p>
     * 
     */
    duration(): number
    
    /**
     * <p>Return the current position of the p5.SoundFile playhead, in seconds.
     */
    currentTime(): number
    
    /**
     * <p>Move the playhead of the song to a position, in seconds.
     */
    jump(cueTime: number, duration: number): void
    
    /**
     * <p>Return the number of channels in a sound file.
     */
    channels(): number
    
    /**
     * <p>Return the sample rate of the sound file.</p>
     * 
     */
    sampleRate(): number
    
    /**
     * <p>Return the number of samples in a sound file.
     */
    frames(): number
    
    // TODO: Fix getPeaks() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: Float32Array
    //
    // getPeaks(length?: number): Float32Array
    
    /**
     * <p>Reverses the p5.SoundFile&#39;s buffer source.
     */
    reverseBuffer(): void
    
    /**
     * <p>Schedule an event to be called when the soundfile
     * reaches the end of a buffer.
     */
    onended(callback: () => any): void
    
    /**
     * <p>Connects the output of a p5sound object to input of another
     * p5.sound object.
     */
    connect(object?: any): void
    
    /**
     * <p>Disconnects the output of this p5sound object.</p>
     * 
     */
    disconnect(): void
    
    /**
     * <p>Reset the source for this SoundFile to a
     * new path (URL).</p>
     * 
     */
    setPath(path: string, callback: () => any): void
    
    /**
     * <p>processPeaks returns an array of timestamps where it thinks there is a beat.</p>
     * <p>This is an asynchronous function that processes the soundfile in an offline audio context,
     * and sends the results to your callback function.</p>
     * <p>The process involves running the soundfile through a lowpass filter, and finding all of the
     * peaks above the initial threshold.
     */
    processPeaks(callback: () => any, initThreshold?: number, minThreshold?: number, minPeaks?: number): any[]
    
    /**
     * <p>Schedule events to trigger every time a MediaElement
     * (audio/video) reaches a playback cue point.</p>
     * <p>Accepts a callback function, a time (in seconds) at which to trigger
     * the callback, and an optional parameter for the callback.</p>
     * <p>Time will be passed as the first parameter to the callback function,
     * and param will be the second parameter.</p>
     * 
     */
    addCue(time: number, callback: () => any, value?: any): number
    
    /**
     * <p>Remove a callback based on its ID.
     */
    removeCue(id: number): void
    
    /**
     * <p>Remove all of the callbacks that had originally been scheduled
     * via the addCue method.</p>
     * 
     */
    clearCues(): void
  }
  class Amplitude {
    /**
     * <p>Amplitude measures volume between 0.0 and 1.0.
     */
    constructor(smoothing?: number)
    
    // TODO: Fix setInput() errors in lib/addons/p5.sound.js:
    //
    //   param "snd" has invalid type: SoundObject|undefined
    //   param "smoothing" has invalid type: Number|undefined
    //
    // setInput(snd?: SoundObject|undefined, smoothing?: number|undefined): void
    
    /**
     * <p>Returns a single Amplitude reading at the moment it is called.
     */
    getLevel(channel?: number): number
    
    /**
     * <p>Determines whether the results of Amplitude.process() will be
     * Normalized.
     */
    toggleNormalize(boolean?: boolean): void
    
    /**
     * <p>Smooth Amplitude analysis by averaging with the last analysis 
     * frame.
     */
    smooth(set: number): void
  }
  class FFT {
    /**
     * <p>FFT (Fast Fourier Transform) is an analysis algorithm that
     * isolates individual
     * <a href="https://en.wikipedia.org/wiki/Audio_frequency">
     * audio frequencies</a> within a waveform.</p>
     * 
     * <p>Once instantiated, a p5.FFT object can return an array based on
     * two types of analyses: <br> • <code>FFT.waveform()</code> computes
     * amplitude values along the time domain.
     */
    constructor(smoothing?: number, bins?: number)
    
    /**
     * <p>Set the input source for the FFT analysis.
     */
    setInput(source?: any): void
    
    /**
     * <p>Returns an array of amplitude values (between -1.0 and +1.0) that represent
     * a snapshot of amplitude readings in a single buffer.
     */
    waveform(bins?: number, precision?: string): any[]
    
    /**
     * <p>Returns an array of amplitude values (between 0 and 255)
     * across the frequency spectrum.
     */
    analyze(bins?: number, scale?: number): any[]
    
    /**
     * <p>Returns the amount of energy (volume) at a specific
     * <a href="en.wikipedia.org/wiki/Audio_frequency" target="_blank">
     * frequency</a>, or the average amount of energy between two
     * frequencies.
     */
    getEnergy(frequency1: number|string, frequency2?: number): number
    
    /**
     * <p>Returns the 
     * <a href="http://en.wikipedia.org/wiki/Spectral_centroid" target="_blank">
     * spectral centroid</a> of the input signal.
     */
    getCentroid(): number
    
    /**
     * <p>Smooth FFT analysis by averaging with the last analysis frame.</p>
     * 
     */
    smooth(smoothing: number): void
    
    /**
     * <p>Returns an array of average amplitude values for a given number
     * of frequency bands split equally.
     */
    linAverages(N: number): any[]
    
    /**
     * <p>Returns an array of average amplitude values of the spectrum, for a given 
     * set of <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">
     * Octave Bands</a>
     * <em>NOTE: analyze() must be called prior to logAverages().
     */
    logAverages(octaveBands: any[]): any[]
    
    /**
     * <p>Calculates and Returns the 1/N
     * <a href="https://en.wikipedia.org/wiki/Octave_band" target="_blank">Octave Bands</a>
     * N defaults to 3 and minimum central frequency to 15.625Hz.
     */
    getOctaveBands(N: number, fCtr0: number): any[]
  }
  class Signal {
    // TODO: Fix p5.Signal() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: Tone.Signal
    //
    // constructor()
    
    // TODO: Fix fade() errors in lib/addons/p5.sound.js:
    //
    //   param "secondsFromNow" has invalid type: [Number]
    //
    // fade(value: number, secondsFromNow: [Number]): void
    
    // TODO: Fix add() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: p5.SignalAdd
    //
    // add(number: number): p5.SignalAdd
    
    // TODO: Fix mult() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: Tone.Multiply
    //
    // mult(number: number): Tone.Multiply
    
    // TODO: Fix scale() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: p5.SignalScale
    //
    // scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number): p5.SignalScale
    
  }
  class Oscillator {
    /**
     * <p>Creates a signal that oscillates between -1.0 and 1.0.
     */
    constructor(freq?: number, type?: string)
    
    /**
     * <p>Start an oscillator.
     */
    start(time?: number, frequency?: number): void
    
    /**
     * <p>Stop an oscillator.
     */
    stop(secondsFromNow: number): void
    
    // TODO: Fix amp() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: AudioParam
    //
    // amp(vol: number|any, rampTime?: number, timeFromNow?: number): AudioParam
    
    // TODO: Fix freq() errors in lib/addons/p5.sound.js:
    //
    //   return has invalid type: AudioParam
    //
    // freq(Frequency: number|any, rampTime?: number, timeFromNow?: number): AudioParam
    
    /**
     * <p>Set type to &#39;sine&#39;, &#39;triangle&#39;, &#39;sawtooth&#39; or &#39;square&#39;.</p>
     * 
     */
    setType(type: string): void
    
    /**
     * <p>Connect to a p5.sound / Web Audio object.</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all outputs</p>
     * 
     */
    disconnect(): void
    
    /**
     * <p>Pan between Left (-1) and Right (1)</p>
     * 
     */
    pan(panning: number, timeFromNow: number): void
    
    /**
     * <p>Set the phase of an oscillator between 0.0 and 1.0.
     */
    phase(phase: number): void
    
    /**
     * <p>Add a value to the p5.Oscillator&#39;s output amplitude,
     * and return the oscillator.
     */
    add(number: number): p5.Oscillator
    
    /**
     * <p>Multiply the p5.Oscillator&#39;s output amplitude
     * by a fixed value (i.e.
     */
    mult(number: number): p5.Oscillator
    
    /**
     * <p>Scale this oscillator&#39;s amplitude values to a given
     * range, and return the oscillator.
     */
    scale(inMin: number, inMax: number, outMin: number, outMax: number): p5.Oscillator
    
    // TODO: Fix p5.SinOsc() errors in lib/addons/p5.sound.js:
    //
    //   "p5.SinOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SinOsc(freq: [Number]): void
    
    // TODO: Fix p5.TriOsc() errors in lib/addons/p5.sound.js:
    //
    //   "p5.TriOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.TriOsc(freq: [Number]): void
    
    // TODO: Fix p5.SawOsc() errors in lib/addons/p5.sound.js:
    //
    //   "p5.SawOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SawOsc(freq: [Number]): void
    
    // TODO: Fix p5.SqrOsc() errors in lib/addons/p5.sound.js:
    //
    //   "p5.SqrOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SqrOsc(freq: [Number]): void
    
  }
  class Env {
    /**
     * <p>Envelopes are pre-defined amplitude distribution over time.
     */
    constructor()
    
    /**
     * <p>Time until envelope reaches attackLevel</p>
     * 
     */
    attackTime: any
    
    /**
     * <p>Level once attack is complete.</p>
     * 
     */
    attackLevel: any
    
    /**
     * <p>Time until envelope reaches decayLevel.</p>
     * 
     */
    decayTime: any
    
    /**
     * <p>Level after decay.
     */
    decayLevel: any
    
    /**
     * <p>Duration of the release portion of the envelope.</p>
     * 
     */
    releaseTime: any
    
    /**
     * <p>Level at the end of the release.</p>
     * 
     */
    releaseLevel: any
    
    /**
     * <p>Reset the envelope with a series of time/value pairs.</p>
     * 
     */
    set(attackTime: number, attackLevel: number, decayTime: number, decayLevel: number, releaseTime: number, releaseLevel: number): void
    
    /**
     * <p>Set values like a traditional
     * <a href="https://en.wikipedia.org/wiki/Synthesizer#/media/File:ADSR_parameter.svg">
     * ADSR envelope
     * </a>.</p>
     * 
     */
    setADSR(attackTime: number, decayTime?: number, susRatio?: number, releaseTime?: number): void
    
    /**
     * <p>Set max (attackLevel) and min (releaseLevel) of envelope.</p>
     * 
     */
    setRange(aLevel: number, rLevel: number): void
    
    /**
     * <p>Assign a parameter to be controlled by this envelope.
     */
    setInput(unit: any): void
    
    /**
     * <p>Set whether the envelope ramp is linear (default) or exponential.
     */
    setExp(isExp: boolean): void
    
    /**
     * <p>Play tells the envelope to start acting on a given input.
     */
    play(unit: any, startTime?: number, sustainTime?: number): void
    
    /**
     * <p>Trigger the Attack, and Decay portion of the Envelope.
     */
    triggerAttack(unit: any, secondsFromNow: number): void
    
    /**
     * <p>Trigger the Release of the Envelope.
     */
    triggerRelease(unit: any, secondsFromNow: number): void
    
    /**
     * <p>Exponentially ramp to a value using the first two
     * values from <code><a href="#/p5.Env/setADSR">setADSR(attackTime, decayTime)</a></code>
     * as <a href="https://en.wikipedia.org/wiki/RC_time_constant">
     * time constants</a> for simple exponential ramps.
     */
    ramp(unit: any, secondsFromNow: number, v: number, v2?: number): void
    
    /**
     * <p>Add a value to the p5.Oscillator&#39;s output amplitude,
     * and return the oscillator.
     */
    add(number: number): p5.Env
    
    /**
     * <p>Multiply the p5.Env&#39;s output amplitude
     * by a fixed value.
     */
    mult(number: number): p5.Env
    
    /**
     * <p>Scale this envelope&#39;s amplitude values to a given
     * range, and return the envelope.
     */
    scale(inMin: number, inMax: number, outMin: number, outMax: number): p5.Env
  }
  class Pulse {
    /**
     * <p>Creates a Pulse object, an oscillator that implements
     * Pulse Width Modulation.
     */
    constructor(freq?: number, w?: number)
    
    /**
     * <p>Set the width of a Pulse object (an oscillator that implements
     * Pulse Width Modulation).</p>
     * 
     */
    width(width?: number): void
  }
  class Noise {
    /**
     * <p>Noise is a type of oscillator that generates a buffer with random values.</p>
     * 
     */
    constructor(type: string)
    
    /**
     * <p>Set type of noise to &#39;white&#39;, &#39;pink&#39; or &#39;brown&#39;.
     */
    setType(type?: string): void
    
    /**
     * <p>Start the noise</p>
     * 
     */
    start(): void
    
    /**
     * <p>Stop the noise.</p>
     * 
     */
    stop(): void
    
    /**
     * <p>Pan the noise.</p>
     * 
     */
    pan(panning: number, timeFromNow: number): void
    
    /**
     * <p>Send output to a p5.sound or web audio object</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all output.</p>
     * 
     */
    disconnect(): void
  }
  class AudioIn {
    /**
     * <p>Get audio from an input, i.e.
     */
    constructor(errorCallback?: () => any)
    
    /**
     * <p>Client must allow browser to access their microphone / audioin source.
     */
    enabled: any
    
    /**
     * <p>Start processing audio input.
     */
    start(successCallback: () => any, errorCallback: () => any): void
    
    /**
     * <p>Turn the AudioIn off.
     */
    stop(): void
    
    /**
     * <p>Connect to an audio unit.
     */
    connect(unit?: any): void
    
    /**
     * <p>Disconnect the AudioIn from all audio units.
     */
    disconnect(): void
    
    /**
     * <p>Read the Amplitude (volume level) of an AudioIn.
     */
    getLevel(smoothing?: number): number
    
    /**
     * <p>Set amplitude (volume) of a mic input between 0 and 1.0.
     */
    amp(vol: number, time?: number): void
    
    /**
     * <p>Chrome only.
     */
    getSources(callback: () => any): void
    
    /**
     * <p>Set the input source.
     */
    setSource(num: number): void
  }
  class Filter {
    // TODO: Fix p5.Filter() errors in lib/addons/p5.sound.js:
    //
    //   param "type" has invalid type: [String]
    //
    // constructor(type: [String])
    
    /**
     * <p>The p5.Filter is built with a
     * <a href="http://www.w3.org/TR/webaudio/#BiquadFilterNode">
     * Web Audio BiquadFilter Node</a>.</p>
     * 
     */
    biquadFilter: any
    
    // TODO: Fix process() errors in lib/addons/p5.sound.js:
    //
    //   param "freq" has invalid type: [Number]
    //   param "res" has invalid type: [Number]
    //
    // process(Signal: any, freq: [Number], res: [Number]): void
    
    /**
     * <p>Set the frequency and the resonance of the filter.</p>
     * 
     */
    set(freq: number, res: number, timeFromNow?: number): void
    
    /**
     * <p>Set the filter frequency, in Hz, from 10 to 22050 (the range of
     * human hearing, although in reality most people hear in a narrower
     * range).</p>
     * 
     */
    freq(freq: number, timeFromNow?: number): number
    
    /**
     * <p>Controls either width of a bandpass frequency,
     * or the resonance of a low/highpass cutoff frequency.</p>
     * 
     */
    res(res: number, timeFromNow?: number): number
    
    /**
     * <p>Set the type of a p5.Filter.
     */
    setType(UNKNOWN: string): void
    
    /**
     * <p>Set the output level of the filter.</p>
     * 
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void
    
    /**
     * <p>Send output to a p5.sound or web audio object</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all output.</p>
     * 
     */
    disconnect(): void
    
    // TODO: Fix p5.LowPass() errors in lib/addons/p5.sound.js:
    //
    //   "p5.LowPass" is not a valid JS symbol name
    //
    // p5.LowPass(): void
    
    // TODO: Fix p5.HighPass() errors in lib/addons/p5.sound.js:
    //
    //   "p5.HighPass" is not a valid JS symbol name
    //
    // p5.HighPass(): void
    
    // TODO: Fix p5.BandPass() errors in lib/addons/p5.sound.js:
    //
    //   "p5.BandPass" is not a valid JS symbol name
    //
    // p5.BandPass(): void
    
  }
  class Delay {
    /**
     * <p>Delay is an echo effect.
     */
    constructor()
    
    /**
     * <p>The p5.Delay is built with two
     * <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     * Web Audio Delay Nodes</a>, one for each stereo channel.</p>
     * 
     */
    leftDelay: any
    
    /**
     * <p>The p5.Delay is built with two
     * <a href="http://www.w3.org/TR/webaudio/#DelayNode">
     * Web Audio Delay Nodes</a>, one for each stereo channel.</p>
     * 
     */
    rightDelay: any
    
    /**
     * <p>Add delay to an audio signal according to a set
     * of delay parameters.</p>
     * 
     */
    process(Signal: any, delayTime?: number, feedback?: number, lowPass?: number): void
    
    /**
     * <p>Set the delay (echo) time, in seconds.
     */
    delayTime(delayTime: number): void
    
    /**
     * <p>Feedback occurs when Delay sends its signal back through its input
     * in a loop.
     */
    feedback(feedback: number|any): void
    
    /**
     * <p>Set a lowpass filter frequency for the delay.
     */
    filter(cutoffFreq: number|any, res: number|any): void
    
    /**
     * <p>Choose a preset type of delay.
     */
    setType(type: string|number): void
    
    /**
     * <p>Set the output level of the delay effect.</p>
     * 
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void
    
    /**
     * <p>Send output to a p5.sound or web audio object</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all output.</p>
     * 
     */
    disconnect(): void
  }
  class Reverb {
    /**
     * <p>Reverb adds depth to a sound through a large number of decaying
     * echoes.
     */
    constructor()
    
    /**
     * <p>Connect a source to the reverb, and assign reverb parameters.</p>
     * 
     */
    process(src: any, seconds?: number, decayRate?: number, reverse?: boolean): void
    
    /**
     * <p>Set the reverb settings.
     */
    set(seconds?: number, decayRate?: number, reverse?: boolean): void
    
    /**
     * <p>Set the output level of the delay effect.</p>
     * 
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void
    
    /**
     * <p>Send output to a p5.sound or web audio object</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all output.</p>
     * 
     */
    disconnect(): void
  }
  class Convolver {
    /**
     * <p>p5.Convolver extends p5.Reverb.
     */
    constructor(path: string, callback?: () => any, errorCallback?: () => any)
    
    /**
     * <p>Internally, the p5.Convolver uses the a
     * <a href="http://www.w3.org/TR/webaudio/#ConvolverNode">
     * Web Audio Convolver Node</a>.</p>
     * 
     */
    convolverNode: any
    
    /**
     * <p>Create a p5.Convolver.
     */
    createConvolver(path: string, callback?: () => any, errorCallback?: () => any): p5.Convolver
    
    /**
     * <p>Connect a source to the reverb, and assign reverb parameters.</p>
     * 
     */
    process(src: any): void
    
    /**
     * <p>If you load multiple impulse files using the .addImpulse method,
     * they will be stored as Objects in this Array.
     */
    impulses: any
    
    /**
     * <p>Load and assign a new Impulse Response to the p5.Convolver.
     */
    addImpulse(path: string, callback: () => any, errorCallback: () => any): void
    
    /**
     * <p>Similar to .addImpulse, except that the <code>.impulses</code>
     * Array is reset to save memory.
     */
    resetImpulse(path: string, callback: () => any, errorCallback: () => any): void
    
    /**
     * <p>If you have used <code>.addImpulse()</code> to add multiple impulses
     * to a p5.Convolver, then you can use this method to toggle between
     * the items in the <code>.impulses</code> Array.
     */
    toggleImpulse(id: string|number): void
  }
  class Phrase {
    /**
     * <p>A phrase is a pattern of musical events over time, i.e.
     */
    constructor(name: string, callback: () => any, sequence: any[])
    
    /**
     * <p>Array of values to pass into the callback
     * at each step of the phrase.
     */
    sequence: any
  }
  class Part {
    /**
     * <p>A p5.Part plays back one or more p5.Phrases.
     */
    constructor(steps?: number, tatums?: number)
    
    /**
     * <p>Set the tempo of this part, in Beats Per Minute.</p>
     * 
     */
    setBPM(BPM: number, rampTime?: number): void
    
    /**
     * <p>Returns the Beats Per Minute of this currently part.</p>
     * 
     */
    getBPM(): number
    
    /**
     * <p>Start playback of this part.
     */
    start(time?: number): void
    
    /**
     * <p>Loop playback of this part.
     */
    loop(time?: number): void
    
    /**
     * <p>Tell the part to stop looping.</p>
     * 
     */
    noLoop(): void
    
    /**
     * <p>Stop the part and cue it to step 0.</p>
     * 
     */
    stop(time?: number): void
    
    /**
     * <p>Pause the part.
     */
    pause(time: number): void
    
    /**
     * <p>Add a p5.Phrase to this Part.</p>
     * 
     */
    addPhrase(phrase: p5.Phrase): void
    
    /**
     * <p>Remove a phrase from this part, based on the name it was
     * given when it was created.</p>
     * 
     */
    removePhrase(phraseName: string): void
    
    /**
     * <p>Get a phrase from this part, based on the name it was
     * given when it was created.
     */
    getPhrase(phraseName: string): void
    
    /**
     * <p>Get a phrase from this part, based on the name it was
     * given when it was created.
     */
    replaceSequence(phraseName: string, sequence: any[]): void
    
    /**
     * <p>Fire a callback function at every step.</p>
     * 
     */
    onStep(callback: () => any): void
  }
  class Score {
    // TODO: Fix p5.Score() errors in lib/addons/p5.sound.js:
    //
    //   param "part(s)" is not a valid JS symbol name
    //
    // constructor(part(s): p5.Part)
    
    /**
     * <p>Start playback of the score.</p>
     * 
     */
    start(): void
    
    /**
     * <p>Stop playback of the score.</p>
     * 
     */
    stop(): void
    
    /**
     * <p>Pause playback of the score.</p>
     * 
     */
    pause(): void
    
    /**
     * <p>Loop playback of the score.</p>
     * 
     */
    loop(): void
    
    /**
     * <p>Stop looping playback of the score.
     */
    noLoop(): void
  }
  class SoundRecorder {
    /**
     * <p>Record sounds for playback and/or to save as a .wav file.
     */
    constructor()
    
    /**
     * <p>Connect a specific device to the p5.SoundRecorder.
     */
    setInput(unit?: any): void
    
    /**
     * <p>Start recording.
     */
    record(soundFile: p5.SoundFile, duration?: number, callback?: () => any): void
    
    /**
     * <p>Stop the recording.
     */
    stop(): void
    
    /**
     * <p>Save a p5.SoundFile as a .wav audio file.</p>
     * 
     */
    saveSound(soundFile: p5.SoundFile, name: string): void
  }
  class PeakDetect {
    /**
     * <p>PeakDetect works in conjunction with p5.FFT to
     * look for onsets in some or all of the frequency spectrum.
     */
    constructor(freq1?: number, freq2?: number, threshold?: number, framesPerPeak?: number)
    // TODO: Annotate attribute "isDetected"
    
    /**
     * <p>The update method is run in the draw loop.</p>
     * <p>Accepts an FFT object.
     */
    update(fftObject: p5.FFT): void
    
    /**
     * <p>onPeak accepts two arguments: a function to call when
     * a peak is detected.
     */
    onPeak(callback: () => any, val?: any): void
  }
  class Gain {
    /**
     * <p>A gain node is usefull to set the relative volume of sound.
     */
    constructor()
    
    /**
     * <p>Connect a source to the gain node.</p>
     * 
     */
    setInput(src: any): void
    
    /**
     * <p>Send output to a p5.sound or web audio object</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all output.</p>
     * 
     */
    disconnect(): void
    
    /**
     * <p>Set the output level of the gain node.</p>
     * 
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void
  }
  class Distortion {
    /**
     * <p>A Distortion effect created with a Waveshaper Node,
     * with an approach adapted from
     * <a href="http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion">Kevin Ennis</a></p>
     * 
     */
    constructor(amount?: number, oversample?: string)
    
    /**
     * <p>The p5.Distortion is built with a
     * <a href="http://www.w3.org/TR/webaudio/#WaveShaperNode">
     * Web Audio WaveShaper Node</a>.</p>
     * 
     */
    WaveShaperNode: any
    
    // TODO: Fix setType() errors in lib/addons/p5.sound.js:
    //
    //   required param "UNKNOWN" follows an optional param
    //
    // setType(amount?: number, oversample?: string, UNKNOWN: string): void
    
    /**
     * <p>Return the distortion amount, typically between 0-1.</p>
     * 
     */
    getAmount(): number
    
    /**
     * <p>Send output to a p5.sound or web audio object</p>
     * 
     */
    connect(unit: any): void
    
    /**
     * <p>Disconnect all output.</p>
     * 
     */
    disconnect(): void
  }
}

