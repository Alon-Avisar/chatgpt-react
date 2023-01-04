import SvgComponent from "./chatgpt-svg";

export const ChatMsg = ({ message }) => {
  return (

      <div className={`chat-msg ${message.user === "gpt" && "chatgpt"}`}>
        <div className="chat-msg-center">
          <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
            {message.user === "gpt" ? <SvgComponent /> : null}
          </div>
          <div className="msg">{message.message}</div>
        </div>
      </div>
  );
};
