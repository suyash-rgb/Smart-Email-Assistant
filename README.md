# Smart Email Assistant - Chrome Extension

## Overview

The Smart Email Assistant is a Chrome extension that helps users generate AI-powered email replies directly within Gmail. This extension leverages a backend SpringBoot API to produce professional, casual, friendly, and formal replies based on the user's selection.

![Alt text](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/ca16300aeedd2c4b9a442b28f4a97824fb6d9243/img/6622a10b71418bc54de60544_xg39csze28.webp)

I have developed a REST API using SpringBoot that serves as a wrapper for Google's Gemini API. This API generates a reply to a specific email based on the content captured from the email and the selected tone.

One can always create a web application but when it comes to emails its best to basically integrate the reply functionality into your email application/platform/service, which is what I have done. 

![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/d955a0d7b68d02ef6549f1511a14d67662da0ada/img/gmail-1.jpeg)
Gmail, launched by Google on April 1, 2004, revolutionized email with its user-friendly interface, robust search capabilities, and generous storage space. Initially available by invitation only, it quickly gained popularity due to its innovative features like conversation view and powerful spam filtering. Today, Gmail boasts over 1.8 billion users worldwide, holding a significant 28.78% share of the global email market. It remains a dominant force in the email industry, with a substantial user base in countries like the United States, India, and Indonesia2. Gmail's seamless integration with other Google services and its strong security features continue to make it a preferred choice for both personal and professional communication.

In case of a web application, one would basically be required to copy the contents of the email he has recieved and paste it into the web application created then generate the reply and copy that and paste it back to his email service. One can obviously do that but there's an easier way!
You can integrate you web application into Gmail's UI by creating a Chrome extension and loading it.
You can also publish this extension if you like.
![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/9e0079707ef220575330afe3242c80ce87b22e09/img/Email.png)
![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/b9cf287517bc9a068ecf39fcbe3c8d404c31262d/img/generated%20reply.png)

<br><br>
Whether you're replying to an email that you recieved recently or you're in a mail trail ( chain of replies ) the extension is smart enough to understand the context and generate an appropriate reply.
![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/6d3e8c615a6e0cb9828e38904a582b05686bceca/img/mail%20trail.gif)

<br>

### What is a Chrome Extension?
A Chrome extension is a small software program that enhances the functionality of the Google Chrome browser. Extensions allow users to customize their browsing experience by adding new features, modifying the appearance of web pages, or integrating with other services and applications. These extensions are built using web technologies such as HTML, CSS, and JavaScript, and can be easily installed from the Chrome Web Store. By leveraging the capabilities of Chrome extensions, users can streamline tasks, improve productivity, and personalize their interactions with the web.
![chrome extension](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/d1c3e6045a77c6b09c3935bb7e172787e092975f/img/chrome%20extension.jpg)
<br>

### Steps to Create a Chrome Extension

Creating a Chrome extension involves several steps. Here’s a high-level overview of the process:

1. **Set Up Your Extension Directory**:
   - Create a new directory for your extension files.
   - Inside this directory, create a file named `manifest.json`.

2. **Create the Manifest File**:
   - The `manifest.json` file provides essential information about your extension, such as its name, version, permissions, and background scripts.
   - Example content for `manifest.json`:
     ```json
     {
         "manifest_version": 3,
         "name": "My Extension",
         "version": "1.0",
         "description": "A brief description of your extension.",
         "permissions": ["activeTab"],
         "background": {
             "service_worker": "background.js"
         },
         "content_scripts": [
             {
                 "matches": ["<all_urls>"],
                 "js": ["content-script.js"]
             }
         ]
     }
     ```

3. **Develop the Extension's Functionality**:
   - Create HTML, CSS, and JavaScript files to implement the desired features of your extension.
   - Example content for `content-script.js`:
     ```javascript
     console.log("Content script loaded!");
     ```

4. **Load Your Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click "Load unpacked" and select the directory containing your extension files.

5. **Test and Debug Your Extension**:
   - Ensure that your extension works as expected by testing it in different scenarios.
   - Use the Chrome Developer Tools to debug and refine your code.

6. **Publish Your Extension (Optional)**:
   - If you wish to share your extension with others, you can publish it to the Chrome Web Store.

For more detailed information and documentation, please refer to the official [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/).

## Features

- Extracts email content from the Gmail interface.
- Provides a dropdown to select the tone of the reply (Professional, Casual, Friendly, Formal).
- Generates AI-based email replies using a backend API.
- Inserts the generated reply into the Gmail compose window.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>


## Features

- Extracts email content from the Gmail interface.
- Provides a dropdown to select the tone of the reply (Professional, Casual, Friendly, Formal).
- Generates AI-based email replies using a backend API.
- Inserts the generated reply into the Gmail compose window.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>

