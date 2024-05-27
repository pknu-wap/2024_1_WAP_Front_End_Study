import React from 'react';
import '../styles.css';
import '../index.css';

function Header({ scrollToSection }) {
  return (
    <header>
      <br/>
      <button className="custom-button">
        Front-end study webpage
      </button>
      <nav>
        <ul>
          <button style={{float:'right'}} onClick={() => scrollToSection('ji')}>Jiwon</button>
          <button style={{float:'right'}} onClick={() => scrollToSection('su')}>Subin</button>
          <button style={{float:'right'}} onClick={() => scrollToSection('jae')}>Jaewan</button>
          <button style={{float:'right'}} onClick={() => scrollToSection('idea')}>idea</button>
          <button style={{float:'right'}} onClick={() => scrollToSection('main')}>main</button>
          <br/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
