import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';
import { getTop, getTopRight, getRight, getBottomRight, getBottom, getBottomLeft, getLeft, getTopLeft } from '../utils';

const Board = ({ bombs, square, gameBoard, globalState, setGlobalState, gameState, setGameState, resetGame }) => {
  const cellStates = 3;
  const cellSize = 20;
  const cells = [];

  const winLayer = <div className='game-state win'><div className="message">YOU WIN!!</div><div className="face">;P</div><button onClick={() => resetGame()}>Reset Game</button></div>;
  const gameOverLayer = <div className='game-state game-over'><div className="message">Boooooom!!</div><div className="face">:_(</div><button onClick={() => resetGame()}>Reset Game</button></div>

  const discoverCell = index => () => {
    if(globalState[index] % cellStates > 0) return;

    globalState[index] = false;

    if(gameBoard[index] === true) {
      setGameState(false)
    }

    if(gameBoard[index] === undefined) {
      discoverCloseCells(index);
    }

    const discovered = globalState && globalState.filter(cell => cell === false);
    if(square === discovered.length + bombs) {
      setGameState(true);
    }

    setGlobalState([...globalState])
  }

  const toggleCellState = index => value => {
    globalState[index] = value;
    setGlobalState([...globalState])
  }

  const canDiscoverCell = index => 
    index !== false && 
    index >= 0 && index < square &&
    (globalState[index] === undefined || globalState[index] === 0)

  const discoverCloseCells = index => {
    if(index < 0 || index > square -1) return;

    if(canDiscoverCell(getTop(index))) {
      globalState[getTop(index)] = false;

      if(gameBoard[getTop(index)] === undefined) {
        discoverCloseCells(getTop(index))
      }
    }
    if(canDiscoverCell(getTopRight(index))) {
      globalState[getTopRight(index)] = false;

      if(gameBoard[getTopRight(index)] === undefined) {
        discoverCloseCells(getTopRight(index))
      }
    }
    if(canDiscoverCell(getRight(index))) {
      globalState[getRight(index)] = false;

      if(gameBoard[getRight(index)] === undefined) {
        discoverCloseCells(getRight(index))
      }
    }
    if(canDiscoverCell(getBottomRight(index))) {
      globalState[getBottomRight(index)] = false;

      if(gameBoard[getBottomRight(index)] === undefined) {
        discoverCloseCells(getBottomRight(index))
      }
    }
    if(canDiscoverCell(getBottom(index))) {
      globalState[getBottom(index)] = false;

      if(gameBoard[getBottom(index)] === undefined) {
        discoverCloseCells(getBottom(index))
      }
    }
    if(canDiscoverCell(getBottomRight(index))) {
      globalState[getBottomRight(index)] = false;

      if(gameBoard[getBottomRight(index)] === undefined) {
        discoverCloseCells(getBottomRight(index))
      }
    }
    if(canDiscoverCell(getLeft(index))) {
      globalState[getLeft(index)] = false;

      if(gameBoard[getLeft(index)] === undefined) {
        discoverCloseCells(getLeft(index))
      }
    }
    if(canDiscoverCell(getTopLeft(index))) {
      globalState[getTopLeft(index)] = false;

      if(gameBoard[getTopLeft(index)] === undefined) {
        discoverCloseCells(getTopLeft(index))
      }
    }
  }

  for(let i=0; cells.length < square; i++) {
    cells.push(
      <Cell 
        key={i} 
        discoverCell={discoverCell(i)} 
        toggleCellState={toggleCellState(i)}
        cellState={globalState[i]}
        cellValue={gameBoard[i] || false}
      />
    );
  }

  return (
    <div className="board" style={{maxWidth: cellSize * Math.sqrt(square) + 'px'}}>
      {cells}
      {gameState !== -1 ? gameState === true ? winLayer : gameOverLayer : ''}
    </div>
  )
}

export default Board;