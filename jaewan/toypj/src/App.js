import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-item">학년</div>
        <div className="nav-item">학과</div>
        <div className="nav-item">자주 방문하는 글</div>
        <div className="nav-item">유형</div>
        <div className="search-bar">
          <input type="text" placeholder="검색창" />
          <button>검색</button>
        </div>
      </header>
      <div className="main">
        <div className="sidebar">
          <h2>학년</h2>
          <ul>
            <li>1학년</li>
            <li>2학년</li>
            <li>3학년</li>
            <li>4학년</li>
          </ul>
        </div>
        <div className="content">
          <h2>화면나오는곳</h2>
      
        </div>
      </div>
    </div>
  );
}

export default App;
