import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    /* get the room main details */
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    /* get the messages  */
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            {" "}
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userimage={userimage}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
