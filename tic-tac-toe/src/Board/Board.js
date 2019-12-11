import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

const Board = () => {
  const start = [0,0,0,0,0,0,0,0,0];
  const borders = ["0 1px 1px 0", "0 1px 1px 1px", "0 0 1px 1px", "1px 1px 1px 0", "1px 1px 1px 1px", "1px 0 1px 1px", "1px 1px 0 0", "1px 1px 0 1px", "1px 0 0 1px"]
  let [globalState, setGlobalState] = useState(start);
  
  const changeCellState = index => cellState => {
    globalState[index] = cellState;
    setGlobalState({...globalState})
  }

  const handleClick = () => setGlobalState(start);

  return(
    <div className="board">
      {start.map((val, index) => 
        <Cell key={index} cellState={globalState[index]} changeCellState={changeCellState(index)} borderWidth={borders[index]} /> 
      )}
      <button className="btn" onClick={handleClick}>Reset board</button>
    </div>
  );
}

export default Board;