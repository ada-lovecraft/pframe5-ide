const keymap = [
  {
    "keys": "Home",
    "cmd": "editor:move-to-first-character-of-line",
    "enabled": false
  },
  {
    "keys": "End",
    "cmd": "editor:move-to-end-of-screen-line",
    "enabled": false
  },
  {
    "keys": "Shift+Home",
    "cmd": "editor:select-to-first-character-of-line",
    "enabled": false
  },
  {
    "keys": "Shift+End",
    "cmd": "editor:select-to-end-of-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+C",
    "cmd": "editor:copy-path",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "editor:indent",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "editor:newline",
    "enabled": false
  },
  {
    "keys": "Shift+Tab",
    "cmd": "editor:outdent-selected-rows",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+K",
    "cmd": "editor:delete-line",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "tool-panel:unfocus",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "editor:consolidate-selections",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "core:focus-next",
    "enabled": false
  },
  {
    "keys": "Shift+Tab",
    "cmd": "core:focus-previous",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Q",
    "cmd": "application:quit",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+H",
    "cmd": "application:hide",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+H",
    "cmd": "application:hide-other-applications",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+M",
    "cmd": "application:minimize",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+CommandOrControl+M",
    "cmd": "application:zoom",
    "enabled": false
  },
  {
    "keys": "Ctrl+P",
    "cmd": "core:move-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+N",
    "cmd": "core:move-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+B",
    "cmd": "core:move-left",
    "enabled": false
  },
  {
    "keys": "Ctrl+F",
    "cmd": "core:move-right",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+P",
    "cmd": "core:select-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+N",
    "cmd": "core:select-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+F",
    "cmd": "core:select-right",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+B",
    "cmd": "core:select-left",
    "enabled": false
  },
  {
    "keys": "Ctrl+H",
    "cmd": "core:backspace",
    "enabled": false
  },
  {
    "keys": "Ctrl+D",
    "cmd": "core:delete",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Up",
    "cmd": "core:move-up",
    "enabled": false
  },
  {
    "keys": "Down",
    "cmd": "core:move-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+Up",
    "cmd": "core:move-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+Down",
    "cmd": "core:move-down",
    "enabled": false
  },
  {
    "keys": "Left",
    "cmd": "core:move-left",
    "enabled": false
  },
  {
    "keys": "Right",
    "cmd": "core:move-right",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+CommandOrControl+L",
    "cmd": "window:reload",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+I",
    "cmd": "window:toggle-dev-tools",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+CommandOrControl+P",
    "cmd": "window:run-package-specs",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Left",
    "cmd": "pane:move-item-left",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Right",
    "cmd": "pane:move-item-right",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+,",
    "cmd": "application:show-settings",
    "enabled": true
  },
  {
    "keys": "Shift+CommandOrControl+N",
    "cmd": "application:new-window",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+W",
    "cmd": "window:close",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+O",
    "cmd": "application:open",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+O",
    "cmd": "application:add-project-folder",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+T",
    "cmd": "pane:reopen-closed-item",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+N",
    "cmd": "application:new-file",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+S",
    "cmd": "core:save",
    "enabled": true
  },
  {
    "keys": "Shift+CommandOrControl+S",
    "cmd": "core:save-as",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+S",
    "cmd": "window:save-all",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+W",
    "cmd": "core:close",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+F",
    "cmd": "window:toggle-full-screen",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Z",
    "cmd": "core:undo",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Z",
    "cmd": "core:redo",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Y",
    "cmd": "core:redo",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+X",
    "cmd": "core:cut",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+C",
    "cmd": "core:copy",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+V",
    "cmd": "core:paste",
    "enabled": false
  },
  {
    "keys": "Shift+Up",
    "cmd": "core:select-up",
    "enabled": false
  },
  {
    "keys": "Shift+Down",
    "cmd": "core:select-down",
    "enabled": false
  },
  {
    "keys": "Shift+Left",
    "cmd": "core:select-left",
    "enabled": false
  },
  {
    "keys": "Shift+Right",
    "cmd": "core:select-right",
    "enabled": false
  },
  {
    "keys": "Shift+Pageup",
    "cmd": "core:select-page-up",
    "enabled": false
  },
  {
    "keys": "Shift+Pagedown",
    "cmd": "core:select-page-down",
    "enabled": false
  },
  {
    "keys": "Delete",
    "cmd": "core:delete",
    "enabled": false
  },
  {
    "keys": "Shift+Delete",
    "cmd": "core:delete",
    "enabled": false
  },
  {
    "keys": "Pageup",
    "cmd": "core:page-up",
    "enabled": false
  },
  {
    "keys": "Pagedown",
    "cmd": "core:page-down",
    "enabled": false
  },
  {
    "keys": "Backspace",
    "cmd": "core:backspace",
    "enabled": false
  },
  {
    "keys": "Shift+Backspace",
    "cmd": "core:backspace",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Up",
    "cmd": "core:move-to-top",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Down",
    "cmd": "core:move-to-bottom",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Up",
    "cmd": "core:select-to-top",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Down",
    "cmd": "core:select-to-bottom",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+{",
    "cmd": "pane:show-previous-item",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+}",
    "cmd": "pane:show-next-item",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+Left",
    "cmd": "pane:show-previous-item",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+Right",
    "cmd": "pane:show-next-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+Pageup",
    "cmd": "pane:show-previous-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+Pagedown",
    "cmd": "pane:show-next-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+Tab",
    "cmd": "pane:show-next-recently-used-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+Tab ^ctrl",
    "cmd": "pane:move-active-item-to-top-of-stack",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Tab",
    "cmd": "pane:show-previous-recently-used-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Tab ^ctrl",
    "cmd": "pane:move-active-item-to-top-of-stack",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+=",
    "cmd": "window:increase-font-size",
    "enabled": false
  },
  {
    "keys": "CommandOrControl++",
    "cmd": "window:increase-font-size",
    "enabled": false
  },
  {
    "keys": "CommandOrControl++",
    "cmd": "window:decrease-font-size",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+_",
    "cmd": "window:decrease-font-size",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+0",
    "cmd": "window:reset-font-size",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K up",
    "cmd": "pane:split-up-and-copy-active-item",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K down",
    "cmd": "pane:split-down-and-copy-active-item",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K left",
    "cmd": "pane:split-left-and-copy-active-item",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K right",
    "cmd": "pane:split-right-and-copy-active-item",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+W",
    "cmd": "pane:close",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K alt+CommandOrControl+W",
    "cmd": "pane:close-other-items",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+P",
    "cmd": "window:focus-previous-pane",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+N",
    "cmd": "window:focus-next-pane",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+Up",
    "cmd": "window:focus-pane-above",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+Down",
    "cmd": "window:focus-pane-below",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+Left",
    "cmd": "window:focus-pane-on-left",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+Right",
    "cmd": "window:focus-pane-on-right",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+1",
    "cmd": "pane:show-item-1",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+2",
    "cmd": "pane:show-item-2",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+3",
    "cmd": "pane:show-item-3",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+4",
    "cmd": "pane:show-item-4",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+5",
    "cmd": "pane:show-item-5",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+6",
    "cmd": "pane:show-item-6",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+7",
    "cmd": "pane:show-item-7",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+8",
    "cmd": "pane:show-item-8",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+9",
    "cmd": "pane:show-item-9",
    "enabled": false
  },
  {
    "keys": "Alt+Left",
    "cmd": "editor:move-to-beginning-of-word",
    "enabled": false
  },
  {
    "keys": "Alt+Right",
    "cmd": "editor:move-to-end-of-word",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+Left",
    "cmd": "editor:select-to-beginning-of-word",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+Right",
    "cmd": "editor:select-to-end-of-word",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Backspace",
    "cmd": "editor:delete-to-beginning-of-line",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Backspace",
    "cmd": "editor:delete-to-beginning-of-line",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Delete",
    "cmd": "editor:delete-to-end-of-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A",
    "cmd": "editor:select-to-first-character-of-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+E",
    "cmd": "editor:select-to-end-of-line",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Left",
    "cmd": "editor:move-to-first-character-of-line",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Right",
    "cmd": "editor:move-to-end-of-screen-line",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Left",
    "cmd": "editor:select-to-first-character-of-line",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Right",
    "cmd": "editor:select-to-end-of-line",
    "enabled": false
  },
  {
    "keys": "Alt+Backspace",
    "cmd": "editor:delete-to-beginning-of-word",
    "enabled": false
  },
  {
    "keys": "Alt+Delete",
    "cmd": "editor:delete-to-end-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+A",
    "cmd": "editor:move-to-first-character-of-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+E",
    "cmd": "editor:move-to-end-of-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+K",
    "cmd": "editor:cut-to-end-of-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+W",
    "cmd": "editor:select-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+Left",
    "cmd": "editor:move-selection-left",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+Right",
    "cmd": "editor:move-selection-right",
    "enabled": false
  },
  {
    "keys": "Alt+F",
    "cmd": "editor:move-to-end-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+F",
    "cmd": "editor:move-to-next-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+F",
    "cmd": "editor:select-to-end-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+F",
    "cmd": "editor:select-to-next-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Alt+B",
    "cmd": "editor:move-to-beginning-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+B",
    "cmd": "editor:move-to-previous-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+B",
    "cmd": "editor:select-to-beginning-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+B",
    "cmd": "editor:select-to-previous-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Alt+H",
    "cmd": "editor:delete-to-beginning-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+H",
    "cmd": "editor:delete-to-beginning-of-subword",
    "enabled": false
  },
  {
    "keys": "Alt+D",
    "cmd": "editor:delete-to-end-of-word",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+D",
    "cmd": "editor:delete-to-end-of-subword",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+A",
    "cmd": "core:select-all",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+P",
    "cmd": "editor:log-cursor-scope",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+U",
    "cmd": "editor:upper-case",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+L",
    "cmd": "editor:lower-case",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+L",
    "cmd": "editor:select-line",
    "enabled": false
  },
  {
    "keys": "Ctrl+T",
    "cmd": "editor:transpose",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Left",
    "cmd": "editor:move-to-previous-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Right",
    "cmd": "editor:move-to-next-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+Left",
    "cmd": "editor:select-to-previous-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+Right",
    "cmd": "editor:select-to-next-subword-boundary",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Backspace",
    "cmd": "editor:delete-to-beginning-of-subword",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Delete",
    "cmd": "editor:delete-to-end-of-subword",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+Z",
    "cmd": "editor:checkout-head-revision",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+<",
    "cmd": "editor:scroll-to-cursor",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+CommandOrControl+F",
    "cmd": "editor:fold-selection",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Enter",
    "cmd": "editor:newline-below",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+Enter",
    "cmd": "editor:newline-above",
    "enabled": false
  },
  {
    "keys": "Alt+Enter",
    "cmd": "editor:newline",
    "enabled": false
  },
  {
    "keys": "Shift+Enter",
    "cmd": "editor:newline",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+]",
    "cmd": "editor:indent-selected-rows",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+[",
    "cmd": "editor:outdent-selected-rows",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+Up",
    "cmd": "editor:move-line-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+Down",
    "cmd": "editor:move-line-down",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+/",
    "cmd": "editor:toggle-line-comments",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+J",
    "cmd": "editor:join-lines",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+D",
    "cmd": "editor:duplicate-lines",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+L",
    "cmd": "editor:split-selections-into-lines",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Up",
    "cmd": "editor:add-selection-above",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Down",
    "cmd": "editor:add-selection-below",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+[",
    "cmd": "editor:fold-current-row",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+]",
    "cmd": "editor:unfold-current-row",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+{",
    "cmd": "editor:fold-all",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+}",
    "cmd": "editor:unfold-all",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+0",
    "cmd": "editor:unfold-all",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+1",
    "cmd": "editor:fold-at-indent-level-1",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+2",
    "cmd": "editor:fold-at-indent-level-2",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+3",
    "cmd": "editor:fold-at-indent-level-3",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+4",
    "cmd": "editor:fold-at-indent-level-4",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+5",
    "cmd": "editor:fold-at-indent-level-5",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+6",
    "cmd": "editor:fold-at-indent-level-6",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+7",
    "cmd": "editor:fold-at-indent-level-7",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+8",
    "cmd": "editor:fold-at-indent-level-8",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+9",
    "cmd": "editor:fold-at-indent-level-9",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+=",
    "cmd": "pane:increase-size",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl++",
    "cmd": "pane:decrease-size",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+O",
    "cmd": "advanced-open-file:toggle",
    "enabled": true
  },
  {
    "keys": "Ctrl+Alt+O",
    "cmd": "advanced-open-file:toggle",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "advanced-open-file:autocomplete",
    "enabled": false
  },
  {
    "keys": "Up",
    "cmd": "advanced-open-file:move-cursor-up",
    "enabled": false
  },
  {
    "keys": "Down",
    "cmd": "advanced-open-file:move-cursor-down",
    "enabled": false
  },
  {
    "keys": "Pageup",
    "cmd": "advanced-open-file:move-cursor-top",
    "enabled": false
  },
  {
    "keys": "Pagedown",
    "cmd": "advanced-open-file:move-cursor-bottom",
    "enabled": false
  },
  {
    "keys": "Ctrl+P",
    "cmd": "advanced-open-file:move-cursor-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+N",
    "cmd": "advanced-open-file:move-cursor-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+I",
    "cmd": "advanced-open-file:move-cursor-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+K",
    "cmd": "advanced-open-file:move-cursor-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+L",
    "cmd": "advanced-open-file:delete-path-component",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Z",
    "cmd": "advanced-open-file:undo",
    "enabled": false
  },
  {
    "keys": "Ctrl+Z",
    "cmd": "advanced-open-file:undo",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+O",
    "cmd": "atom-exploration:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+O",
    "cmd": "import-sort:sort",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+M",
    "cmd": "atom-react-preview:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+D",
    "cmd": "atom-ternjs:definition",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+C",
    "cmd": "atom-ternjs:rename",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+R",
    "cmd": "atom-ternjs:references",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Space",
    "cmd": "atom-ternjs:startCompletion",
    "enabled": false
  },
  {
    "keys": "Alt+O",
    "cmd": "atom-ternjs:documentation",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+Left",
    "cmd": "atom-ternjs:navigateBack",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+Right",
    "cmd": "atom-ternjs:navigateForward",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+D",
    "cmd": "atom-ternjs:definition",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+C",
    "cmd": "atom-ternjs:rename",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+E",
    "cmd": "atom-ternjs:references",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Space",
    "cmd": "atom-ternjs:startCompletion",
    "enabled": false
  },
  {
    "keys": "Alt+O",
    "cmd": "atom-ternjs:documentation",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+Left",
    "cmd": "atom-ternjs:navigateBack",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+Right",
    "cmd": "atom-ternjs:navigateForward",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+D",
    "cmd": "atom-ternjs:definition",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+C",
    "cmd": "atom-ternjs:rename",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+E",
    "cmd": "atom-ternjs:references",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Space",
    "cmd": "atom-ternjs:startCompletion",
    "enabled": false
  },
  {
    "keys": "Alt+O",
    "cmd": "atom-ternjs:documentation",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+Left",
    "cmd": "atom-ternjs:navigateBack",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+Right",
    "cmd": "atom-ternjs:navigateForward",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+L",
    "cmd": "typescript:format-code",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+L",
    "cmd": "typescript:format-code",
    "enabled": false
  },
  {
    "keys": "Ctrl+;",
    "cmd": "typescript:context-actions",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+;",
    "cmd": "typescript:context-actions",
    "enabled": false
  },
  {
    "keys": "F2",
    "cmd": "typescript:rename-refactor",
    "enabled": false
  },
  {
    "keys": "Shift+F12",
    "cmd": "typescript:find-references",
    "enabled": false
  },
  {
    "keys": "Alt+Enter",
    "cmd": "typescript:quick-fix",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+M",
    "cmd": "typescript:output-toggle",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+M",
    "cmd": "typescript:output-toggle",
    "enabled": false
  },
  {
    "keys": "F9",
    "cmd": "typescript:toggle-breakpoint",
    "enabled": false
  },
  {
    "keys": "F6",
    "cmd": "typescript:build",
    "enabled": false
  },
  {
    "keys": "F12",
    "cmd": "typescript:go-to-declaration",
    "enabled": false
  },
  {
    "keys": "Ctrl+'",
    "cmd": "typescript:sync",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+'",
    "cmd": "typescript:sync",
    "enabled": false
  },
  {
    "keys": "F8",
    "cmd": "typescript:go-to-next",
    "enabled": false
  },
  {
    "keys": "Shift+F8",
    "cmd": "typescript:go-to-previous",
    "enabled": false
  },
  {
    "keys": "Ctrl+Space",
    "cmd": "typescript:autocomplete",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Space",
    "cmd": "typescript:autocomplete",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+G",
    "cmd": "atomatigit:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+G",
    "cmd": "atomatigit:toggle",
    "enabled": false
  },
  {
    "keys": "J",
    "cmd": "core:move-down",
    "enabled": false
  },
  {
    "keys": "K",
    "cmd": "core:move-up",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "atomatigit:open",
    "enabled": false
  },
  {
    "keys": "Backspace",
    "cmd": "atomatigit:kill",
    "enabled": false
  },
  {
    "keys": "B",
    "cmd": "atomatigit:branches",
    "enabled": false
  },
  {
    "keys": "F",
    "cmd": "atomatigit:files",
    "enabled": false
  },
  {
    "keys": "L",
    "cmd": "atomatigit:commit-log",
    "enabled": false
  },
  {
    "keys": ":",
    "cmd": "atomatigit:git-command",
    "enabled": false
  },
  {
    "keys": "R",
    "cmd": "atomatigit:refresh",
    "enabled": false
  },
  {
    "keys": "Shift+P",
    "cmd": "atomatigit:push",
    "enabled": false
  },
  {
    "keys": "P",
    "cmd": "atomatigit:fetch",
    "enabled": false
  },
  {
    "keys": "Shift+S",
    "cmd": "atomatigit:stage",
    "enabled": false
  },
  {
    "keys": "Z",
    "cmd": "atomatigit:stash",
    "enabled": false
  },
  {
    "keys": "Shift+Z",
    "cmd": "atomatigit:stash-pop",
    "enabled": false
  },
  {
    "keys": "U",
    "cmd": "atomatigit:unstage",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "atomatigit:toggle-diff",
    "enabled": false
  },
  {
    "keys": "C",
    "cmd": "atomatigit:commit",
    "enabled": false
  },
  {
    "keys": "C",
    "cmd": "atomatigit:create-branch",
    "enabled": false
  },
  {
    "keys": "Shift+Enter",
    "cmd": "atomatigit:hard-reset-to-commit",
    "enabled": false
  },
  {
    "keys": "O",
    "cmd": "atomatigit:showCommit",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+A",
    "cmd": "ava:run-file",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+A",
    "cmd": "ava:run",
    "enabled": false
  },
  {
    "keys": "Shift+Space",
    "cmd": "emmet:expand-abbreviation-with-tab",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+H",
    "cmd": "git-plus:menu",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+C",
    "cmd": "git-plus:commit",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+A s",
    "cmd": "git-plus:status",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+A q",
    "cmd": "git-plus:add-and-commit-and-push",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+A a",
    "cmd": "git-plus:add-all-and-commit",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+A p",
    "cmd": "git-plus:add-all-commit-and-push",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+H",
    "cmd": "git-plus:menu",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+X",
    "cmd": "git-plus:commit",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A s",
    "cmd": "git-plus:status",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A q",
    "cmd": "git-plus:add-and-commit-and-push",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A a",
    "cmd": "git-plus:add-all-and-commit",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A p",
    "cmd": "git-plus:add-all-commit-and-push",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+A",
    "cmd": "git-plus:add",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+A c",
    "cmd": "git-plus:add-and-commit",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A",
    "cmd": "git-plus:add",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+A c",
    "cmd": "git-plus:add-and-commit",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+K",
    "cmd": "hey-pane:toggle-focus-of-active-pane",
    "enabled": false
  },
  {
    "keys": "Alt+>",
    "cmd": "linter:next-error",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+P",
    "cmd": "project-manager:list-projects",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+P",
    "cmd": "project-manager:list-projects",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+P",
    "cmd": "project-manager:list-projects",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Shift+Enter",
    "cmd": "project-manager:alt-confirm",
    "enabled": false
  },
  {
    "keys": "F5",
    "cmd": "sort-lines:sort",
    "enabled": false
  },
  {
    "keys": "K",
    "cmd": "core:move-up",
    "enabled": false
  },
  {
    "keys": "J",
    "cmd": "core:move-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+Space",
    "cmd": "autocomplete-plus:activate",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "autocomplete-plus:cancel",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+Q",
    "cmd": "autoflow:reflow-selection",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+Q",
    "cmd": "autoflow:reflow-selection",
    "enabled": false
  },
  {
    "keys": "Ctrl+F2",
    "cmd": "bookmarks:view-all",
    "enabled": false
  },
  {
    "keys": "F2",
    "cmd": "bookmarks:jump-to-next-bookmark",
    "enabled": false
  },
  {
    "keys": "Shift+F2",
    "cmd": "bookmarks:jump-to-previous-bookmark",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+F2",
    "cmd": "bookmarks:toggle-bookmark",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+F2",
    "cmd": "bookmarks:clear-bookmarks",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+F2",
    "cmd": "bookmarks:toggle-bookmark",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+F2",
    "cmd": "bookmarks:clear-bookmarks",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+F2",
    "cmd": "bookmarks:toggle-bookmark",
    "enabled": false
  },
  {
    "keys": "Alt+Shift+F2",
    "cmd": "bookmarks:clear-bookmarks",
    "enabled": false
  },
  {
    "keys": "Ctrl+M",
    "cmd": "bracket-matcher:go-to-matching-bracket",
    "enabled": false
  },
  {
    "keys": "Ctrl+]",
    "cmd": "bracket-matcher:remove-brackets-from-selection",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+M",
    "cmd": "bracket-matcher:select-inside-brackets",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+.",
    "cmd": "bracket-matcher:close-tag",
    "enabled": false
  },
  {
    "keys": "Ctrl+Backspace",
    "cmd": "bracket-matcher:remove-matching-brackets",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+,",
    "cmd": "bracket-matcher:select-inside-brackets",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+.",
    "cmd": "bracket-matcher:close-tag",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Backspace",
    "cmd": "bracket-matcher:remove-matching-brackets",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+,",
    "cmd": "bracket-matcher:select-inside-brackets",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+.",
    "cmd": "bracket-matcher:close-tag",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Backspace",
    "cmd": "bracket-matcher:remove-matching-brackets",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+P",
    "cmd": "command-palette:toggle",
    "enabled": true
  },
  {
    "keys": "Ctrl+Shift+P",
    "cmd": "command-palette:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+P",
    "cmd": "command-palette:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+R",
    "cmd": "dev-live-reload:reload-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Shift+R",
    "cmd": "dev-live-reload:reload-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+U",
    "cmd": "encoding-selector:show",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+U",
    "cmd": "encoding-selector:show",
    "enabled": false
  },
  {
    "keys": "Alt+U",
    "cmd": "encoding-selector:show",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+F",
    "cmd": "project-find:show",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+F",
    "cmd": "find-and-replace:show",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+F",
    "cmd": "find-and-replace:show-replace",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+F",
    "cmd": "project-find:show",
    "enabled": false
  },
  {
    "keys": "Ctrl+F",
    "cmd": "find-and-replace:show",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+G",
    "cmd": "find-and-replace:find-next",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+G",
    "cmd": "find-and-replace:find-previous",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+F3",
    "cmd": "find-and-replace:find-next-selected",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+F3",
    "cmd": "find-and-replace:find-previous-selected",
    "enabled": false
  },
  {
    "keys": "Ctrl+CommandOrControl+G",
    "cmd": "find-and-replace:select-all",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+D",
    "cmd": "find-and-replace:select-next",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+E",
    "cmd": "find-and-replace:replace-next",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+E",
    "cmd": "find-and-replace:use-selection-as-find-pattern",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+U",
    "cmd": "find-and-replace:select-undo",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+D",
    "cmd": "find-and-replace:select-skip",
    "enabled": false
  },
  {
    "keys": "F3",
    "cmd": "find-and-replace:find-next",
    "enabled": false
  },
  {
    "keys": "Shift+F3",
    "cmd": "find-and-replace:find-previous",
    "enabled": false
  },
  {
    "keys": "Ctrl+F3",
    "cmd": "find-and-replace:find-next-selected",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+F3",
    "cmd": "find-and-replace:find-previous-selected",
    "enabled": false
  },
  {
    "keys": "Alt+F3",
    "cmd": "find-and-replace:select-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+D",
    "cmd": "find-and-replace:select-next",
    "enabled": false
  },
  {
    "keys": "Ctrl+E",
    "cmd": "find-and-replace:use-selection-as-find-pattern",
    "enabled": false
  },
  {
    "keys": "Ctrl+U",
    "cmd": "find-and-replace:select-undo",
    "enabled": false
  },
  {
    "keys": "Ctrl+K ctrl+D",
    "cmd": "find-and-replace:select-skip",
    "enabled": false
  },
  {
    "keys": "Shift+Enter",
    "cmd": "find-and-replace:show-previous",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Enter",
    "cmd": "find-and-replace:confirm",
    "enabled": false
  },
  {
    "keys": "Alt+Enter",
    "cmd": "find-and-replace:find-all",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+/",
    "cmd": "find-and-replace:toggle-regex-option",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+C",
    "cmd": "find-and-replace:toggle-case-option",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+S",
    "cmd": "find-and-replace:toggle-selection-option",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+W",
    "cmd": "find-and-replace:toggle-whole-word-option",
    "enabled": false
  },
  {
    "keys": "Shift+Enter",
    "cmd": "find-and-replace:show-previous",
    "enabled": false
  },
  {
    "keys": "Ctrl+Enter",
    "cmd": "find-and-replace:confirm",
    "enabled": false
  },
  {
    "keys": "Alt+Enter",
    "cmd": "find-and-replace:find-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+/",
    "cmd": "find-and-replace:toggle-regex-option",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+C",
    "cmd": "find-and-replace:toggle-case-option",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Enter",
    "cmd": "project-find:confirm",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+/",
    "cmd": "project-find:toggle-regex-option",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+C",
    "cmd": "project-find:toggle-case-option",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+W",
    "cmd": "project-find:toggle-whole-word-option",
    "enabled": false
  },
  {
    "keys": "Ctrl+Enter",
    "cmd": "project-find:confirm",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+/",
    "cmd": "project-find:toggle-regex-option",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+C",
    "cmd": "find-and-replace:toggle-case-option",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "find-and-replace:focus-next",
    "enabled": false
  },
  {
    "keys": "Shift+Tab",
    "cmd": "find-and-replace:focus-previous",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Enter",
    "cmd": "find-and-replace:replace-all",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+Enter",
    "cmd": "project-find:replace-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Enter",
    "cmd": "find-and-replace:replace-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Enter",
    "cmd": "project-find:replace-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Enter",
    "cmd": "find-and-replace:replace-all",
    "enabled": false
  },
  {
    "keys": "Ctrl+Enter",
    "cmd": "project-find:replace-all",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+T",
    "cmd": "fuzzy-finder:toggle-file-finder",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+P",
    "cmd": "fuzzy-finder:toggle-file-finder",
    "enabled": true
  },
  {
    "keys": "CommandOrControl+B",
    "cmd": "fuzzy-finder:toggle-buffer-finder",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+B",
    "cmd": "fuzzy-finder:toggle-git-status-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+T",
    "cmd": "fuzzy-finder:toggle-file-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+P",
    "cmd": "fuzzy-finder:toggle-file-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+B",
    "cmd": "fuzzy-finder:toggle-buffer-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+B",
    "cmd": "fuzzy-finder:toggle-git-status-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+T",
    "cmd": "fuzzy-finder:toggle-file-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+P",
    "cmd": "fuzzy-finder:toggle-file-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+B",
    "cmd": "fuzzy-finder:toggle-buffer-finder",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+B",
    "cmd": "fuzzy-finder:toggle-git-status-finder",
    "enabled": false
  },
  {
    "keys": "Shift+Enter",
    "cmd": "fuzzy-finder:invert-confirm",
    "enabled": false
  },
  {
    "keys": "Alt+G down",
    "cmd": "git-diff:move-to-next-diff",
    "enabled": false
  },
  {
    "keys": "Alt+G up",
    "cmd": "git-diff:move-to-previous-diff",
    "enabled": false
  },
  {
    "keys": "Alt+G d",
    "cmd": "git-diff:toggle-diff-list",
    "enabled": false
  },
  {
    "keys": "Ctrl+G",
    "cmd": "go-to-line:toggle",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+W",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Ctrl+W",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Ctrl+W",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+L",
    "cmd": "grammar-selector:show",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+L",
    "cmd": "grammar-selector:show",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+L",
    "cmd": "grammar-selector:show",
    "enabled": false
  },
  {
    "keys": "CommandOrControl++",
    "cmd": "image-view:zoom-in",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+=",
    "cmd": "image-view:zoom-in",
    "enabled": false
  },
  {
    "keys": "CommandOrControl++",
    "cmd": "image-view:zoom-out",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+_",
    "cmd": "image-view:zoom-out",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+9",
    "cmd": "image-view:zoom-to-fit",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+0",
    "cmd": "image-view:reset-zoom",
    "enabled": false
  },
  {
    "keys": "Ctrl++",
    "cmd": "image-view:zoom-in",
    "enabled": false
  },
  {
    "keys": "Ctrl+=",
    "cmd": "image-view:zoom-in",
    "enabled": false
  },
  {
    "keys": "Ctrl++",
    "cmd": "image-view:zoom-out",
    "enabled": false
  },
  {
    "keys": "Ctrl+_",
    "cmd": "image-view:zoom-out",
    "enabled": false
  },
  {
    "keys": "Ctrl+9",
    "cmd": "image-view:zoom-to-fit",
    "enabled": false
  },
  {
    "keys": "Ctrl+0",
    "cmd": "image-view:reset-zoom",
    "enabled": false
  },
  {
    "keys": "Ctrl++",
    "cmd": "image-view:zoom-in",
    "enabled": false
  },
  {
    "keys": "Ctrl+=",
    "cmd": "image-view:zoom-in",
    "enabled": false
  },
  {
    "keys": "Ctrl++",
    "cmd": "image-view:zoom-out",
    "enabled": false
  },
  {
    "keys": "Ctrl+_",
    "cmd": "image-view:zoom-out",
    "enabled": false
  },
  {
    "keys": "Ctrl+9",
    "cmd": "image-view:zoom-to-fit",
    "enabled": false
  },
  {
    "keys": "Ctrl+0",
    "cmd": "image-view:reset-zoom",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+.",
    "cmd": "key-binding-resolver:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+.",
    "cmd": "key-binding-resolver:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+.",
    "cmd": "key-binding-resolver:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+O",
    "cmd": "link:open",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+M",
    "cmd": "markdown-preview:toggle",
    "enabled": false
  },
  {
    "keys": "CommandOrControl++",
    "cmd": "markdown-preview:zoom-in",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+=",
    "cmd": "markdown-preview:zoom-in",
    "enabled": false
  },
  {
    "keys": "CommandOrControl++",
    "cmd": "markdown-preview:zoom-out",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+_",
    "cmd": "markdown-preview:zoom-out",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+0",
    "cmd": "markdown-preview:reset-zoom",
    "enabled": false
  },
  {
    "keys": "Ctrl++",
    "cmd": "markdown-preview:zoom-in",
    "enabled": false
  },
  {
    "keys": "Ctrl+=",
    "cmd": "markdown-preview:zoom-in",
    "enabled": false
  },
  {
    "keys": "Ctrl++",
    "cmd": "markdown-preview:zoom-out",
    "enabled": false
  },
  {
    "keys": "Ctrl+_",
    "cmd": "markdown-preview:zoom-out",
    "enabled": false
  },
  {
    "keys": "Ctrl+0",
    "cmd": "markdown-preview:reset-zoom",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+T",
    "cmd": "notifications:trigger-error",
    "enabled": false
  },
  {
    "keys": "Alt+G o",
    "cmd": "open-on-github:file",
    "enabled": false
  },
  {
    "keys": "Alt+G b",
    "cmd": "open-on-github:blame",
    "enabled": false
  },
  {
    "keys": "Alt+G h",
    "cmd": "open-on-github:history",
    "enabled": false
  },
  {
    "keys": "Alt+G i",
    "cmd": "open-on-github:issues",
    "enabled": false
  },
  {
    "keys": "Alt+G c",
    "cmd": "open-on-github:copy-url",
    "enabled": false
  },
  {
    "keys": "Alt+G r",
    "cmd": "open-on-github:branch-compare",
    "enabled": false
  },
  {
    "keys": "Alt+G g",
    "cmd": "open-on-github:repository",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+,",
    "cmd": "settings-view:open",
    "enabled": false
  },
  {
    "keys": "Ctrl+,",
    "cmd": "settings-view:open",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "snippets:expand",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "snippets:next-tab-stop",
    "enabled": false
  },
  {
    "keys": "Shift+Tab",
    "cmd": "snippets:previous-tab-stop",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+:",
    "cmd": "spell-check:correct-misspelling",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+:",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Ctrl+:",
    "cmd": "spell-check:correct-misspelling",
    "enabled": false
  },
  {
    "keys": "Ctrl+:",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Ctrl+:",
    "cmd": "spell-check:correct-misspelling",
    "enabled": false
  },
  {
    "keys": "Ctrl+:",
    "cmd": "core:cancel",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Tab",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+CommandOrControl+G",
    "cmd": "styleguide:show",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+G",
    "cmd": "styleguide:show",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+R",
    "cmd": "symbols-view:toggle-file-symbols",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+Down",
    "cmd": "symbols-view:go-to-declaration",
    "enabled": false
  },
  {
    "keys": "Alt+CommandOrControl+Up",
    "cmd": "symbols-view:return-from-declaration",
    "enabled": false
  },
  {
    "keys": "Ctrl+R",
    "cmd": "symbols-view:toggle-file-symbols",
    "enabled": false
  },
  {
    "keys": "Ctrl+R",
    "cmd": "symbols-view:toggle-file-symbols",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Down",
    "cmd": "symbols-view:go-to-declaration",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+Up",
    "cmd": "symbols-view:return-from-declaration",
    "enabled": false
  },
  {
    "keys": "Shift+CommandOrControl+R",
    "cmd": "symbols-view:toggle-project-symbols",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+R",
    "cmd": "symbols-view:toggle-project-symbols",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+\\",
    "cmd": "tree-view:toggle",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K commandorcontrol+B",
    "cmd": "tree-view:toggle",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+|",
    "cmd": "tree-view:reveal-active-file",
    "enabled": false
  },
  {
    "keys": "Ctrl+0",
    "cmd": "tree-view:toggle-focus",
    "enabled": false
  },
  {
    "keys": "Ctrl+\\",
    "cmd": "tree-view:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+K ctrl+B",
    "cmd": "tree-view:toggle",
    "enabled": false
  },
  {
    "keys": "Ctrl+|",
    "cmd": "tree-view:reveal-active-file",
    "enabled": false
  },
  {
    "keys": "Alt+\\",
    "cmd": "tree-view:toggle-focus",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+C",
    "cmd": "tree-view:copy",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+X",
    "cmd": "tree-view:cut",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+V",
    "cmd": "tree-view:paste",
    "enabled": false
  },
  {
    "keys": "Ctrl+F",
    "cmd": "tree-view:expand-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+B",
    "cmd": "tree-view:collapse-directory",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K right",
    "cmd": "tree-view:open-selected-entry-right",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K l",
    "cmd": "tree-view:open-selected-entry-right",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K left",
    "cmd": "tree-view:open-selected-entry-left",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K h",
    "cmd": "tree-view:open-selected-entry-left",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K up",
    "cmd": "tree-view:open-selected-entry-up",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K k",
    "cmd": "tree-view:open-selected-entry-up",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K down",
    "cmd": "tree-view:open-selected-entry-down",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+K j",
    "cmd": "tree-view:open-selected-entry-down",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+1",
    "cmd": "tree-view:open-selected-entry-in-pane-1",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+2",
    "cmd": "tree-view:open-selected-entry-in-pane-2",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+3",
    "cmd": "tree-view:open-selected-entry-in-pane-3",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+4",
    "cmd": "tree-view:open-selected-entry-in-pane-4",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+5",
    "cmd": "tree-view:open-selected-entry-in-pane-5",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+6",
    "cmd": "tree-view:open-selected-entry-in-pane-6",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+7",
    "cmd": "tree-view:open-selected-entry-in-pane-7",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+8",
    "cmd": "tree-view:open-selected-entry-in-pane-8",
    "enabled": false
  },
  {
    "keys": "CommandOrControl+9",
    "cmd": "tree-view:open-selected-entry-in-pane-9",
    "enabled": false
  },
  {
    "keys": "Ctrl+C",
    "cmd": "tree-view:copy",
    "enabled": false
  },
  {
    "keys": "Ctrl+X",
    "cmd": "tree-view:cut",
    "enabled": false
  },
  {
    "keys": "Ctrl+V",
    "cmd": "tree-view:paste",
    "enabled": false
  },
  {
    "keys": "Ctrl+K right",
    "cmd": "tree-view:open-selected-entry-right",
    "enabled": false
  },
  {
    "keys": "Ctrl+K l",
    "cmd": "tree-view:open-selected-entry-right",
    "enabled": false
  },
  {
    "keys": "Ctrl+K left",
    "cmd": "tree-view:open-selected-entry-left",
    "enabled": false
  },
  {
    "keys": "Ctrl+K h",
    "cmd": "tree-view:open-selected-entry-left",
    "enabled": false
  },
  {
    "keys": "Ctrl+K up",
    "cmd": "tree-view:open-selected-entry-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+K k",
    "cmd": "tree-view:open-selected-entry-up",
    "enabled": false
  },
  {
    "keys": "Ctrl+K down",
    "cmd": "tree-view:open-selected-entry-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+K j",
    "cmd": "tree-view:open-selected-entry-down",
    "enabled": false
  },
  {
    "keys": "Ctrl+1",
    "cmd": "tree-view:open-selected-entry-in-pane-1",
    "enabled": false
  },
  {
    "keys": "Ctrl+2",
    "cmd": "tree-view:open-selected-entry-in-pane-2",
    "enabled": false
  },
  {
    "keys": "Ctrl+3",
    "cmd": "tree-view:open-selected-entry-in-pane-3",
    "enabled": false
  },
  {
    "keys": "Ctrl+4",
    "cmd": "tree-view:open-selected-entry-in-pane-4",
    "enabled": false
  },
  {
    "keys": "Ctrl+5",
    "cmd": "tree-view:open-selected-entry-in-pane-5",
    "enabled": false
  },
  {
    "keys": "Ctrl+6",
    "cmd": "tree-view:open-selected-entry-in-pane-6",
    "enabled": false
  },
  {
    "keys": "Ctrl+7",
    "cmd": "tree-view:open-selected-entry-in-pane-7",
    "enabled": false
  },
  {
    "keys": "Ctrl+8",
    "cmd": "tree-view:open-selected-entry-in-pane-8",
    "enabled": false
  },
  {
    "keys": "Ctrl+9",
    "cmd": "tree-view:open-selected-entry-in-pane-9",
    "enabled": false
  },
  {
    "keys": "Right",
    "cmd": "tree-view:expand-item",
    "enabled": false
  },
  {
    "keys": "Ctrl+]",
    "cmd": "tree-view:expand-item",
    "enabled": false
  },
  {
    "keys": "L",
    "cmd": "tree-view:expand-item",
    "enabled": false
  },
  {
    "keys": "Left",
    "cmd": "tree-view:collapse-directory",
    "enabled": false
  },
  {
    "keys": "Ctrl+[",
    "cmd": "tree-view:collapse-directory",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+]",
    "cmd": "tree-view:recursive-expand-directory",
    "enabled": false
  },
  {
    "keys": "Alt+Right",
    "cmd": "tree-view:recursive-expand-directory",
    "enabled": false
  },
  {
    "keys": "Ctrl+Alt+[",
    "cmd": "tree-view:recursive-collapse-directory",
    "enabled": false
  },
  {
    "keys": "Alt+Left",
    "cmd": "tree-view:recursive-collapse-directory",
    "enabled": false
  },
  {
    "keys": "H",
    "cmd": "tree-view:collapse-directory",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "tree-view:open-selected-entry",
    "enabled": false
  },
  {
    "keys": "Ctrl+Shift+C",
    "cmd": "tree-view:copy-full-path",
    "enabled": false
  },
  {
    "keys": "M",
    "cmd": "tree-view:move",
    "enabled": false
  },
  {
    "keys": "F2",
    "cmd": "tree-view:move",
    "enabled": false
  },
  {
    "keys": "A",
    "cmd": "tree-view:add-file",
    "enabled": false
  },
  {
    "keys": "Shift+A",
    "cmd": "tree-view:add-folder",
    "enabled": false
  },
  {
    "keys": "D",
    "cmd": "tree-view:duplicate",
    "enabled": false
  },
  {
    "keys": "Delete",
    "cmd": "tree-view:remove",
    "enabled": false
  },
  {
    "keys": "Backspace",
    "cmd": "tree-view:remove",
    "enabled": false
  },
  {
    "keys": "K",
    "cmd": "core:move-up",
    "enabled": false
  },
  {
    "keys": "J",
    "cmd": "core:move-down",
    "enabled": false
  },
  {
    "keys": "I",
    "cmd": "tree-view:toggle-vcs-ignored-files",
    "enabled": false
  },
  {
    "keys": "Home",
    "cmd": "core:move-to-top",
    "enabled": false
  },
  {
    "keys": "End",
    "cmd": "core:move-to-bottom",
    "enabled": false
  },
  {
    "keys": "Enter",
    "cmd": "core:confirm",
    "enabled": false
  },
  {
    "keys": "Escape",
    "cmd": "core:cancel",
    "enabled": false
  }
]
export default keymap
