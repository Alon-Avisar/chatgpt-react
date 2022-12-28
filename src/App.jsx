import "./App.scss";
import { ChatMsg } from "./cmp/chat-msg";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([


  ]);

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newMessage = { user: "me", message: input };

    console.log('newMessage:' , newMessage)
    console.log('input:' , input)
    
    const chatLogNew = [...chatLog, newMessage];
    console.log('chatLogNew:' , chatLogNew)
    setInput("");
    setChatLog(chatLogNew)
    const messages = chatLogNew.map(({ message }) => message).join("");
    const response = await fetch("http://localhost:3080", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: messages }),
    });
    const data = await response.json();
    const gptMessage = { user: "gpt", message: data.message };

    setChatLog([...chatLogNew, gptMessage]);
    
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-btn" onClick={clearChat}>
          <AddIcon />
          <span>New Chat</span>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMsg key={index} message={message} />
          ))}
        </div>
        <div className="chat-log">
          <div className="chat-msg chatgpt">
            <div className="chat-msg-center" />
          </div>
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="text-input-area"
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
