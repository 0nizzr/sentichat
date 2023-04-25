"use client";
import { useState, useRef, useEffect } from "react";

export default function Chat(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage.trim()]);
    }
    setNewMessage("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-44 flex-grow bg-white border-t">
      {/* chat messages display*/}
      <div className="h-5/6 overflow-y-auto overflow-x-hidden">
        {messages.map((message, index) => (
          /* Chat message sent */
          /* avatar pic */
          <div key={index} className="flex m-5">
            <div className="rounded-full h-14 w-14 bg-black cursor-pointer"></div>
            {/* chat text */}
            <div className="bg-gray-100 mx-4 w-1/2  rounded-md px-4 pt-2">
              {message}
              <p className="py-2 text-[0.82rem] text-gray-500 text-right">
                22:59 PM
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* write a message + send */}
      <form
        onSubmit={handleMessageSubmit}
        className="flex justify-center items-center h-1/6"
      >
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type a message"
          type="text"
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
