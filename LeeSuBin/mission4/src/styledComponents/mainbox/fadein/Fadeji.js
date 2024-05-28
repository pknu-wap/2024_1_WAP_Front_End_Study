import React, {useState} from 'react';
import './fade.css';

function Fadeji() {
    const [fadeIn, setFadeIn] = useState(false);

   const handleButtonClick = () => {
    setFadeIn(true);
  };

  return (
    <section id="fadeji">
    {!fadeIn && <button className='jiim-button' onClick={handleButtonClick}></button>}
      <div className={`fade-in-section ${fadeIn ? 'visible' : ''}`}>
      <h3>2005.00.00</h3>
      <h3>엠비티아이</h3>
      <h3>컴퓨터인공지능공학부</h3>
      <h3>장점:</h3>
      <h3>깃허브:</h3>
      <h3>그동안의 프로젝트</h3>
      <h4>프로젝트1:설명</h4>
      <h4>프로젝트2:설명</h4>
      <br/>
    </div> 
    </section>
  );
}

export default Fadeji;
