import React from 'react';
import '../styles.css';


function Header() {
  return (
    <header>
      <br/>
      <button className="custom-button">
        Front-end study webpage
      </button>
      <nav>
        <ul>
          <ul style={{float:'right'}}><a href="#ji">Jiwon</a></ul>
          <ul style={{float:'right'}}><a href="#Su">Subin</a></ul>
          <ul style={{float:'right'}}><a href="#Jae">Jaewan</a></ul>
          <ul style={{float:'right'}}><a href="#idea">idea</a></ul>
          <ul style={{float:'right'}}><a href="#main">main</a></ul>
          <br/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
