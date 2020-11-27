import React from "react";
import "./ChatItem.css";
import girlAvatar from "../../assets/unr_blondegirl_170210_0024_9qz1ah.png";

const ChatItem = ({ text }) => {
  return (
    <div className="cat-item-container ">
      <img src={girlAvatar} alt="a girl" />
      <div className="cat-item-message">
        {text.map((t, index) => (
          <label key={index}>{t}</label>
        ))}
      </div>
    </div>
  );
};

export default ChatItem;
