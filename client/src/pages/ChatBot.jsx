import React, { useState } from "react";
import { chatWithBot } from "../api/clinic";
import Navbar from "../components/Navbar";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // add user message
    setChatHistory(prev => [
      ...prev,
      { sender: "user", text: message }
    ]);

    const userMessage = message;
    setMessage("");

    try {
      const res = await chatWithBot({ message: userMessage });

      setChatHistory(prev => [
        ...prev,
        {
          sender: "bot",
          text: res.data.reply,
          data: res.data.data || null
        }
      ]);
    } catch {
      setChatHistory(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Error: could not reach server."
        }
      ]);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1 className="page-title">Chat Assistant 🤖</h1>

        <div className="page-card">
          {/* Chat messages */}
          <div className="chat-box">
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg ${
                  msg.sender === "user" ? "chat-user" : "chat-bot"
                }`}
              >
                {/* Text (supports multiline replies like help) */}
                <div style={{ whiteSpace: "pre-line" }}>
                  {msg.text}
                </div>

                {/* Render clinic list if data exists */}
                {msg.data && (
                  <ul className="mt-2 space-y-2 text-sm">
                    {msg.data.map((clinic) => (
                      <li
                        key={clinic.id}
                        className="p-2 rounded bg-gray-100"
                      >
                        <strong>{clinic.clinic_name}</strong>
                        <br />
                        Risk score: {clinic.last_risk}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* User guidance */}
          <div className="text-sm text-gray-500 mb-2">
            💡 Try: <strong>"help"</strong>, <strong>"hello"</strong>, or{" "}
            <strong>"What are the top risks?"</strong>
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Ask something… e.g. "help" or "top risks"'
              className="modern-input flex-1"
            />
            <button className="modern-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;