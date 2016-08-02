# /r/Formula1-Sidebar-Spoiler-Stopper
It's a chrome extension that allows you to hide the Race Winner, and Driver of the Day images from the sidebar of the Formula 1 subreddit.

## What it does
<table border="0">
  <tr>
    <td>It'll turn this:</td>
    <td>into this:</td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/blocking_disabled_example.png" style="height:50%;"></td>
    <td><img src="https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/blocking_enabled_example.png" style="height:50%;"></td>
  </tr>
</table>

Basically, it stops your browser from rendering the images that spoil the results. This means that if you miss a race, then you'll have a chance of avoiding spoilers in the subreddit. Beyond that, it also lets you enable or disable this blocking, so if you've seen the race, then you can turn the blocker off.

This is also a better solution that just turning the subreddit style off, since you can still see the rest of the sidebar's useful information.

## Installation
Just download and unzip the repo, navigate to chrome://extensions/, enable developer mode, and load the unpacked extension.

Alternatively, open up your Chrome extension list, and then drag and drop the rFormula1-Sidebar-Spoiler-Stopper.crx file into the list. After that, it should be ready to go (temporarily).

A Chrome Web Store upload is coming soon.

## Usage
After installation, you'll see two different icons.

![no blocking][browser_action icon no block] This one shows up when the extension isn't blocking anything, and you'll see it most of the time.

![blocking][browser_action icon block] This other one shows up when it's currently blocking content on the subreddit.

Clicking on either of these icons has the same effect of opening up a small configuration window that looks like this:

<p align="center"><img src="https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/blocking_enabled_popup.png"></p>

On it, the button always tells you what it will do. In this case, clicking on it will disable the spoiler blocking.  You can then refresh the page to see the change.

[browser_action icon no block]: https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/icon_noblock_16.png
[browser_action icon block]: https://raw.githubusercontent.com/naschorr/rFormula1-Sidebar-Spoiler-Stopper/master/resources/icon_block_16.png
