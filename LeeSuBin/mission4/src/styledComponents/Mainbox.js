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
      <Main ref={{ mainRef }} />
      <Idea ref={{ ideaRef }} />
      <Jae ref={{ jaeRef }} />
      <Su ref={{ suRef }} />
      <Ji ref={{ jiRef }} />
    </div>
  );
}

export default Mainbox;
