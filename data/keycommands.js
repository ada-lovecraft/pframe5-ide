const keymap = [
  {
    "keystrokes": "home",
    "command": "editor:move-to-first-character-of-line"
  },
  {
    "keystrokes": "end",
    "command": "editor:move-to-end-of-screen-line"
  },
  {
    "keystrokes": "Shift-home",
    "command": "editor:select-to-first-character-of-line"
  },
  {
    "keystrokes": "Shift-end",
    "command": "editor:select-to-end-of-line"
  },
  {
    "keystrokes": "ctrl-Shift-C",
    "command": "editor:copy-path"
  },
  {
    "keystrokes": "tab",
    "command": "editor:indent"
  },
  {
    "keystrokes": "enter",
    "command": "editor:newline"
  },
  {
    "keystrokes": "Shift-tab",
    "command": "editor:outdent-selected-rows"
  },
  {
    "keystrokes": "ctrl-Shift-K",
    "command": "editor:delete-line"
  },
  {
    "keystrokes": "enter",
    "command": "core:confirm"
  },
  {
    "keystrokes": "escape",
    "command": "tool-panel:unfocus"
  },
  {
    "keystrokes": "escape",
    "command": "editor:consolidate-selections"
  },
  {
    "keystrokes": "tab",
    "command": "core:focus-next"
  },
  {
    "keystrokes": "Shift-tab",
    "command": "core:focus-previous"
  },
  {
    "keystrokes": "CommandOrControl-q",
    "command": "application:quit"
  },
  {
    "keystrokes": "CommandOrControl-h",
    "command": "application:hide"
  },
  {
    "keystrokes": "alt-CommandOrControl-h",
    "command": "application:hide-other-applications"
  },
  {
    "keystrokes": "CommandOrControl-m",
    "command": "application:minimize"
  },
  {
    "keystrokes": "ctrl-alt-CommandOrControl-m",
  "command": "application:zoom"
  },
  {
    "keystrokes": "ctrl-p",
    "command": "core:move-up"
  },
  {
    "keystrokes": "ctrl-n",
    "command": "core:move-down"
  },
  {
    "keystrokes": "ctrl-b",
    "command": "core:move-left"
  },
  {
    "keystrokes": "ctrl-f",
    "command": "core:move-right"
  },
  {
    "keystrokes": "ctrl-Shift-P",
    "command": "core:select-up"
  },
  {
    "keystrokes": "ctrl-Shift-N",
    "command": "core:select-down"
  },
  {
    "keystrokes": "ctrl-Shift-F",
    "command": "core:select-right"
  },
  {
    "keystrokes": "ctrl-Shift-B",
    "command": "core:select-left"
  },
  {
    "keystrokes": "ctrl-h",
    "command": "core:backspace"
  },
  {
    "keystrokes": "ctrl-d",
    "command": "core:delete"
  },
  {
    "keystrokes": "enter",
    "command": "core:confirm"
  },
  {
    "keystrokes": "escape",
    "command": "core:cancel"
  },
  {
    "keystrokes": "up",
    "command": "core:move-up"
  },
  {
    "keystrokes": "down",
    "command": "core:move-down"
  },
  {
    "keystrokes": "ctrl-up",
    "command": "core:move-up"
  },
  {
    "keystrokes": "ctrl-down",
    "command": "core:move-down"
  },
  {
    "keystrokes": "left",
    "command": "core:move-left"
  },
  {
    "keystrokes": "right",
    "command": "core:move-right"
  },
  {
    "keystrokes": "ctrl-alt-CommandOrControl-l",
    "command": "window:reload"
  },
  {
    "keystrokes": "alt-CommandOrControl-i",
    "command": "window:toggle-dev-tools"
  },
  {
    "keystrokes": "ctrl-alt-CommandOrControl-p",
    "command": "window:run-package-specs"
  },
  {
    "keystrokes": "ctrl-Shift-left",
    "command": "pane:move-item-left"
  },
  {
    "keystrokes": "ctrl-Shift-right",
    "command": "pane:move-item-right"
  },
  {
    "keystrokes": "CommandOrControl-,",
    "command": "application:show-settings"
  },
  {
    "keystrokes": "Shift-CommandOrControl-N",
    "command": "application:new-window"
  },
  {
    "keystrokes": "Shift-CommandOrControl-W",
    "command": "window:close"
  },
  {
    "keystrokes": "CommandOrControl-o",
    "command": "application:open"
  },
  {
    "keystrokes": "Shift-CommandOrControl-O",
    "command": "application:add-project-folder"
  },
  {
    "keystrokes": "Shift-CommandOrControl-T",
    "command": "pane:reopen-closed-item"
  },
  {
    "keystrokes": "CommandOrControl-n",
    "command": "application:new-file"
  },
  {
    "keystrokes": "CommandOrControl-s",
    "command": "core:save"
  },
  {
    "keystrokes": "Shift-CommandOrControl-S",
    "command": "core:save-as"
  },
  {
    "keystrokes": "alt-CommandOrControl-s",
    "command": "window:save-all"
  },
  {
    "keystrokes": "CommandOrControl-w",
    "command": "core:close"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-f",
    "command": "window:toggle-full-screen"
  },
  {
    "keystrokes": "CommandOrControl-z",
    "command": "core:undo"
  },
  {
    "keystrokes": "Shift-CommandOrControl-Z",
    "command": "core:redo"
  },
  {
    "keystrokes": "CommandOrControl-y",
    "command": "core:redo"
  },
  {
    "keystrokes": "CommandOrControl-x",
    "command": "core:cut"
  },
  {
    "keystrokes": "CommandOrControl-c",
    "command": "core:copy"
  },
  {
    "keystrokes": "CommandOrControl-v",
    "command": "core:paste"
  },
  {
    "keystrokes": "Shift-up",
    "command": "core:select-up"
  },
  {
    "keystrokes": "Shift-down",
    "command": "core:select-down"
  },
  {
    "keystrokes": "Shift-left",
    "command": "core:select-left"
  },
  {
    "keystrokes": "Shift-right",
    "command": "core:select-right"
  },
  {
    "keystrokes": "Shift-pageup",
    "command": "core:select-page-up"
  },
  {
    "keystrokes": "Shift-pagedown",
    "command": "core:select-page-down"
  },
  {
    "keystrokes": "delete",
    "command": "core:delete"
  },
  {
    "keystrokes": "Shift-delete",
    "command": "core:delete"
  },
  {
    "keystrokes": "pageup",
    "command": "core:page-up"
  },
  {
    "keystrokes": "pagedown",
    "command": "core:page-down"
  },
  {
    "keystrokes": "backspace",
    "command": "core:backspace"
  },
  {
    "keystrokes": "Shift-backspace",
    "command": "core:backspace"
  },
  {
    "keystrokes": "CommandOrControl-up",
    "command": "core:move-to-top"
  },
  {
    "keystrokes": "CommandOrControl-down",
    "command": "core:move-to-bottom"
  },
  {
    "keystrokes": "Shift-CommandOrControl-up",
    "command": "core:select-to-top"
  },
  {
    "keystrokes": "Shift-CommandOrControl-down",
    "command": "core:select-to-bottom"
  },
  {
    "keystrokes": "CommandOrControl-{",
    "command": "pane:show-previous-item"
  },
  {
    "keystrokes": "CommandOrControl-}",
    "command": "pane:show-next-item"
  },
  {
    "keystrokes": "alt-CommandOrControl-left",
    "command": "pane:show-previous-item"
  },
  {
    "keystrokes": "alt-CommandOrControl-right",
    "command": "pane:show-next-item"
  },
  {
    "keystrokes": "ctrl-pageup",
    "command": "pane:show-previous-item"
  },
  {
    "keystrokes": "ctrl-pagedown",
    "command": "pane:show-next-item"
  },
  {
    "keystrokes": "ctrl-tab",
    "command": "pane:show-next-recently-used-item"
  },
  {
    "keystrokes": "ctrl-tab ^ctrl",
    "command": "pane:move-active-item-to-top-of-stack"
  },
  {
    "keystrokes": "ctrl-Shift-tab",
    "command": "pane:show-previous-recently-used-item"
  },
  {
    "keystrokes": "ctrl-Shift-tab ^ctrl",
    "command": "pane:move-active-item-to-top-of-stack"
  },
  {
    "keystrokes": "CommandOrControl-=",
    "command": "window:increase-font-size"
  },
  {
    "keystrokes": "CommandOrControl-+",
    "command": "window:increase-font-size"
  },
  {
    "keystrokes": "CommandOrControl--",
    "command": "window:decrease-font-size"
  },
  {
    "keystrokes": "CommandOrControl-_",
    "command": "window:decrease-font-size"
  },
  {
    "keystrokes": "CommandOrControl-0",
    "command": "window:reset-font-size"
  },
  {
    "keystrokes": "CommandOrControl-k up",
    "command": "pane:split-up-and-copy-active-item"
  },
  {
    "keystrokes": "CommandOrControl-k down",
    "command": "pane:split-down-and-copy-active-item"
  },
  {
    "keystrokes": "CommandOrControl-k left",
    "command": "pane:split-left-and-copy-active-item"
  },
  {
    "keystrokes": "CommandOrControl-k right",
    "command": "pane:split-right-and-copy-active-item"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-w",
    "command": "pane:close"
  },
  {
    "keystrokes": "CommandOrControl-k alt-CommandOrControl-w",
    "command": "pane:close-other-items"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-p",
    "command": "window:focus-previous-pane"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-n",
    "command": "window:focus-next-pane"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-up",
    "command": "window:focus-pane-above"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-down",
    "command": "window:focus-pane-below"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-left",
    "command": "window:focus-pane-on-left"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-right",
    "command": "window:focus-pane-on-right"
  },
  {
    "keystrokes": "CommandOrControl-1",
    "command": "pane:show-item-1"
  },
  {
    "keystrokes": "CommandOrControl-2",
    "command": "pane:show-item-2"
  },
  {
    "keystrokes": "CommandOrControl-3",
    "command": "pane:show-item-3"
  },
  {
    "keystrokes": "CommandOrControl-4",
    "command": "pane:show-item-4"
  },
  {
    "keystrokes": "CommandOrControl-5",
    "command": "pane:show-item-5"
  },
  {
    "keystrokes": "CommandOrControl-6",
    "command": "pane:show-item-6"
  },
  {
    "keystrokes": "CommandOrControl-7",
    "command": "pane:show-item-7"
  },
  {
    "keystrokes": "CommandOrControl-8",
    "command": "pane:show-item-8"
  },
  {
    "keystrokes": "CommandOrControl-9",
    "command": "pane:show-item-9"
  },
  {
    "keystrokes": "alt-left",
    "command": "editor:move-to-beginning-of-word"
  },
  {
    "keystrokes": "alt-right",
    "command": "editor:move-to-end-of-word"
  },
  {
    "keystrokes": "alt-Shift-left",
    "command": "editor:select-to-beginning-of-word"
  },
  {
    "keystrokes": "alt-Shift-right",
    "command": "editor:select-to-end-of-word"
  },
  {
    "keystrokes": "CommandOrControl-backspace",
    "command": "editor:delete-to-beginning-of-line"
  },
  {
    "keystrokes": "Shift-CommandOrControl-backspace",
    "command": "editor:delete-to-beginning-of-line"
  },
  {
    "keystrokes": "CommandOrControl-delete",
    "command": "editor:delete-to-end-of-line"
  },
  {
    "keystrokes": "ctrl-Shift-A",
    "command": "editor:select-to-first-character-of-line"
  },
  {
    "keystrokes": "ctrl-Shift-E",
    "command": "editor:select-to-end-of-line"
  },
  {
    "keystrokes": "CommandOrControl-left",
    "command": "editor:move-to-first-character-of-line"
  },
  {
    "keystrokes": "CommandOrControl-right",
    "command": "editor:move-to-end-of-screen-line"
  },
  {
    "keystrokes": "Shift-CommandOrControl-left",
    "command": "editor:select-to-first-character-of-line"
  },
  {
    "keystrokes": "Shift-CommandOrControl-right",
    "command": "editor:select-to-end-of-line"
  },
  {
    "keystrokes": "alt-backspace",
    "command": "editor:delete-to-beginning-of-word"
  },
  {
    "keystrokes": "alt-delete",
    "command": "editor:delete-to-end-of-word"
  },
  {
    "keystrokes": "ctrl-a",
    "command": "editor:move-to-first-character-of-line"
  },
  {
    "keystrokes": "ctrl-e",
    "command": "editor:move-to-end-of-line"
  },
  {
    "keystrokes": "ctrl-k",
    "command": "editor:cut-to-end-of-line"
  },
  {
    "keystrokes": "ctrl-Shift-W",
    "command": "editor:select-word"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-left",
    "command": "editor:move-selection-left"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-right",
    "command": "editor:move-selection-right"
  },
  {
    "keystrokes": "alt-f",
    "command": "editor:move-to-end-of-word"
  },
  {
    "keystrokes": "ctrl-alt-f",
    "command": "editor:move-to-next-subword-boundary"
  },
  {
    "keystrokes": "alt-Shift-F",
    "command": "editor:select-to-end-of-word"
  },
  {
    "keystrokes": "ctrl-alt-Shift-F",
    "command": "editor:select-to-next-subword-boundary"
  },
  {
    "keystrokes": "alt-b",
    "command": "editor:move-to-beginning-of-word"
  },
  {
    "keystrokes": "ctrl-alt-b",
    "command": "editor:move-to-previous-subword-boundary"
  },
  {
    "keystrokes": "alt-Shift-B",
    "command": "editor:select-to-beginning-of-word"
  },
  {
    "keystrokes": "ctrl-alt-Shift-B",
    "command": "editor:select-to-previous-subword-boundary"
  },
  {
    "keystrokes": "alt-h",
    "command": "editor:delete-to-beginning-of-word"
  },
  {
    "keystrokes": "ctrl-alt-h",
    "command": "editor:delete-to-beginning-of-subword"
  },
  {
    "keystrokes": "alt-d",
    "command": "editor:delete-to-end-of-word"
  },
  {
    "keystrokes": "ctrl-alt-d",
    "command": "editor:delete-to-end-of-subword"
  },
  {
    "keystrokes": "CommandOrControl-a",
    "command": "core:select-all"
  },
  {
    "keystrokes": "alt-CommandOrControl-p",
    "command": "editor:log-cursor-scope"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-u",
    "command": "editor:upper-case"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-l",
    "command": "editor:lower-case"
  },
  {
    "keystrokes": "CommandOrControl-l",
    "command": "editor:select-line"
  },
  {
    "keystrokes": "ctrl-t",
    "command": "editor:transpose"
  },
  {
    "keystrokes": "ctrl-alt-left",
    "command": "editor:move-to-previous-subword-boundary"
  },
  {
    "keystrokes": "ctrl-alt-right",
    "command": "editor:move-to-next-subword-boundary"
  },
  {
    "keystrokes": "ctrl-alt-Shift-left",
    "command": "editor:select-to-previous-subword-boundary"
  },
  {
    "keystrokes": "ctrl-alt-Shift-right",
    "command": "editor:select-to-next-subword-boundary"
  },
  {
    "keystrokes": "ctrl-alt-backspace",
    "command": "editor:delete-to-beginning-of-subword"
  },
  {
    "keystrokes": "ctrl-alt-delete",
    "command": "editor:delete-to-end-of-subword"
  },
  {
    "keystrokes": "alt-CommandOrControl-z",
    "command": "editor:checkout-head-revision"
  },
  {
    "keystrokes": "CommandOrControl-<",
    "command": "editor:scroll-to-cursor"
  },
  {
    "keystrokes": "ctrl-alt-CommandOrControl-f",
    "command": "editor:fold-selection"
  },
  {
    "keystrokes": "CommandOrControl-enter",
    "command": "editor:newline-below"
  },
  {
    "keystrokes": "Shift-CommandOrControl-enter",
    "command": "editor:newline-above"
  },
  {
    "keystrokes": "alt-enter",
    "command": "editor:newline"
  },
  {
    "keystrokes": "Shift-enter",
    "command": "editor:newline"
  },
  {
    "keystrokes": "CommandOrControl-]",
    "command": "editor:indent-selected-rows"
  },
  {
    "keystrokes": "CommandOrControl-[",
    "command": "editor:outdent-selected-rows"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-up",
    "command": "editor:move-line-up"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-down",
    "command": "editor:move-line-down"
  },
  {
    "keystrokes": "CommandOrControl-/",
    "command": "editor:toggle-line-comments"
  },
  {
    "keystrokes": "CommandOrControl-j",
    "command": "editor:join-lines"
  },
  {
    "keystrokes": "Shift-CommandOrControl-D",
    "command": "editor:duplicate-lines"
  },
  {
    "keystrokes": "Shift-CommandOrControl-L",
    "command": "editor:split-selections-into-lines"
  },
  {
    "keystrokes": "ctrl-Shift-up",
    "command": "editor:add-selection-above"
  },
  {
    "keystrokes": "ctrl-Shift-down",
    "command": "editor:add-selection-below"
  },
  {
    "keystrokes": "alt-CommandOrControl-[",
    "command": "editor:fold-current-row"
  },
  {
    "keystrokes": "alt-CommandOrControl-]",
    "command": "editor:unfold-current-row"
  },
  {
    "keystrokes": "alt-CommandOrControl-{",
    "command": "editor:fold-all"
  },
  {
    "keystrokes": "alt-CommandOrControl-}",
    "command": "editor:unfold-all"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-0",
    "command": "editor:unfold-all"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-1",
    "command": "editor:fold-at-indent-level-1"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-2",
    "command": "editor:fold-at-indent-level-2"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-3",
    "command": "editor:fold-at-indent-level-3"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-4",
    "command": "editor:fold-at-indent-level-4"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-5",
    "command": "editor:fold-at-indent-level-5"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-6",
    "command": "editor:fold-at-indent-level-6"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-7",
    "command": "editor:fold-at-indent-level-7"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-8",
    "command": "editor:fold-at-indent-level-8"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-9",
    "command": "editor:fold-at-indent-level-9"
  },
  {
    "keystrokes": "alt-CommandOrControl-=",
    "command": "pane:increase-size"
  },
  {
    "keystrokes": "alt-CommandOrControl--",
    "command": "pane:decrease-size"
  },
  {
    "keystrokes": "alt-CommandOrControl-o",
    "command": "advanced-open-file:toggle"
  },
  {
    "keystrokes": "ctrl-alt-o",
    "command": "advanced-open-file:toggle"
  },
  {
    "keystrokes": "tab",
    "command": "advanced-open-file:autocomplete"
  },
  {
    "keystrokes": "up",
    "command": "advanced-open-file:move-cursor-up"
  },
  {
    "keystrokes": "down",
    "command": "advanced-open-file:move-cursor-down"
  },
  {
    "keystrokes": "pageup",
    "command": "advanced-open-file:move-cursor-top"
  },
  {
    "keystrokes": "pagedown",
    "command": "advanced-open-file:move-cursor-bottom"
  },
  {
    "keystrokes": "ctrl-p",
    "command": "advanced-open-file:move-cursor-up"
  },
  {
    "keystrokes": "ctrl-n",
    "command": "advanced-open-file:move-cursor-down"
  },
  {
    "keystrokes": "ctrl-i",
    "command": "advanced-open-file:move-cursor-up"
  },
  {
    "keystrokes": "ctrl-k",
    "command": "advanced-open-file:move-cursor-down"
  },
  {
    "keystrokes": "ctrl-l",
    "command": "advanced-open-file:delete-path-component"
  },
  {
    "keystrokes": "CommandOrControl-z",
    "command": "advanced-open-file:undo"
  },
  {
    "keystrokes": "ctrl-z",
    "command": "advanced-open-file:undo"
  },
  {
    "keystrokes": "ctrl-alt-o",
    "command": "atom-exploration:toggle"
  },
  {
    "keystrokes": "ctrl-alt-o",
    "command": "import-sort:sort"
  },
  {
    "keystrokes": "ctrl-Shift-M",
    "command": "atom-react-preview:toggle"
  },
  {
    "keystrokes": "ctrl-alt-Shift-D",
    "command": "atom-ternjs:definition"
  },
  {
    "keystrokes": "ctrl-alt-c",
    "command": "atom-ternjs:rename"
  },
  {
    "keystrokes": "ctrl-Shift-R",
    "command": "atom-ternjs:references"
  },
  {
    "keystrokes": "ctrl-alt-space",
    "command": "atom-ternjs:startCompletion"
  },
  {
    "keystrokes": "alt-o",
    "command": "atom-ternjs:documentation"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-left",
    "command": "atom-ternjs:navigateBack"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-right",
    "command": "atom-ternjs:navigateForward"
  },
  {
    "keystrokes": "ctrl-alt-Shift-D",
    "command": "atom-ternjs:definition"
  },
  {
    "keystrokes": "ctrl-alt-Shift-C",
    "command": "atom-ternjs:rename"
  },
  {
    "keystrokes": "ctrl-alt-Shift-E",
    "command": "atom-ternjs:references"
  },
  {
    "keystrokes": "ctrl-alt-space",
    "command": "atom-ternjs:startCompletion"
  },
  {
    "keystrokes": "alt-o",
    "command": "atom-ternjs:documentation"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-left",
    "command": "atom-ternjs:navigateBack"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-right",
    "command": "atom-ternjs:navigateForward"
  },
  {
    "keystrokes": "ctrl-alt-Shift-D",
    "command": "atom-ternjs:definition"
  },
  {
    "keystrokes": "ctrl-alt-c",
    "command": "atom-ternjs:rename"
  },
  {
    "keystrokes": "ctrl-Shift-E",
    "command": "atom-ternjs:references"
  },
  {
    "keystrokes": "ctrl-alt-space",
    "command": "atom-ternjs:startCompletion"
  },
  {
    "keystrokes": "alt-o",
    "command": "atom-ternjs:documentation"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-left",
    "command": "atom-ternjs:navigateBack"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-right",
    "command": "atom-ternjs:navigateForward"
  },
  {
    "keystrokes": "alt-CommandOrControl-l",
    "command": "typescript:format-code"
  },
  {
    "keystrokes": "ctrl-alt-l",
    "command": "typescript:format-code"
  },
  {
    "keystrokes": "ctrl-;",
    "command": "typescript:context-actions"
  },
  {
    "keystrokes": "CommandOrControl-;",
    "command": "typescript:context-actions"
  },
  {
    "keystrokes": "f2",
    "command": "typescript:rename-refactor"
  },
  {
    "keystrokes": "Shift-f12",
    "command": "typescript:find-references"
  },
  {
    "keystrokes": "alt-enter",
    "command": "typescript:quick-fix"
  },
  {
    "keystrokes": "ctrl-Shift-M",
    "command": "typescript:output-toggle"
  },
  {
    "keystrokes": "Shift-CommandOrControl-M",
    "command": "typescript:output-toggle"
  },
  {
    "keystrokes": "f9",
    "command": "typescript:toggle-breakpoint"
  },
  {
    "keystrokes": "f6",
    "command": "typescript:build"
  },
  {
    "keystrokes": "f12",
    "command": "typescript:go-to-declaration"
  },
  {
    "keystrokes": "ctrl-'",
    "command": "typescript:sync"
  },
  {
    "keystrokes": "CommandOrControl-'",
    "command": "typescript:sync"
  },
  {
    "keystrokes": "f8",
    "command": "typescript:go-to-next"
  },
  {
    "keystrokes": "Shift-f8",
    "command": "typescript:go-to-previous"
  },
  {
    "keystrokes": "ctrl-space",
    "command": "typescript:autocomplete"
  },
  {
    "keystrokes": "CommandOrControl-space",
    "command": "typescript:autocomplete"
  },
  {
    "keystrokes": "alt-CommandOrControl-g",
    "command": "atomatigit:toggle"
  },
  {
    "keystrokes": "ctrl-alt-g",
    "command": "atomatigit:toggle"
  },
  {
    "keystrokes": "j",
    "command": "core:move-down"
  },
  {
    "keystrokes": "k",
    "command": "core:move-up"
  },
  {
    "keystrokes": "escape",
    "command": "core:cancel"
  },
  {
    "keystrokes": "enter",
    "command": "atomatigit:open"
  },
  {
    "keystrokes": "backspace",
    "command": "atomatigit:kill"
  },
  {
    "keystrokes": "b",
    "command": "atomatigit:branches"
  },
  {
    "keystrokes": "f",
    "command": "atomatigit:files"
  },
  {
    "keystrokes": "l",
    "command": "atomatigit:commit-log"
  },
  {
    "keystrokes": ":",
    "command": "atomatigit:git-command"
  },
  {
    "keystrokes": "r",
    "command": "atomatigit:refresh"
  },
  {
    "keystrokes": "Shift-P",
    "command": "atomatigit:push"
  },
  {
    "keystrokes": "p",
    "command": "atomatigit:fetch"
  },
  {
    "keystrokes": "Shift-S",
    "command": "atomatigit:stage"
  },
  {
    "keystrokes": "z",
    "command": "atomatigit:stash"
  },
  {
    "keystrokes": "Shift-Z",
    "command": "atomatigit:stash-pop"
  },
  {
    "keystrokes": "u",
    "command": "atomatigit:unstage"
  },
  {
    "keystrokes": "tab",
    "command": "atomatigit:toggle-diff"
  },
  {
    "keystrokes": "c",
    "command": "atomatigit:commit"
  },
  {
    "keystrokes": "c",
    "command": "atomatigit:create-branch"
  },
  {
    "keystrokes": "Shift-enter",
    "command": "atomatigit:hard-reset-to-commit"
  },
  {
    "keystrokes": "o",
    "command": "atomatigit:showCommit"
  },
  {
    "keystrokes": "ctrl-alt-Shift-A",
    "command": "ava:run-file"
  },
  {
    "keystrokes": "ctrl-alt-a",
    "command": "ava:run"
  },
  {
    "keystrokes": "Shift-space",
    "command": "emmet:expand-abbreviation-with-tab"
  },
  {
    "keystrokes": "Shift-CommandOrControl-H",
    "command": "git-plus:menu"
  },
  {
    "keystrokes": "Shift-CommandOrControl-C",
    "command": "git-plus:commit"
  },
  {
    "keystrokes": "Shift-CommandOrControl-A s",
    "command": "git-plus:status"
  },
  {
    "keystrokes": "Shift-CommandOrControl-A q",
    "command": "git-plus:add-and-commit-and-push"
  },
  {
    "keystrokes": "Shift-CommandOrControl-A a",
    "command": "git-plus:add-all-and-commit"
  },
  {
    "keystrokes": "Shift-CommandOrControl-A p",
    "command": "git-plus:add-all-commit-and-push"
  },
  {
    "keystrokes": "ctrl-Shift-H",
    "command": "git-plus:menu"
  },
  {
    "keystrokes": "ctrl-Shift-X",
    "command": "git-plus:commit"
  },
  {
    "keystrokes": "ctrl-Shift-A s",
    "command": "git-plus:status"
  },
  {
    "keystrokes": "ctrl-Shift-A q",
    "command": "git-plus:add-and-commit-and-push"
  },
  {
    "keystrokes": "ctrl-Shift-A a",
    "command": "git-plus:add-all-and-commit"
  },
  {
    "keystrokes": "ctrl-Shift-A p",
    "command": "git-plus:add-all-commit-and-push"
  },
  {
    "keystrokes": "Shift-CommandOrControl-A",
    "command": "git-plus:add"
  },
  {
    "keystrokes": "Shift-CommandOrControl-A c",
    "command": "git-plus:add-and-commit"
  },
  {
    "keystrokes": "ctrl-Shift-A",
    "command": "git-plus:add"
  },
  {
    "keystrokes": "ctrl-Shift-A c",
    "command": "git-plus:add-and-commit"
  },
  {
    "keystrokes": "Shift-CommandOrControl-K",
    "command": "hey-pane:toggle-focus-of-active-pane"
  },
  {
    "keystrokes": "alt->",
    "command": "linter:next-error"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-p",
    "command": "project-manager:list-projects"
  },
  {
    "keystrokes": "alt-Shift-P",
    "command": "project-manager:list-projects"
  },
  {
    "keystrokes": "alt-Shift-P",
    "command": "project-manager:list-projects"
  },
  {
    "keystrokes": "enter",
    "command": "core:confirm"
  },
  {
    "keystrokes": "Shift-enter",
    "command": "project-manager:alt-confirm"
  },
  {
    "keystrokes": "f5",
    "command": "sort-lines:sort"
  },
  {
    "keystrokes": "k",
    "command": "core:move-up"
  },
  {
    "keystrokes": "j",
    "command": "core:move-down"
  },
  {
    "keystrokes": "ctrl-space",
    "command": "autocomplete-plus:activate"
  },
  {
    "keystrokes": "escape",
    "command": "autocomplete-plus:cancel"
  },
  {
    "keystrokes": "alt-CommandOrControl-q",
    "command": "autoflow:reflow-selection"
  },
  {
    "keystrokes": "ctrl-Shift-Q",
    "command": "autoflow:reflow-selection"
  },
  {
    "keystrokes": "ctrl-f2",
    "command": "bookmarks:view-all"
  },
  {
    "keystrokes": "f2",
    "command": "bookmarks:jump-to-next-bookmark"
  },
  {
    "keystrokes": "Shift-f2",
    "command": "bookmarks:jump-to-previous-bookmark"
  },
  {
    "keystrokes": "CommandOrControl-f2",
    "command": "bookmarks:toggle-bookmark"
  },
  {
    "keystrokes": "Shift-CommandOrControl-f2",
    "command": "bookmarks:clear-bookmarks"
  },
  {
    "keystrokes": "ctrl-alt-f2",
    "command": "bookmarks:toggle-bookmark"
  },
  {
    "keystrokes": "ctrl-Shift-f2",
    "command": "bookmarks:clear-bookmarks"
  },
  {
    "keystrokes": "ctrl-Shift-f2",
    "command": "bookmarks:toggle-bookmark"
  },
  {
    "keystrokes": "alt-Shift-f2",
    "command": "bookmarks:clear-bookmarks"
  },
  {
    "keystrokes": "ctrl-m",
    "command": "bracket-matcher:go-to-matching-bracket"
  },
  {
    "keystrokes": "ctrl-]",
    "command": "bracket-matcher:remove-brackets-from-selection"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-m",
    "command": "bracket-matcher:select-inside-brackets"
  },
  {
    "keystrokes": "alt-CommandOrControl-.",
    "command": "bracket-matcher:close-tag"
  },
  {
    "keystrokes": "ctrl-backspace",
    "command": "bracket-matcher:remove-matching-brackets"
  },
  {
    "keystrokes": "ctrl-alt-,",
    "command": "bracket-matcher:select-inside-brackets"
  },
  {
    "keystrokes": "ctrl-alt-.",
    "command": "bracket-matcher:close-tag"
  },
  {
    "keystrokes": "ctrl-alt-backspace",
    "command": "bracket-matcher:remove-matching-brackets"
  },
  {
    "keystrokes": "ctrl-alt-,",
    "command": "bracket-matcher:select-inside-brackets"
  },
  {
    "keystrokes": "ctrl-alt-.",
    "command": "bracket-matcher:close-tag"
  },
  {
    "keystrokes": "ctrl-alt-backspace",
    "command": "bracket-matcher:remove-matching-brackets"
  },
  {
    "keystrokes": "Shift-CommandOrControl-P",
    "command": "command-palette:toggle",
    "enabled": true
  },
  {
    "keystrokes": "ctrl-Shift-P",
    "command": "command-palette:toggle"
  },
  {
    "keystrokes": "ctrl-Shift-P",
    "command": "command-palette:toggle"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-R",
    "command": "dev-live-reload:reload-all"
  },
  {
    "keystrokes": "ctrl-alt-Shift-R",
    "command": "dev-live-reload:reload-all"
  },
  {
    "keystrokes": "ctrl-Shift-U",
    "command": "encoding-selector:show"
  },
  {
    "keystrokes": "ctrl-Shift-U",
    "command": "encoding-selector:show"
  },
  {
    "keystrokes": "alt-u",
    "command": "encoding-selector:show"
  },
  {
    "keystrokes": "Shift-CommandOrControl-F",
    "command": "project-find:show"
  },
  {
    "keystrokes": "CommandOrControl-f",
    "command": "find-and-replace:show"
  },
  {
    "keystrokes": "alt-CommandOrControl-f",
    "command": "find-and-replace:show-replace"
  },
  {
    "keystrokes": "ctrl-Shift-F",
    "command": "project-find:show"
  },
  {
    "keystrokes": "ctrl-f",
    "command": "find-and-replace:show"
  },
  {
    "keystrokes": "CommandOrControl-g",
    "command": "find-and-replace:find-next"
  },
  {
    "keystrokes": "Shift-CommandOrControl-G",
    "command": "find-and-replace:find-previous"
  },
  {
    "keystrokes": "CommandOrControl-f3",
    "command": "find-and-replace:find-next-selected"
  },
  {
    "keystrokes": "Shift-CommandOrControl-f3",
    "command": "find-and-replace:find-previous-selected"
  },
  {
    "keystrokes": "ctrl-CommandOrControl-g",
    "command": "find-and-replace:select-all"
  },
  {
    "keystrokes": "CommandOrControl-d",
    "command": "find-and-replace:select-next"
  },
  {
    "keystrokes": "alt-CommandOrControl-e",
    "command": "find-and-replace:replace-next"
  },
  {
    "keystrokes": "CommandOrControl-e",
    "command": "find-and-replace:use-selection-as-find-pattern"
  },
  {
    "keystrokes": "CommandOrControl-u",
    "command": "find-and-replace:select-undo"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-d",
    "command": "find-and-replace:select-skip"
  },
  {
    "keystrokes": "f3",
    "command": "find-and-replace:find-next"
  },
  {
    "keystrokes": "Shift-f3",
    "command": "find-and-replace:find-previous"
  },
  {
    "keystrokes": "ctrl-f3",
    "command": "find-and-replace:find-next-selected"
  },
  {
    "keystrokes": "ctrl-Shift-f3",
    "command": "find-and-replace:find-previous-selected"
  },
  {
    "keystrokes": "alt-f3",
    "command": "find-and-replace:select-all"
  },
  {
    "keystrokes": "ctrl-d",
    "command": "find-and-replace:select-next"
  },
  {
    "keystrokes": "ctrl-e",
    "command": "find-and-replace:use-selection-as-find-pattern"
  },
  {
    "keystrokes": "ctrl-u",
    "command": "find-and-replace:select-undo"
  },
  {
    "keystrokes": "ctrl-k ctrl-d",
    "command": "find-and-replace:select-skip"
  },
  {
    "keystrokes": "Shift-enter",
    "command": "find-and-replace:show-previous"
  },
  {
    "keystrokes": "CommandOrControl-enter",
    "command": "find-and-replace:confirm"
  },
  {
    "keystrokes": "alt-enter",
    "command": "find-and-replace:find-all"
  },
  {
    "keystrokes": "alt-CommandOrControl-/",
    "command": "find-and-replace:toggle-regex-option"
  },
  {
    "keystrokes": "alt-CommandOrControl-c",
    "command": "find-and-replace:toggle-case-option"
  },
  {
    "keystrokes": "alt-CommandOrControl-s",
    "command": "find-and-replace:toggle-selection-option"
  },
  {
    "keystrokes": "alt-CommandOrControl-w",
    "command": "find-and-replace:toggle-whole-word-option"
  },
  {
    "keystrokes": "Shift-enter",
    "command": "find-and-replace:show-previous"
  },
  {
    "keystrokes": "ctrl-enter",
    "command": "find-and-replace:confirm"
  },
  {
    "keystrokes": "alt-enter",
    "command": "find-and-replace:find-all"
  },
  {
    "keystrokes": "ctrl-alt-/",
    "command": "find-and-replace:toggle-regex-option"
  },
  {
    "keystrokes": "ctrl-Shift-C",
    "command": "find-and-replace:toggle-case-option"
  },
  {
    "keystrokes": "CommandOrControl-enter",
    "command": "project-find:confirm"
  },
  {
    "keystrokes": "alt-CommandOrControl-/",
    "command": "project-find:toggle-regex-option"
  },
  {
    "keystrokes": "alt-CommandOrControl-c",
    "command": "project-find:toggle-case-option"
  },
  {
    "keystrokes": "alt-CommandOrControl-w",
    "command": "project-find:toggle-whole-word-option"
  },
  {
    "keystrokes": "ctrl-enter",
    "command": "project-find:confirm"
  },
  {
    "keystrokes": "ctrl-alt-/",
    "command": "project-find:toggle-regex-option"
  },
  {
    "keystrokes": "ctrl-Shift-C",
    "command": "find-and-replace:toggle-case-option"
  },
  {
    "keystrokes": "tab",
    "command": "find-and-replace:focus-next"
  },
  {
    "keystrokes": "Shift-tab",
    "command": "find-and-replace:focus-previous"
  },
  {
    "keystrokes": "CommandOrControl-enter",
    "command": "find-and-replace:replace-all"
  },
  {
    "keystrokes": "CommandOrControl-enter",
    "command": "project-find:replace-all"
  },
  {
    "keystrokes": "ctrl-enter",
    "command": "find-and-replace:replace-all"
  },
  {
    "keystrokes": "ctrl-enter",
    "command": "project-find:replace-all"
  },
  {
    "keystrokes": "ctrl-enter",
    "command": "find-and-replace:replace-all"
  },
  {
    "keystrokes": "ctrl-enter",
    "command": "project-find:replace-all"
  },
  {
    "keystrokes": "CommandOrControl-t",
    "command": "fuzzy-finder:toggle-file-finder"
  },
  {
    "keystrokes": "CommandOrControl-p",
    "command": "fuzzy-finder:toggle-file-finder"
  },
  {
    "keystrokes": "CommandOrControl-b",
    "command": "fuzzy-finder:toggle-buffer-finder"
  },
  {
    "keystrokes": "Shift-CommandOrControl-B",
    "command": "fuzzy-finder:toggle-git-status-finder"
  },
  {
    "keystrokes": "ctrl-t",
    "command": "fuzzy-finder:toggle-file-finder"
  },
  {
    "keystrokes": "ctrl-p",
    "command": "fuzzy-finder:toggle-file-finder"
  },
  {
    "keystrokes": "ctrl-b",
    "command": "fuzzy-finder:toggle-buffer-finder"
  },
  {
    "keystrokes": "ctrl-Shift-B",
    "command": "fuzzy-finder:toggle-git-status-finder"
  },
  {
    "keystrokes": "ctrl-t",
    "command": "fuzzy-finder:toggle-file-finder"
  },
  {
    "keystrokes": "ctrl-p",
    "command": "fuzzy-finder:toggle-file-finder"
  },
  {
    "keystrokes": "ctrl-b",
    "command": "fuzzy-finder:toggle-buffer-finder"
  },
  {
    "keystrokes": "ctrl-Shift-B",
    "command": "fuzzy-finder:toggle-git-status-finder"
  },
  {
    "keystrokes": "Shift-enter",
    "command": "fuzzy-finder:invert-confirm"
  },
  {
    "keystrokes": "alt-g down",
    "command": "git-diff:move-to-next-diff"
  },
  {
    "keystrokes": "alt-g up",
    "command": "git-diff:move-to-previous-diff"
  },
  {
    "keystrokes": "alt-g d",
    "command": "git-diff:toggle-diff-list"
  },
  {
    "keystrokes": "ctrl-g",
    "command": "go-to-line:toggle"
  },
  {
    "keystrokes": "enter",
    "command": "core:confirm"
  },
  {
    "keystrokes": "escape",
    "command": "core:cancel"
  },
  {
    "keystrokes": "CommandOrControl-w",
    "command": "core:cancel"
  },
  {
    "keystrokes": "ctrl-w",
    "command": "core:cancel"
  },
  {
    "keystrokes": "ctrl-w",
    "command": "core:cancel"
  },
  {
    "keystrokes": "ctrl-Shift-L",
    "command": "grammar-selector:show"
  },
  {
    "keystrokes": "ctrl-Shift-L",
    "command": "grammar-selector:show"
  },
  {
    "keystrokes": "ctrl-Shift-L",
    "command": "grammar-selector:show"
  },
  {
    "keystrokes": "CommandOrControl-+",
    "command": "image-view:zoom-in"
  },
  {
    "keystrokes": "CommandOrControl-=",
    "command": "image-view:zoom-in"
  },
  {
    "keystrokes": "CommandOrControl--",
    "command": "image-view:zoom-out"
  },
  {
    "keystrokes": "CommandOrControl-_",
    "command": "image-view:zoom-out"
  },
  {
    "keystrokes": "CommandOrControl-9",
    "command": "image-view:zoom-to-fit"
  },
  {
    "keystrokes": "CommandOrControl-0",
    "command": "image-view:reset-zoom"
  },
  {
    "keystrokes": "ctrl-+",
    "command": "image-view:zoom-in"
  },
  {
    "keystrokes": "ctrl-=",
    "command": "image-view:zoom-in"
  },
  {
    "keystrokes": "ctrl--",
    "command": "image-view:zoom-out"
  },
  {
    "keystrokes": "ctrl-_",
    "command": "image-view:zoom-out"
  },
  {
    "keystrokes": "ctrl-9",
    "command": "image-view:zoom-to-fit"
  },
  {
    "keystrokes": "ctrl-0",
    "command": "image-view:reset-zoom"
  },
  {
    "keystrokes": "ctrl-+",
    "command": "image-view:zoom-in"
  },
  {
    "keystrokes": "ctrl-=",
    "command": "image-view:zoom-in"
  },
  {
    "keystrokes": "ctrl--",
    "command": "image-view:zoom-out"
  },
  {
    "keystrokes": "ctrl-_",
    "command": "image-view:zoom-out"
  },
  {
    "keystrokes": "ctrl-9",
    "command": "image-view:zoom-to-fit"
  },
  {
    "keystrokes": "ctrl-0",
    "command": "image-view:reset-zoom"
  },
  {
    "keystrokes": "CommandOrControl-.",
    "command": "key-binding-resolver:toggle"
  },
  {
    "keystrokes": "ctrl-.",
    "command": "key-binding-resolver:toggle"
  },
  {
    "keystrokes": "ctrl-.",
    "command": "key-binding-resolver:toggle"
  },
  {
    "keystrokes": "ctrl-Shift-O",
    "command": "link:open"
  },
  {
    "keystrokes": "ctrl-Shift-M",
    "command": "markdown-preview:toggle"
  },
  {
    "keystrokes": "CommandOrControl-+",
    "command": "markdown-preview:zoom-in"
  },
  {
    "keystrokes": "CommandOrControl-=",
    "command": "markdown-preview:zoom-in"
  },
  {
    "keystrokes": "CommandOrControl--",
    "command": "markdown-preview:zoom-out"
  },
  {
    "keystrokes": "CommandOrControl-_",
    "command": "markdown-preview:zoom-out"
  },
  {
    "keystrokes": "CommandOrControl-0",
    "command": "markdown-preview:reset-zoom"
  },
  {
    "keystrokes": "ctrl-+",
    "command": "markdown-preview:zoom-in"
  },
  {
    "keystrokes": "ctrl-=",
    "command": "markdown-preview:zoom-in"
  },
  {
    "keystrokes": "ctrl--",
    "command": "markdown-preview:zoom-out"
  },
  {
    "keystrokes": "ctrl-_",
    "command": "markdown-preview:zoom-out"
  },
  {
    "keystrokes": "ctrl-0",
    "command": "markdown-preview:reset-zoom"
  },
  {
    "keystrokes": "alt-CommandOrControl-t",
    "command": "notifications:trigger-error"
  },
  {
    "keystrokes": "alt-g o",
    "command": "open-on-github:file"
  },
  {
    "keystrokes": "alt-g b",
    "command": "open-on-github:blame"
  },
  {
    "keystrokes": "alt-g h",
    "command": "open-on-github:history"
  },
  {
    "keystrokes": "alt-g i",
    "command": "open-on-github:issues"
  },
  {
    "keystrokes": "alt-g c",
    "command": "open-on-github:copy-url"
  },
  {
    "keystrokes": "alt-g r",
    "command": "open-on-github:branch-compare"
  },
  {
    "keystrokes": "alt-g g",
    "command": "open-on-github:repository"
  },
  {
    "keystrokes": "CommandOrControl-,",
    "command": "settings-view:open"
  },
  {
    "keystrokes": "ctrl-,",
    "command": "settings-view:open"
  },
  {
    "keystrokes": "tab",
    "command": "snippets:expand"
  },
  {
    "keystrokes": "tab",
    "command": "snippets:next-tab-stop"
  },
  {
    "keystrokes": "Shift-tab",
    "command": "snippets:previous-tab-stop"
  },
  {
    "keystrokes": "CommandOrControl-:",
    "command": "spell-check:correct-misspelling"
  },
  {
    "keystrokes": "CommandOrControl-:",
    "command": "core:cancel"
  },
  {
    "keystrokes": "ctrl-:",
    "command": "spell-check:correct-misspelling"
  },
  {
    "keystrokes": "ctrl-:",
    "command": "core:cancel"
  },
  {
    "keystrokes": "ctrl-:",
    "command": "spell-check:correct-misspelling"
  },
  {
    "keystrokes": "ctrl-:",
    "command": "core:cancel"
  },
  {
    "keystrokes": "enter",
    "command": "core:confirm"
  },
  {
    "keystrokes": "tab",
    "command": "core:confirm"
  },
  {
    "keystrokes": "ctrl-Shift-CommandOrControl-G",
    "command": "styleguide:show"
  },
  {
    "keystrokes": "ctrl-Shift-G",
    "command": "styleguide:show"
  },
  {
    "keystrokes": "CommandOrControl-r",
    "command": "symbols-view:toggle-file-symbols"
  },
  {
    "keystrokes": "alt-CommandOrControl-down",
    "command": "symbols-view:go-to-declaration"
  },
  {
    "keystrokes": "alt-CommandOrControl-up",
    "command": "symbols-view:return-from-declaration"
  },
  {
    "keystrokes": "ctrl-r",
    "command": "symbols-view:toggle-file-symbols"
  },
  {
    "keystrokes": "ctrl-r",
    "command": "symbols-view:toggle-file-symbols"
  },
  {
    "keystrokes": "ctrl-alt-down",
    "command": "symbols-view:go-to-declaration"
  },
  {
    "keystrokes": "ctrl-alt-up",
    "command": "symbols-view:return-from-declaration"
  },
  {
    "keystrokes": "Shift-CommandOrControl-R",
    "command": "symbols-view:toggle-project-symbols"
  },
  {
    "keystrokes": "ctrl-Shift-R",
    "command": "symbols-view:toggle-project-symbols"
  },
  {
    "keystrokes": "CommandOrControl-\\",
    "command": "tree-view:toggle"
  },
  {
    "keystrokes": "CommandOrControl-k CommandOrControl-b",
    "command": "tree-view:toggle"
  },
  {
    "keystrokes": "CommandOrControl-|",
    "command": "tree-view:reveal-active-file"
  },
  {
    "keystrokes": "ctrl-0",
    "command": "tree-view:toggle-focus"
  },
  {
    "keystrokes": "ctrl-\\",
    "command": "tree-view:toggle"
  },
  {
    "keystrokes": "ctrl-k ctrl-b",
    "command": "tree-view:toggle"
  },
  {
    "keystrokes": "ctrl-|",
    "command": "tree-view:reveal-active-file"
  },
  {
    "keystrokes": "alt-\\",
    "command": "tree-view:toggle-focus"
  },
  {
    "keystrokes": "CommandOrControl-c",
    "command": "tree-view:copy"
  },
  {
    "keystrokes": "CommandOrControl-x",
    "command": "tree-view:cut"
  },
  {
    "keystrokes": "CommandOrControl-v",
    "command": "tree-view:paste"
  },
  {
    "keystrokes": "ctrl-f",
    "command": "tree-view:expand-item"
  },
  {
    "keystrokes": "ctrl-b",
    "command": "tree-view:collapse-directory"
  },
  {
    "keystrokes": "CommandOrControl-k right",
    "command": "tree-view:open-selected-entry-right"
  },
  {
    "keystrokes": "CommandOrControl-k l",
    "command": "tree-view:open-selected-entry-right"
  },
  {
    "keystrokes": "CommandOrControl-k left",
    "command": "tree-view:open-selected-entry-left"
  },
  {
    "keystrokes": "CommandOrControl-k h",
    "command": "tree-view:open-selected-entry-left"
  },
  {
    "keystrokes": "CommandOrControl-k up",
    "command": "tree-view:open-selected-entry-up"
  },
  {
    "keystrokes": "CommandOrControl-k k",
    "command": "tree-view:open-selected-entry-up"
  },
  {
    "keystrokes": "CommandOrControl-k down",
    "command": "tree-view:open-selected-entry-down"
  },
  {
    "keystrokes": "CommandOrControl-k j",
    "command": "tree-view:open-selected-entry-down"
  },
  {
    "keystrokes": "CommandOrControl-1",
    "command": "tree-view:open-selected-entry-in-pane-1"
  },
  {
    "keystrokes": "CommandOrControl-2",
    "command": "tree-view:open-selected-entry-in-pane-2"
  },
  {
    "keystrokes": "CommandOrControl-3",
    "command": "tree-view:open-selected-entry-in-pane-3"
  },
  {
    "keystrokes": "CommandOrControl-4",
    "command": "tree-view:open-selected-entry-in-pane-4"
  },
  {
    "keystrokes": "CommandOrControl-5",
    "command": "tree-view:open-selected-entry-in-pane-5"
  },
  {
    "keystrokes": "CommandOrControl-6",
    "command": "tree-view:open-selected-entry-in-pane-6"
  },
  {
    "keystrokes": "CommandOrControl-7",
    "command": "tree-view:open-selected-entry-in-pane-7"
  },
  {
    "keystrokes": "CommandOrControl-8",
    "command": "tree-view:open-selected-entry-in-pane-8"
  },
  {
    "keystrokes": "CommandOrControl-9",
    "command": "tree-view:open-selected-entry-in-pane-9"
  },
  {
    "keystrokes": "ctrl-c",
    "command": "tree-view:copy"
  },
  {
    "keystrokes": "ctrl-x",
    "command": "tree-view:cut"
  },
  {
    "keystrokes": "ctrl-v",
    "command": "tree-view:paste"
  },
  {
    "keystrokes": "ctrl-k right",
    "command": "tree-view:open-selected-entry-right"
  },
  {
    "keystrokes": "ctrl-k l",
    "command": "tree-view:open-selected-entry-right"
  },
  {
    "keystrokes": "ctrl-k left",
    "command": "tree-view:open-selected-entry-left"
  },
  {
    "keystrokes": "ctrl-k h",
    "command": "tree-view:open-selected-entry-left"
  },
  {
    "keystrokes": "ctrl-k up",
    "command": "tree-view:open-selected-entry-up"
  },
  {
    "keystrokes": "ctrl-k k",
    "command": "tree-view:open-selected-entry-up"
  },
  {
    "keystrokes": "ctrl-k down",
    "command": "tree-view:open-selected-entry-down"
  },
  {
    "keystrokes": "ctrl-k j",
    "command": "tree-view:open-selected-entry-down"
  },
  {
    "keystrokes": "ctrl-1",
    "command": "tree-view:open-selected-entry-in-pane-1"
  },
  {
    "keystrokes": "ctrl-2",
    "command": "tree-view:open-selected-entry-in-pane-2"
  },
  {
    "keystrokes": "ctrl-3",
    "command": "tree-view:open-selected-entry-in-pane-3"
  },
  {
    "keystrokes": "ctrl-4",
    "command": "tree-view:open-selected-entry-in-pane-4"
  },
  {
    "keystrokes": "ctrl-5",
    "command": "tree-view:open-selected-entry-in-pane-5"
  },
  {
    "keystrokes": "ctrl-6",
    "command": "tree-view:open-selected-entry-in-pane-6"
  },
  {
    "keystrokes": "ctrl-7",
    "command": "tree-view:open-selected-entry-in-pane-7"
  },
  {
    "keystrokes": "ctrl-8",
    "command": "tree-view:open-selected-entry-in-pane-8"
  },
  {
    "keystrokes": "ctrl-9",
    "command": "tree-view:open-selected-entry-in-pane-9"
  },
  {
    "keystrokes": "right",
    "command": "tree-view:expand-item"
  },
  {
    "keystrokes": "ctrl-]",
    "command": "tree-view:expand-item"
  },
  {
    "keystrokes": "l",
    "command": "tree-view:expand-item"
  },
  {
    "keystrokes": "left",
    "command": "tree-view:collapse-directory"
  },
  {
    "keystrokes": "ctrl-[",
    "command": "tree-view:collapse-directory"
  },
  {
    "keystrokes": "ctrl-alt-]",
    "command": "tree-view:recursive-expand-directory"
  },
  {
    "keystrokes": "alt-right",
    "command": "tree-view:recursive-expand-directory"
  },
  {
    "keystrokes": "ctrl-alt-[",
    "command": "tree-view:recursive-collapse-directory"
  },
  {
    "keystrokes": "alt-left",
    "command": "tree-view:recursive-collapse-directory"
  },
  {
    "keystrokes": "h",
    "command": "tree-view:collapse-directory"
  },
  {
    "keystrokes": "enter",
    "command": "tree-view:open-selected-entry"
  },
  {
    "keystrokes": "ctrl-Shift-C",
    "command": "tree-view:copy-full-path"
  },
  {
    "keystrokes": "m",
    "command": "tree-view:move"
  },
  {
    "keystrokes": "f2",
    "command": "tree-view:move"
  },
  {
    "keystrokes": "a",
    "command": "tree-view:add-file"
  },
  {
    "keystrokes": "Shift-A",
    "command": "tree-view:add-folder"
  },
  {
    "keystrokes": "d",
    "command": "tree-view:duplicate"
  },
  {
    "keystrokes": "delete",
    "command": "tree-view:remove"
  },
  {
    "keystrokes": "backspace",
    "command": "tree-view:remove"
  },
  {
    "keystrokes": "k",
    "command": "core:move-up"
  },
  {
    "keystrokes": "j",
    "command": "core:move-down"
  },
  {
    "keystrokes": "i",
    "command": "tree-view:toggle-vcs-ignored-files"
  },
  {
    "keystrokes": "home",
    "command": "core:move-to-top"
  },
  {
    "keystrokes": "end",
    "command": "core:move-to-bottom"
  },
  {
    "keystrokes": "enter",
    "command": "core:confirm"
  },
  {
    "keystrokes": "escape",
    "command": "core:cancel"
  }
]
module.exports = keymap
