import React, { useState } from "react";

function Jae({refs}) {
  const [color, setColor] = useState("#132b2e"); // 초기 글자 색상을 설정합니다.
  const [position, setPosition] = useState(0); // 버튼 위치를 관리하는 상태 변수

  const handleButtonClick = () => {
    setColor((prevColor) => (prevColor === "#132b2e" ? "#e3f6f9" : "#132b2e"));
    setPosition((prevPosition) => (prevPosition === 0 ? -250 : 0));
  };

  return (
    <main>
      <section id="jae" ref={refs?.jaeRef}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Jaewan</h2>
        <div className="jaewrap">
          <button className="jaeim-button"
          style={{
            float: 'left',
            transform: `translateX(${position}px)`,
            transition: 'transform 0.5s ease-in-out'
          }}
          onClick={handleButtonClick}
          ></button>
          <div className="jaeinformation" style={{ color: color }}>
            <h3>2005.00.00</h3>
            <h3>mbti:</h3>
            <h3>컴퓨터인공지능공학부</h3>
            <h3>장점:</h3>
            <h3>깃허브:</h3>
            <h3>그동안의 프로젝트</h3>
            <h4>프로젝트1:설명</h4>
            <h4>프로젝트2:설명</h4>
          </div>
        </div>
      </section>
      <br/>
      <br/>
    </main>

    
  );
}

export default Jae;