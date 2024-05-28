import React from "react";

function Su({ refs }) {
  return (
    <main>
      <section id="su" ref={refs?.suRef} style={{textAlign:"center"}}>
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
          <button className="suim-button" style={{float: 'left'}}></button>
          <div className="suinformation">
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

export default Su;
