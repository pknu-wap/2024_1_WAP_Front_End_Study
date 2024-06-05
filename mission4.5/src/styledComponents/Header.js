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
        <div class='header-text2'>
          <nav>
              <ul>
                  <div class='header-text3'><li ><a href="#main" >main</a></li></div>
                  <div class='header-text3'><li ><a href="#idea" >idea</a></li></div>
                  <div class='header-text3'><li ><a href="#jae" >jaewan</a></li></div>
                  <div class='header-text3'><li ><a href="#su" >subin</a></li></div>
                  <div class='header-text3'><li ><a href="#ji" >jiwon</a></li></div>
                <br/>
              </ul>
            </nav>
        </div>
        
      </div>
    </header>
  );
}

export default Header;