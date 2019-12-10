import React from 'react';
import './FAB.css'

const Footer = ({icon = 'far fa-comment'}) => {
  return (
    <div className="fab">
      <i className={icon}></i>
    </div>
  );
}

export default Footer;