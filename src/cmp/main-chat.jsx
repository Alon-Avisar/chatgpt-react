import React, { useState, useEffect } from "react";
import { ChatMsg } from "./chat-msg";
import AddIcon from "@mui/icons-material/Add";


export const MainChat = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");

  useEffect(() => {
    getModels();
  }, []);

  function clearChat() {
    setChatLog([]);
  }

  async function getModels() {
    try {
      const response = await fetch("http://localhost:3080/models");
      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        throw new Error(data.message);
      }
      setModels(data.models.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    const newMessage = { user: "me", message: input };
    setInput("");
  
    try {
      const chatLogNew = [...chatLog, newMessage];
      setChatLog(chatLogNew);
      const messages = chatLogNew.map(({ message }) => message).join("");
      const response = await fetch("http://localhost:3080", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: messages, currentModel }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const gptMessage = { user: "gpt", message: data.message };
      setChatLog([...chatLogNew, gptMessage]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-btn" onClick={clearChat}>
          <AddIcon />
          <span>New Chat</span>
        </div>
        <div className="models">
          <select onChange={(e) => setCurrentModel(e.target.value)}>
            {models.map((model, idx) => (
              <option key={idx} value={model.id}>
                {model.id}
              </option>
            ))}
          </select>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMsg key={index} message={message}/>
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
              placeholder="Hi human, ask me everything!"
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