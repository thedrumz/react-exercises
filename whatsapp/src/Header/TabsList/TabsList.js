import React from 'react';
import Tab from './Tab';
import Cam from './Cam';
import './TabsList.css';

const TabsList = () => {
  const tabs = [
    {
      name: 'chats',
      unread: 2,
      active: true
    },
    {
      name: 'states'
    },
    {
      name: 'calls'
    },
  ];
  return (
    <div className="tabs-list">
      <Cam></Cam>
      <div className="tabs-container">
        {tabs.map((tab, index) => 
          <Tab key={index} {...tab}></Tab>
        )}
      </div>
    </div>
    
  );
}

export default TabsList;