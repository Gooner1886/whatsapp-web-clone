import { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./SidebarChat.module.css";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for Chat room");

    if (roomName) {
      //Wire database
      db.collection("rooms").add({
        name: roomName,
      });
      console.log(roomName);
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className={classes.sidebarChat}>
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className={classes.sidebarChat__info}>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className={classes.sidebarChat} onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
