import React from 'react';
import Top from './Top';
import TabsList from './TabsList/TabsList';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Top></Top>
      <TabsList></TabsList>
    </header>
  );
}

export default Header;