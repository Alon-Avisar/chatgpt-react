import "./App.scss";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-btn">
          <AddIcon />
          <span> New Chat </span>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-msg">
            <div className="chat-msg-center">

            <div className="avatar"></div>
            <div className="msg">Hw</div>
            </div>
          </div>
        </div>
        <div className="chat-log">
          <div className="chat-msg chatgpt">
            <div className="chat-msg-center">

            <div className="avatar"></div>
            <div className="msg">I am an AI</div>
            </div>
          </div>
        </div>

        <div className="chat-input-holder">
          <input className="text-input-area"></input>
        </div>
      </section>
    </div>
  );
}

export default App;
