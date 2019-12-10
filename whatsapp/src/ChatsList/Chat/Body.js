import React from 'react';
import './Body.css';

const Body = ({ phone, name, lastMessage }) => {
  const { status, text, date } = lastMessage;
  let check;

  switch(status) {
    case 'not-received':
      check = 'fas fa-check';
      break;
    case 'received':
      check = 'fas fa-check-double';
      break;
    case 'readed':
      check = 'fas fa-check-double green';
      break;
    default:
      check = 'fas fa-check';
      break;
  }

  return (
    <div className="chat-body">
      <div className="chat-body-top">
        <div>{name || phone}</div> 
        <div className="chat-body-time">{date}</div>
      </div>
      <div className="chat-body-bottom"><i className={check}></i> {text}</div>
    </div>
  );
}

export default Body;