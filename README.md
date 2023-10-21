# HueCube
A very simple browser extension doing a very simple task. 🙂

## Overview
Alright, I think you probably guessed it. This is a quick browser extension (for Chrome) that uses YouTube's own API for fetching a video URL and then pastes it into an isolated iframe away from the main YouTube website, into a "new tab".

## Legal Disclaimer
Use at your own risk. By accessing this repository and its contents, you agree to take full responsibility of your actions. And if you intend to use it for the purposes of avoiding YouTube ads, then you further certify that you are the sole culprit behind all this. 💀

## 📁 Installation Step 1 (Source Files)
- Create the 3 files mentioned in this repository (exact names) and insert their respective code.
  or
- Download this entire repository via that green button that says **<> Code** and then **Download ZIP**. Extract and continue.
  or
- Download this ready-to-use [ZIP file](https://github.com/diztil/huecube/releases/download/v1/HueCube.zip). Extract and continue.

## 📁 Installation Step 2 (Adding To Chrome)
1. `chrome://extensions/` Copy paste this into a new tab.
2. Enable **Developer Mode**.
3. Use the **Load Unpacked** button to locate the (extracted/unzipped) "folder" (not the ZIP file) on your device. Select the folder only.

## 📁 Installation Step 3 (Testing)
Open this sample [YouTube URL](https://www.youtube.com/watch?v=dQw4w9WgXcQ) and use the "🧩" puzzle piece icon on your browser to bring up a list of extensions. Select the **🟩HueCube** one. Click on the "Open YouTube Tab" button. If you see the video load up properly, you're good to go! 👍

## 🪲 Common Remedy
If you see something like "cannot locate icon24.png" while setting up the extension, simply open up the `manifest.json` file and remove this entire section of code:
```json
"default_icon": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
```

## ❓ Support
- Want to blame someone? Send an email to wazack@dev.com.ng
- Want to thank someone? Send an email to wazack@wev.ovh
- The extension is not working? Send an email to cockracoon@wev.ovh

