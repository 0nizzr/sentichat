# Sentichat

Sentichat is a real-time chat application that integrates sentiment analysis. The application allows users to chat in real-time while providing sentiment analysis of the conversation as it progresses. The chat interface is user-friendly and responsive, allowing participants to communicate with each other seamlessly.

## Tech Stack

Sentichat is built using the following technologies:

- Next.js: Next.js is a popular React-based framework for building server-side-rendered (SSR) and statically generated web applications. It is used in Sentichat to create the front-end of the application, handle routing, and manage server-side logic.

- Tailwind CSS: Tailwind CSS is a utility-first CSS framework used to quickly and easily create custom styles for web applications. It is used in Sentichat to style the user interface of the chat application.

- Node.js: Node.js is a popular server-side runtime environment used to build scalable and efficient web applications. It is used in Sentichat to handle server-side logic and manage real-time communication between users.

- Express.js: Express.js is a popular web application framework for Node.js used to create server-side logic and handle HTTP requests. It is used in Sentichat to create the server and manage real-time communication between users.

- Socket.IO: Socket.IO is a real-time communication library used to send and receive messages in real-time between the chat participants. It is used in Sentichat to enable real-time communication and provide sentiment analysis of the conversation.

- OpenAI API: OpenAI API is a powerful machine learning platform used to develop and deploy AI models. It is used in Sentichat to perform sentiment analysis on the conversation in real-time using the ChatGPT API.
## Getting Started

To get started with Sentichat, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can clone the repository and install the necessary dependencies by running the following commands:

```
git clone <repository URL>
cd sentichat
npm install
```

Before starting the development server, you will need to obtain an API key for the OpenAI API. You can obtain an API key by signing up for an account on the [OpenAI website](https://openai.com/). Once you have an API key, you can create a `.env` file in the root of the project and add the following line:

```
OPENAI_API_KEY=<your API key here>
```

After the API key has been added to the `.env` file, you can start the development server by running the following command:

```
npm run dev
```

This will start the development server and open the application in your default browser. You can now start chatting and see the sentiment analysis of the conversation in real-time!
