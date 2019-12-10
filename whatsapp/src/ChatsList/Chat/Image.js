import React from 'react';
import './Image.css';

const Image = ({ image }) => {
  const defaultImage = 'https://ramcotubular.com/wp-content/uploads/default-avatar.jpg'
  
  return (
    <img className="avatar" src={image || defaultImage} alt="avatar"></img>
  );
}

export default Image;