# ChatAI Chrome Extension

## Project Overview
The **ChatAI Chrome Extension** is a simple extension designed to showcase interaction with a mock API. This README offers insights into the project's implementation.

## Design Aspects
- **User Interface:** The extension features a clean interface housing an input field for messages and a send button for quick interactions.
- **Asynchronous Behavior:** To replicate real-world scenarios, a simulated delay precedes API calls. This highlights the importance of feedback via loading spinners during network requests.

## Challenges
- **Asynchronous Response Handling:** The `.then()` syntax effectively manages API responses, ensuring proper display and spinner usage.
- **Error Management:** A `catch` block is implemented to handle potential API call errors. It displays messages in the UI and logs debug information.
- **Input Validation:** Users receive error messages if they attempt to send empty messages, guiding them toward proper usage.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) for version control.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/saudjafar/ChatAI-Extension

2. Set Up the MockAPI Node.js Server using the following terminal commands inside the "Backend" folder, after which
   the mock API server should be running at `http://localhost:3000`.

   ```bash
    npm install
    npm start



4. Load the Chrome Extension:

- Open Google Chrome.
- Visit chrome://extensions/.
- Toggle on "Developer mode".
- Click "Load unpacked".
- Select the "Extension" folder in the repository.
