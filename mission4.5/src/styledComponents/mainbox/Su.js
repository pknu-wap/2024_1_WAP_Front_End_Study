import React, { useState } from "react";

function Su() {
  const [color, setColor] = useState("#fff"); // 초기 글자 색상을 설정합니다.
  const [position, setPosition] = useState(0); // 버튼 위치를 관리하는 상태 변수

  const handleButtonClick = () => {
    setColor((prevColor) => (prevColor === "#06ABD8" ? "#fff" : "#06ABD8"));
    setPosition((prevPosition) => (prevPosition === 0 ? -250 : 0));
  };
  return (
    <main>
      <section id="su">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Subin</h2>
        <div>
          <button 
          className="suim-button" 
          style={{float: 'left',
              transform: `translateX(${position}px)`,
              transition: 'transform 0.5s ease-in-out'
              }}
              onClick={handleButtonClick}
            ></button>
          <div className="suinformation" style={{ color: color }}>
            <h3>2005.08.22</h3>
            <h3>mbti:ISTJ</h3>
            <h3>컴퓨터인공지능공학부</h3>
            <h3>장점:책임감이 강하다</h3>
            <h3> 깃허브 링크: https://github.com/daimlee</h3>
            <h3>그동안의 프로젝트</h3>
            <h4>프로젝트1:프론트 토이 프로젝트</h4>
            <h4>프로젝트2:설명</h4>
          </div>
        </div>
      </section>
      <br/>
      <br/>
    </main>
  );
}

export default Su;
