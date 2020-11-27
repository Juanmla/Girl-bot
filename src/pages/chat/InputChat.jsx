import React from "react";
import "./InputChat.css";

const InputChat = ({ sendMessage, getMessage, msg, chat }) => {
  return (
    <form onSubmit={(e) => sendMessage(e)} className="chatbot-chat-input-container">
      <input
        disabled={chat.length >= 3 ? true : false}
        type="text"
        placeholder={chat.length >= 3 ? null : "Escribi tu nombre"}
        value={msg.msg}
        onChange={(e) => getMessage(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
};

export default InputChat;
