import React from 'react';
import Main from './mainbox/Main';
import Idea from './mainbox/Idea';
import Jae from './mainbox/Jae';
import Su from './mainbox/Su';
import Ji from './mainbox/Ji';
 // 스타일을 위한 CSS 파일을 임포트합니다.

 function Mainbox({ mainRef, ideaRef, jaeRef, suRef, jiRef }){

  return (
    <div className="Mainbox">
      <div ref={mainRef}><Main/></div>
      <div ref={ideaRef}><Idea/></div>
      <div ref={jaeRef}><Jae/></div>
      <div ref={suRef}><Su/></div>
      <div ref={jiRef}><Ji/></div>
    </div>
  );
}

export default Mainbox;