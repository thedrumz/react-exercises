import React from 'react';
import './Cell.css';

const Cell = ({borderWidth, cellState, changeCellState}) => {
  const icons = [<></>, <i className="fas fa-times"></i>, <i className="far fa-circle"></i>];

  const handleClick = () => {
    changeCellState(cellState +1);
  }
  
  return(
    <div 
      style={{borderWidth}} 
      className="cell" 
      onClick={handleClick}>
      {icons[cellState % icons.length]}
    </div>
  );
}

export default Cell;