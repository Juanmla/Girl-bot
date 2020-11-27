import React from "react";
import "./UserItem.css";
import avatarMan from "../../assets/download.jpeg";

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        <label>{text}</label>
      </div>
      <img src={avatarMan} alt="man" />
    </div>
  );
};

export default UserItem;
