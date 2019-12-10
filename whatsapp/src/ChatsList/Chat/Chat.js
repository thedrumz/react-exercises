import React from 'react';
import Image from './Image';
import Body from './Body';
import './Chat.css'

const Chat = ({ image, ...data }) => {
  return (
    <div className="chat">
      <Image image={image}></Image>
      <Body {...data}></Body>
    </div>
  );
}

export default Chat;