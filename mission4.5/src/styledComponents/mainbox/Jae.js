import React, { useState } from "react";

function Jae() {
  const [color, setColor] = useState("#fff"); // 초기 글자 색상을 설정합니다.
  const [position, setPosition] = useState(0); // 버튼 위치를 관리하는 상태 변수

  const handleButtonClick = () => {
    setColor((prevColor) => (prevColor === "#06ABD8" ? "#fff" : "#06ABD8"));
    setPosition((prevPosition) => (prevPosition === 0 ? -250 : 0));
  };

  return (
    <main>
      <section id="jae" >
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
            <h3>mbti:INTP</h3>
            <h3>컴퓨터인공지능공학부</h3>
            <h3>장점:정리정돈</h3>
            <h3> 깃허브 링크: https://github.com/pknujaewan</h3>
            <h3>그동안의 프로젝트</h3>
            <h4>프로젝트1:프론트 토이 프로젝트</h4>
            <h4>프로젝트2:</h4>
          </div>
          <br/>
        </div>
      </section>
    <br/>
    <br/>
    </main>
    
    
  );
}

export default Jae;