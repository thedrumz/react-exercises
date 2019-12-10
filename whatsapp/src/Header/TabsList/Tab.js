import React from 'react';
import './Tab.css'

const TabList = ({ name, unread, active }) => {
  return (
    <div className={active ? 'tab active' : 'tab'}>
      {name}
      {unread > 0 && <span className="badge">{unread}</span>}
    </div>
  );
}

export default TabList;