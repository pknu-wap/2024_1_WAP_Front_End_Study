import React, { useState } from "react";

function Ji({ refs }) {
  const [color, setColor] = useState("#d4c8c8"); // 초기 글자 색상을 설정합니다.
  const [position, setPosition] = useState(0); // 버튼 위치를 관리하는 상태 변수

  const handleButtonClick = () => {
    setColor((prevColor) => (prevColor === "#fff" ? "#d4c8c8" : "#fff"));
    setPosition((prevPosition) => (prevPosition === 0 ? -250 : 0));
  };

  return (
    <main>
      <section id="ji" ref={refs?.jiRef}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Jiwon</h2>
        <div>
          <button
            className="jiim-button"
            style={{
              float: 'left',
              transform: `translateX(${position}px)`,
              transition: 'transform 0.5s ease-in-out'
            }}
            onClick={handleButtonClick}
          ></button>
          <div className="jiinformation" style={{ color: color  }}>
            <h3>2004.02.17</h3>
            <h3>mbti:ISTP</h3>
            <h3>전기공학과</h3>
            <h3>장점: 귀엽다</h3>
            <h3>깃허브:https://github.com/vneldd</h3>
            <h3>그동안의 프로젝트</h3>
            <h4>프로젝트1:프론트 토이 프로젝트</h4>
            <h4>프로젝트2:설명</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Ji;
