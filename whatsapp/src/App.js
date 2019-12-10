import React from 'react';
import './App.css';
import './Main.css';

import Header from './Header/Header';
import ChatsList from './ChatsList/ChatsList';
import FAB from './FAB';

function App() {
  return (
    <div id="app-wrapper">
      <Header></Header>
      <ChatsList></ChatsList>
      <FAB></FAB>
    </div>
  );
}

export default App;
