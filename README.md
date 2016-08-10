# /r/Formula1-Sidebar-Spoiler-Stopper
It's a chrome extension that allows you to hide the Race Winner, and Driver of the Day images from the sidebar of the Formula 1 subreddit.

## What it does
![example of usage](https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/interface_merged.png)
> Notice how you can't see the Race Winner, and Driver of the Day pictures (top right) after blocking was enabled (![blocking][browser_action icon block]).

Basically, it stops your browser from rendering the sidebar images that spoil the race results. This means that if you miss a race, then you'll have a chance of avoiding spoilers in the subreddit. Beyond that, it also lets you enable or disable this blocking, so if you've seen the race, then you can turn the blocker off.

This is a better solution that just turning the subreddit style off, since you can still see the rest of the sidebar's useful information.

## Installation
[Get it on the Chrome Web Store!](https://chrome.google.com/webstore/detail/rformula1-sidebar-spoiler/dmnihagnnmjaaohbhgghpgcelgejpflf)

Alternatively, just download and unzip the repo, navigate to `chrome://extensions/`, enable developer mode, and load the unpacked extension.

You can also manually .crx by drag-n-dropping it into `chrome://extensions/`, if you'd like.

## Usage
After installation, you'll see one of two different icons.

- ![no blocking][browser_action icon no block] This one shows up when the extension isn't blocking anything, and you'll see it during normal web use.

- ![blocking][browser_action icon block] This other one only shows up when it's currently blocking content on the subreddit.

Clicking on either of these icons has the same effect of opening up a small configuration window that looks like one of these:

<p align="center"><img src="https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/blocking_enabled_popup.png">          <img src="https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/blocking_disabled_popup.png"></p>

On it, the button always tells you what it will do. In the first case, clicking on it will disable the spoiler blocking. In the second case, clicking on it will enable spoiler blocking.  You can then refresh the page to see the change.

[browser_action icon no block]: https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/icon_noblock_16.png
[browser_action icon block]: https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/icon_block_16.png
