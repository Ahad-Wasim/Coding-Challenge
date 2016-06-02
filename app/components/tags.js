import React from 'react';

const Tags = (props) => {
  return (
    <div className="tags">
      <p>{props.optionName}</p> 
      <span 
        onClick={() => props.removeSector(props.optionName)}
        className="close">
      X
      </span>
    </div>
  );
}

export default Tags;
