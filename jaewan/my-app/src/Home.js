import React, {useState} from 'react';
import './Home.css';

function Home() {
    const [fadeIn, setFadeIn] = useState(false);

   const handleButtonClick = () => {
    setFadeIn(true);
  };

  return (
    <section id="home">
    {!fadeIn && <button onClick={handleButtonClick}>Click!</button>}
      <div className={`fade-in-section ${fadeIn ? 'visible' : ''}`}>
      <h1>Wap Front end study PAGE</h1>
      <p>Introduce my partner</p>
    </div> 
    </section>
  );
}

export default Home;
