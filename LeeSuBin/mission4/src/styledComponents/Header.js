import React from 'react';
import '../styles.css';
import '../index.css';

function Header() {
  return (
    <header>
      <br/>
      <button className="custom-button">
        Front-end study webpage
      </button>
      <nav>
        <ul>
          <button style={{float:'right'}}><a href="#ji">Jiwon</a></button>
          <button style={{float:'right'}}><a href="#su">Subin</a></button>
          <button style={{float:'right'}}><a href="#Jae">Jaewan</a></button>
          <button style={{float:'right'}}><a href="#idea">idea</a></button>
          <button style={{float:'right'}}><a href="#main">main</a></button>
          <br/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
