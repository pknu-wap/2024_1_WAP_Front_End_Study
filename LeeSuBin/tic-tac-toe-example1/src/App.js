import { useState } from 'react';
import Title from './styledComponents/Title';
function Square() {
  const [value, setValue] = useState(null);
  
  function handleClick() {
    setValue('X');
  }

  return (
    

    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <Title>이수빈</Title>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}