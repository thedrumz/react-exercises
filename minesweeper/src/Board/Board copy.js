import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';
import { getSide, getTop, getTopRight, getRight, getBottomRight, getBottom, getBottomLeft, getLeft, getTopLeft } from '../utils';

const Board = ({ square, gameBoard }) => {
  const cellStates = 3;
  const cellSize = 20;
  const cells = [];
  const [ globalState, setGlobalState ] = useState([]);

  const discoverCell = index => async () => {
    if(globalState[index] % cellStates > 0) return;

    globalState[index] = false;
    
    if(gameBoard[index] === undefined) {
      await discoverCloseCells(index);
    }

    setGlobalState({...globalState})
  }

  const toggleCellState = index => value => {
    globalState[index] = value || 1;
    setGlobalState({...globalState})
  }

  const wait = () => {
    return new Promise((res, rej) => {
      setTimeout(() => res(), 50);
    })
  }

  const canDiscoverCell = index => index !== false && (index === undefined || index % cellStates === 0)

  const discoverCloseCells = async index => {
    if(index < 0 || index > square) return;
    await wait();
    if(getTop(index) !== false && (globalState[getTop(index)] === undefined || globalState[getTop(index)] % cellStates === 0)) {
      globalState[getTop(index)] = false;

      if(gameBoard[getTop(index)] === undefined) {
        setGlobalState({...globalState})
        await discoverCloseCells(getTop(index))
      }
    }
    if(getRight(index) !== false && globalState[getRight(index)] !== false) {
      globalState[getRight(index)] = false;

      if(gameBoard[getRight(index)] === undefined) {
        setGlobalState({...globalState})
        await discoverCloseCells(getRight(index))
      }
    }
    if(getBottom(index) !== false && globalState[getBottom(index)] !== false) {
      globalState[getBottom(index)] = false;

      if(gameBoard[getBottom(index)] === undefined) {
        setGlobalState({...globalState})
        await discoverCloseCells(getBottom(index))
      }
    }
    if(getLeft(index) !== false && globalState[getLeft(index)] !== false) {
      globalState[getLeft(index)] = false;

      if(gameBoard[getLeft(index)] === undefined) {
        setGlobalState({...globalState})
        await discoverCloseCells(getLeft(index))
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
    </div>
  )
}

export default Board;