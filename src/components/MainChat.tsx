/* export default function MainChat() {
  return (
    <div className="bg-orange-700 min-h-44 flex-grow">
      <form action="">
        <input type="text" name="message" />
        <input type="button" />
      </form>
    </div>
  );
} */
"use client";
import { useState } from "react";

export default function Chat(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-44 flex-grow bg-white border-t">
      {/* chat messages display*/}
      <div className="h-5/6 overflow-y-auto overflow-x-hidden max-h-">
        {messages.map((message, index) => (
          /* Chat message sent */
          /* avatar pic */
          <div key={index} className="flex m-5">
            <div className=" rounded-full h-14 w-14 bg-black cursor-pointer"></div>
            {/* chat text */}
            <div className="bg-red-500 mx-4 w-1/2 p-2 rounded-md">
              {message}
            </div>
          </div>
        ))}
      </div>
      {/* write a message + send */}
      <form
        onSubmit={handleMessageSubmit}
        className="flex justify-center items-center h-1/6"
      >
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
