import "./App.scss";
import { ChatMsg } from "./cmp/chat-msg";
import AddIcon from "@mui/icons-material/Add";
import SvgComponent from "./cmp/chatgpt-svg";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can i help?",
    },
    {
      user: "user",
      message: "How can i help?",
    },
  ,
  ]);

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }]
    //  setChatLog([...chatLog, { user: "me", message: `${input}` }]);
     setInput("");
    const messages = chatLogNew.map((message) => message.message).join("")
    const response = await fetch("http://localhost:3080", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message: messages,
      }),
    });
    const data = await response.json();
    // setChatLog([...chatLogNew, { user: "gpt", message: `${input}` }]);
    setChatLog([...chatLogNew, { user: "gpt", message: data.message }]);
    console.log("data:", data.message);
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-btn" onClick={clearChat}>
          <AddIcon />
          <span> New Chat </span>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, idx) => {
            return <ChatMsg key={idx} message={message} />;
          })}
        </div>
        <div className="chat-log">
          <div className="chat-msg chatgpt">
            <div className="chat-msg-center">
              <div className="avatar chatgpt">
                <SvgComponent />
              </div>
            </div>
          </div>
        </div>

        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-input-area"></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
