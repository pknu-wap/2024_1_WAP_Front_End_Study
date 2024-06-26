import React from 'react';
import Main from './mainbox/Main';
import Idea from './mainbox/Idea';
import Jae from './mainbox/Jae';
import Su from './mainbox/Su';
import Ji from './mainbox/Ji';
 // 스타일을 위한 CSS 파일을 임포트합니다.

 function Mainbox({ mainRef, ideaRef, jaeRef, suRef, jiRef, showAllSections, setShowAllSections }){

  return (
    <div class='body1'>
    <>
      <div class='bodyimg'>
        <img src='img/react.png' alt=""/>
      </div>
      <div class='bodyimg2'>
        <img src='img/react.png' alt=""/>
    </div>
    <div class='bodyimg3'>
        <img src='img/react.png' alt=""/>
    </div>
    <div className="Mainbox">
      <div ref={mainRef}><Main  setShowAllSections={setShowAllSections}/></div>
      <hr/>
      <div ref={ideaRef} style={{ display: showAllSections ? 'block' : 'none' }}><Idea/></div>
      <hr/>
      <div ref={jaeRef} style={{ display: showAllSections ? 'block' : 'none' }}><Jae/></div>
      <hr/>
      <div ref={suRef} style={{ display: showAllSections ? 'block' : 'none' }}><Su/></div>
      <hr/>
      <div ref={jiRef} style={{ display: showAllSections ? 'block' : 'none' }}><Ji/></div>
      <hr/>
    </div>
    </>
    </div>
    
    
  );
}

export default Mainbox;