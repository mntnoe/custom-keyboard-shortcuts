Custom Keyboard Shortcuts
=========================

This is a simple extension for Google Chrome providing keyboard shortcut
customization through the `chrome.commands` API. This means the shortcuts are
available on all tab pages, also special tab pages like downloads and settings.

No special permissions are required.

Note that there are more flexible extensions out there, for instance
[Shortkeys](https://github.com/mikecrittenden/chrome-shortkeys) by Mike
Crittenden, which provide keyboard shortcut customization by injecting scripts
into every page. The drawback of this approach is that the shortcuts won't
work on special tab pages.

Currently only a limited number of browser commands are available for
customization:

  - Next tab
  - Previous tab
  - Close tab
  - Reload tab
  - New tab

The commands are based on Jake Eaton's [cVim](https://github.com/1995eaton/chromium-vim) extension.
