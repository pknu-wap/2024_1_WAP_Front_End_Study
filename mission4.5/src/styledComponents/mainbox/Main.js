import React, {useState} from 'react';
import './Main.css';


function Main({setShowAllSections }) {
  const [fadeIn, setFadeIn] = useState(false);

   const handleButtonClick = () => {
    setFadeIn(true);
    setShowAllSections(true);
  };

  return (
    <main>
      <section id="main" >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
      <section id="home">
      {!fadeIn && <button class='mainb' onClick={handleButtonClick}>Click!</button>}
        <div className={`fade-in-section ${fadeIn ? 'visible' : ''}`}>
          <h1>Wap Front End Study Page</h1>
          <p>Introduce my partner</p>
        </div> 
      </section>
    </main>
  );
}

export default Main;