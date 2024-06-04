import React from 'react';
import Main from './mainbox/Main';
import Idea from './mainbox/Idea';
import Jae from './mainbox/Jae';
import Su from './mainbox/Su';
import Ji from './mainbox/Ji';
 // 스타일을 위한 CSS 파일을 임포트합니다.

 function Mainbox(){

  return (
    <div className="Mainbox">
      <div ><Main/></div>
      <div ><Idea/></div>
      <div ><Jae/></div>
      <div ><Su/></div>
      <div ><Ji/></div>
    </div>
  );
}

export default Mainbox;