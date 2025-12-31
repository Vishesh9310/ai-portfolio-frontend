import { useState } from "react";
import axios from "axios";
import ScrollToTop from '../common/ScrollToTop';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Vishesh 👋 How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: input }
    ];

    setMessages(updatedMessages);
    setInput("");

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/chat`,
      { messages: updatedMessages }
    );

    setMessages([
      ...updatedMessages,
      { role: "assistant", content: res.data.reply }
    ]);
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 left-6 w-80 h-96 bg-black text-white rounded-xl shadow-xl flex flex-col z-50">
          <div className="p-3 font-bold border-b">Chat with Vishesh</div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : ""}>
                <span className="inline-block bg-gray-800 p-2 rounded-lg">
                  {m.content}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 flex gap-2">
            <input
              className="flex-1 bg-gray-800 p-2 rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
            />
            <button onClick={sendMessage}>➡️</button>
          </div>
        </div>
      )}
      <ScrollToTop/>
    </>
  );
};

export default ChatWidget;
