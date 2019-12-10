import React from 'react';
import Search from './Search';
import UserMenu from './UserMenu';
import './Top.css'

const Top = () => {
  return (
    <div className="top-header">
      <div className="left">WhatsApp</div>
      <div className="right">
        <Search></Search>
        <UserMenu></UserMenu>
      </div>
    </div>
  );
}

export default Top;