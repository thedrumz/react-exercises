import React, { useState } from 'react';
import './App.css';
import Board from './Board/Board';
import setBombs from './utils';

function App() {
  const size = 10;
  const square = size * size;
  const bombsPercent = 10 / 100;
  const bombs = parseInt(square * bombsPercent);
  const [ gameBoard, setGameBoard ] = useState(setBombs(square, bombs));
  const [ globalState, setGlobalState ] = useState([]);
  const [ gameState, setGameState ] = useState(-1);

  const resetGame = () => {
    setGameBoard(setBombs(square, bombs));
    setGlobalState([])
    setGameState(-1);
  }

  return (
    <div className="App">
      <Board 
        bombs={bombs}
        square={square} 
        gameBoard={gameBoard}
        globalState={globalState}
        setGlobalState={setGlobalState}
        resetGame={resetGame}
        gameState={gameState}
        setGameState={setGameState}
      />
    </div>
  );
}

export default App;
