import React from 'react';
import data from '../data.json';
import Chat from './Chat/Chat';
import './ChatsList.css';

const ChatsList = () => {
  return (
    <main className="chats-list">
      {data.chatList.map((chat, index) => 
        <Chat key={index} {...chat}></Chat>  
      )}
    </main>
  );
}

export default ChatsList;