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
     ![dev mode](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/8809aa6d06ca306d168bc4f757c7c710d57c815c/img/developer%20mode.png)
     <br><br>
   - Click "Load unpacked" and select the directory containing your extension files.
     ![dev mode](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/8809aa6d06ca306d168bc4f757c7c710d57c815c/img/load%20unpacked.png)

5. **Test and Debug Your Extension**:
   - Ensure that your extension works as expected by testing it in different scenarios.
   - Use the Chrome Developer Tools to debug and refine your code.

6. **Publish Your Extension (Optional)**:
   - If you wish to share your extension with others, you can publish it to the Chrome Web Store.

For more detailed information and documentation, please refer to the official [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/).

For free sample code for Chrome extensions, check out this [GitHub repository](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/tutorial.hello-world).

## Recent Updates

This section details the latest enhancements and modifications made to the Smart Email Assistant extension.

### Gemini 2.0 Flash Integration

-   **Description:** The extension now utilizes Google's Gemini 2.0 Flash model, replacing the previous Gemini 1.5 Flash version. This update improves the quality and efficiency of AI-generated email replies.
-   **Backend Changes:**
    -   Updated the backend service to interact with the Gemini 2.0 Flash API.
    -   Modified the DTO (Data Transfer Object) to include `maxLength` and `instructions` fields, allowing users to specify the desired reply length and provide custom instructions for the AI.
    -   Adjusted the service layer logic to incorporate these new fields when generating replies.

### User Interface Enhancements

-   **Description:** The user interface within Gmail has been significantly enhanced to provide a more intuitive and efficient user experience.
-   **Changes:**
    -   **Sidebar Panel:** The extension now features a dedicated sidebar panel for AI reply generation, offering a persistent and integrated interface within Gmail. 
    -   **Visual Theme:** A new purple-themed design has been implemented for the sidebar, improving the visual appeal and consistency of the extension.
    -   **Input Fields:** Users can now specify the desired reply length(in words), using a dedicated input field and provide custom instructions to the AI using a text area within the sidebar.
    -   **Close Button:** A close button has been added to the sidebar, allowing users to manually control its visibility.
    -   **CSS Refactoring:** Inline CSS styles have been consolidated into the `content.css` file, resulting in cleaner and more maintainable code.

### Functionality Improvements

-   **Description:** The core functionality of the extension has been improved to ensure seamless integration with Gmail and provide more control to the user.
-   **Changes:**
    -   **Toolbar Button Compatibility:** The sidebar's AI reply button now triggers the click event of the original AI reply button injected into the Gmail compose toolbar. This ensures that any previously injected functionality remains operational.

## Features

- Extracts email content from the Gmail interface.
- Provides a dropdown to select the tone of the reply (Professional, Casual, Friendly, Formal).
- Generates AI-based email replies using a backend API.
- Inserts the generated reply into the Gmail compose window.

## Key Components of the Project

### Gemini API

The Gemini API is a powerful tool that allows developers to access advanced generative models for various tasks, such as text generation, embeddings, and more. In this project, the Gemini API is used to generate AI-powered email replies based on the user's input and selected tone.
![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/7ba923714c837f1e070def8821eab6efa05ea733/img/gemini%20api.jpg)

#### How to Obtain a Gemini API Key

To use the Gemini API, you need to obtain an API key. Follow these steps to get your API key:

1. **Sign in to Google AI Studio**:
   - Go to [Google AI Studio](https://ai.google.dev/gemini-api/docs/api-key) and sign in with your Google account.

2. **Create a New Project**:
   - If you don't already have a project, create a new one in Google AI Studio.

3. **Generate an API Key**:
   - Navigate to the API section and generate a new API key for your project.

4. **Set Up Your API Key**:
   - For initial testing, you can hard code the API key in your application. However, it is recommended to set up your API key as an environment variable for better security.

5. **Secure Your API Key**:
   - Keep your API key secure and do not expose it in your source code. Follow best practices for managing API keys to prevent unauthorized access.

For more detailed information and documentation, please refer to the official [Gemini API Documentation](https://ai.google.dev/gemini-api/docs).


### MutationObserver

A MutationObserver is a built-in JavaScript object that allows you to watch for changes being made to the DOM tree. It provides a way to react to changes in the structure of a web page, such as when elements are added, removed, or modified. This is particularly useful for dynamically updating content or monitoring changes in real-time.
![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/8c15a53bcfba097fc058b31fad48719560f15d22/img/mutation%20observer.jpg)

#### How and Why MutationObserver is Used
In this project, MutationObserver is used to detect when the Gmail compose window is opened. By observing changes to the DOM, we can dynamically inject the AI reply button and the tone selection dropdown whenever the compose window appears. This approach ensures that the extension's functionality is seamlessly integrated into the Gmail interface, providing a smooth user experience.

For more detailed information and examples, you can refer to the official [MutationObserver Documentation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

### Material UI (MUI)

If you wish to develop a Web Application instead of the extension, I would like to suggest using Material UI. 
Material UI (MUI) is an open-source React component library that implements Google's Material Design principles. It provides a comprehensive set of pre-built components and styling solutions that enable developers to create visually appealing and consistent user interfaces with ease. MUI is highly customizable and flexible, making it suitable for a wide range of web development projects. Despite following Google's Material Design guidelines, Material UI is maintained by a dedicated community of developers and the team at MUI, rather than by Google itself.
![Gmail](https://github.com/suyash-rgb/Smart-Email-Assistant/blob/339e809de51ca24067d6e9033fab425278eb8679/img/materail%20ui.png)

For more detailed information and documentation, please refer to the official [Material UI Documentation](https://mui.com/?form=MG0AV3).

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>

2. Navigate to the extension directory:
    ```bash
    cd email-writer-ext

3. Load the extension in Chrome:
 - Open Chrome and navigate to ````chrome://extensions/````.
 - Enable "Developer mode" by toggling the switch in the top right corner.
 - Click "Load unpacked" and select the extension directory.

## Backend Setup
1. Set up the backend server to handle email generation requests.
2. Update the ````gemini.api.url```` and ````gemini.api.key```` values in the backedn configuration.

## Usage
1. Open Gmail in your Chrome browser.

2. Compose a new email or reply to an existing one.

3. Select the desired tone from the dropdown.

4. Click the "AI Reply" button to generate a response.

5. The generated reply will be inserted into the compose window.
<br>
[Checkout the Project Demo Video on YouTube](https://www.youtube.com/watch?v=wTNfwma_LSM)

## Contributing
Contributions are welcome! Please follow these steps to contribute: <br>
1. Fork the repository. <br>
2. Create a new branch for your feature or bugfix.
   ````
   git checkout -b feature-name
   ````
3. Commit your changes and push the branch to your fork.
   ````
   git commit -m "Description of changes"
   git push origin feature-name
   ````
4. Open a pull request and describe your changes.

## Contact
For questions or support, please reach out to me at suyashbaoney58@gmail.com .
