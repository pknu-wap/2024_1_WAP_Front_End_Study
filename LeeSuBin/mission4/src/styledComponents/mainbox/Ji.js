import React from "react";

function Ji({refs}) {
  return (
    <main>
      <section id="ji" ref={refs?.jiRef}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Jiwon</h2>
        <div>
          <button className="jiim-button" style={{float: 'left'}}></button>
          <div className="jiinformation">
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
    </main>
  );
}

export default Ji;