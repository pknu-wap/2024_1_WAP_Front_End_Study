import React from "react";

function Jae({refs}) {
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
          <button className="jaeim-button"></button>
          <div className="jaeinformation">
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