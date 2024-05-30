import React, { useRef } from 'react';
import Header from './styledComponents/Header';
import Footer from './styledComponents/Footer';
import Mainbox from './styledComponents/Mainbox';
import './styles.css';
import './App.css';


function App() {
  // useRef를 사용하여 각 섹션을 가리키는 ref를 만듭니다.
  // 김재완_이름추가
  const mainRef = useRef(null);
  const ideaRef = useRef(null);
  const jaeRef = useRef(null);
  const suRef = useRef(null);
  const jiRef = useRef(null);

  // scrollToSection 함수를 정의합니다.
  const scrollToSection = (section) => {
    switch (section) {
      case 'main':
        mainRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'idea':
        ideaRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'jae':
        jaeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'su':
        suRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ji':
        jiRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {/* Header 컴포넌트에 scrollToSection 함수를 전달합니다. */}
      <Header scrollToSection={scrollToSection} />
      {/* Mainbox 컴포넌트에 각 섹션을 가리키는 ref를 전달합니다. */}
      <Mainbox mainRef={mainRef} ideaRef={ideaRef} jaeRef={jaeRef} suRef={suRef} jiRef={jiRef} />
      <Footer />
    </div>
  );
}

export default App;
