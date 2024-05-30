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
          <button className='ji-button' style={{float:'right'}} onClick={() => scrollToSection('ji')}>Jiwon</button>
          <button className='su-button' style={{float:'right'}} onClick={() => scrollToSection('su')}>Subin</button>
          <button className='jae-button' style={{float:'right'}} onClick={() => scrollToSection('jae')}>Jaewan</button>
          <button className='idea-button' style={{float:'right'}} onClick={() => scrollToSection('idea')}>idea</button>
          <button className='main-button' style={{float:'right'}} onClick={() => scrollToSection('main')}>main</button>
          <br/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;