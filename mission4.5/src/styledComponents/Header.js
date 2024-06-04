import React from 'react';
import '../styles.css';
import '../index.css';


function Header() {
  return (
    <header>
      <div class="header-wrap">
        <div class='headerimg'>
          <img src='img/headerimg2.png' alt=""/>
        </div>
        <div class="header-text">
          <br/>
          <button className="custom-button">
            Front-end study webpage
          </button>
        </div>
        <div>
          <nav>
              <ul>
                  <ul className='header-text2'><a href="#ji">jiwon</a></ul>
                  <ul className='header-text2'><a href="#su">subin</a></ul>
                  <ul className='header-text2'><a href="#jae">jaewan</a></ul>
                  <ul className='header-text2'><a href="#idea">idea</a></ul>
                  <ul className='header-text2'><a href="#main">main</a></ul>
                <br/>
              </ul>
            </nav>
        </div>
        
      </div>
    </header>
  );
}

export default Header;