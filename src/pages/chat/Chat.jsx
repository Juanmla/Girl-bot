import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import ChatItem from "./ChatItem";
import UserItem from "./UserItem";
import InputChat from "./InputChat";
import Select from "../../pages/chat/select/Select";
import { doing, aboutMe } from "../../data/Actions";

const Chat = () => {
  let idCounter = 0;

  const [message, setMessage] = useState({});

  const [openSelect, setOpenSelect] = useState(false);

  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "girl",
      msg: ["Hola!", "¿Como te llamas bebeto?"],
    },
  ]);

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => firstResponse(message.msg), 500);
      setMessage({ ...message, msg: "" });
      setTimeout(() => setOpenSelect(true), 600);
    }
  }, [chat]);

  const chatEndRef = useRef(null);
  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  });

  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emitter: "girl",
      msg: [
        "¡Mucho gusto " + name + "!",
        "Mi nombre es Electra, soy una Girl-bot",
        "Que te gustaria saber de mi",
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  function getMessage(value) {
    idCounter = idCounter + 1;
    setMessage({
      id: idCounter,
      emitter: "user",
      msg: value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    setChat([...chat, message]);
  }

  let options = [
    {
      id: "What are you doing?",
      text: "¿Que estas haciendo?",
    },
    // {
    //   id: "Send me a meme?",
    //   text: "Mandame un meme",
    // },
    {
      id: "Tell me about you",
      text: "Contame sobre vos",
    },
  ];

  const [interactions, setInteractions] = useState([]);

  function handleSelectedOp(value) {
    let result;
    switch (value) {
      case "What are you doing?":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "Tell me about you":
        result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      default:
        console.log("No hay valores");
    }
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emitter === "girl" ? (
                <ChatItem text={message.msg} />
              ) : (
                <UserItem text={message.msg} key={index} />
              )
            )}

            {openSelect === true && <Select opciones={options} handleOptions={handleSelectedOp} />}

            {interactions.length > 0 &&
              interactions.map((int, index) => (
                <>
                  <ChatItem key={index} text={int} />
                  <Select opciones={options} handleOptions={handleSelectedOp} key={index} />
                </>
              ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              msg={message}
              sendMessage={sendMessage}
              getMessage={getMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
