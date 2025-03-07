# Email Writer Assistant - Chrome Extension

## Overview

The Email Writer Assistant is a Chrome extension that helps users generate AI-powered email replies directly within Gmail. This extension leverages a backend SpringBoot API to produce professional, casual, friendly, and formal replies based on the user's selection.

I have developed a REST API using SpringBoot that serves as a wrapper for Google's Gemini API. This API generates a reply to a specific email based on the content captured from the email and the selected tone.

One can always create a web application but when it comes to emails its best to basically integrate the reply functionality into your email application/platform/service, which is what I have done. 

Gmail, launched by Google on April 1, 2004, revolutionized email with its user-friendly interface, robust search capabilities, and generous storage space. Initially available by invitation only, it quickly gained popularity due to its innovative features like conversation view and powerful spam filtering. Today, Gmail boasts over 1.8 billion users worldwide, holding a significant 28.78% share of the global email market. It remains a dominant force in the email industry, with a substantial user base in countries like the United States, India, and Indonesia2. Gmail's seamless integration with other Google services and its strong security features continue to make it a preferred choice for both personal and professional communication.

In case of a web application, one would basically be required to copy the contents of the email he has recieved and paste it into the web application created then generate the reply and copy that and paste it back to his email service. One can obviously do that but there's an easier way!
You can integrate you web application into Gmail's UI by creating a Chrome extension and loading it.
You can also publish this extension if you like.




## Features

- Extracts email content from the Gmail interface.
- Provides a dropdown to select the tone of the reply (Professional, Casual, Friendly, Formal).
- Generates AI-based email replies using a backend API.
- Inserts the generated reply into the Gmail compose window.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>

