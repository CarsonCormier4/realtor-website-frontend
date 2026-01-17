import React, { useState } from "react";
import "../styling/Messages.css";

const conversations = [
  { id: 1, name: "Lebron James", message: "Sent just now.", time: "4s", avatar: "/Images/prof3.jpg", unread: true },
  { id: 2, name: "James Bond", message: "Are you available tomorrow?", time: "37s", avatar: "/Images/prof3.jpg" },
  { id: 3, name: "Gilmore Thomas", message: "Thanks!", time: "1m", avatar: "/Images/prof3.jpg", unread: true },
  { id: 4, name: "Chris Paul", message: "Sent 1m ago.", time: "5m", avatar: "/Images/prof3.jpg", unread: true },
  { id: 5, name: "Oprah Winfrey", message: "Okay!", time: "14m", avatar: "/Images/prof3.jpg", unread: true },
  { id: 6, name: "Michelle Obama", message: "Liked a message.", time: "23m", avatar: "/Images/prof3.jpg" },
  { id: 7, name: "Thomas Edison", message: "I loved the house.", time: "1h", avatar: "/Images/prof3.jpg" },
];

const MessagesList = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="messages-page">
      {/* Conversations List */}
      <div className="messages-list">
        <div className="messages-header">
          <h2>Messages</h2>
          <button className="add-button">+</button>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>

        {/* Chat List */}
        <ul className="messages-container">
          {conversations.map((chat) => (
            <li key={chat.id} className="message-item" onClick={() => setSelectedChat(chat)}>
              <img src={chat.avatar} alt={chat.name} className="avatar" />
              <div className="message-info">
                <div className="name-time">
                  <span className="name">{chat.name}</span>
                  <span className="time">{chat.time}</span>
                </div>
                <div className="message-preview">
                  {chat.message} {chat.unread && <span className="unread-dot"></span>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      {selectedChat && (
        <div className="chat-window">
          <div className="chat-header">
            <img src={selectedChat.avatar} alt={selectedChat.name} className="chat-avatar" />
            <h3>{selectedChat.name}</h3>
            <div className="chat-actions">
              <button>📞</button>
              <button>📹</button>
            </div>
          </div>

          <div className="chat-messages">
            <p className="chat-bubble received">{selectedChat.message}</p>
            <p className="chat-bubble sent">Okay, let's discuss more.</p>
          </div>

          {/* Message Input */}
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
