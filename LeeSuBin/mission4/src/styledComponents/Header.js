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
            <ul><a href="#main">main</a></ul>
            <ul><a href="#idea">idea</a></ul>
            <ul><a href="#jae">jaewan</a></ul>
            <ul><a href="#su">subin</a></ul>
            <ul><a href="#ji">jiwon</a></ul>
            <br/>
          </ul>
        </nav>
    </header>
  );
}

export default Header;