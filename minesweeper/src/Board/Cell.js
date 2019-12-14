import React from 'react';
import './Cell.css';

const Cell = ({ discoverCell, toggleCellState, cellState, cellValue }) => {
  const cellIn = cellValue === true ? <span className='bomb-icon-icon'></span> : cellValue;
  const icons = ['', <span className='flag-icon'></span>, <span>?</span>]
  const handleLeftClick = () => {
    discoverCell();
  }

  const handleRightClick = (e) => {
    e.preventDefault();

    if(cellState === false) return;

    cellState = cellState || 0;
    toggleCellState(cellState < 2 ? cellState +1 : 0);
  }

  return (
    <div 
      className={cellState !== false ? 'cell' : 'cell cell-visible'}
      onClick={handleLeftClick} 
      onContextMenu={handleRightClick}>
        {icons[cellState % icons.length]}
        {cellState === false ? cellIn : ''}
    </div>
  )
}

export default Cell;