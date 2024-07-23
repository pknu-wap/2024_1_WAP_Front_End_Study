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
          <ProjectSummary />
          <h2>학년</h2>
          <ul>
            <li>1학년</li>
            <li>2학년</li>
            <li>3학년</li>
            <li>4학년</li>
          </ul>
        </div>
        <div className="content">
          <ProjectIframe />
        </div>
      </div>
    </div>
  );
}

const ProjectSummary = () => {
  return (
    <div className="b1">
      <nav>
        <ul>
          <li>
            <a href="https://example.com/project1" target="n_call">
              2024.03.20 ~ 2024.06.04:<br /> 웹 프론트엔드 스터디 및 토이 플젝
            </a>
          </li>
          <br />
          <li>
            <a href="https://blog.naver.com/sona_ta/80143292237" target="n_call">
              2024.06.20 ~ 2025.01.01:<br /> 프로젝트1
            </a>
          </li>
          <br />
        </ul>
      </nav>
    </div>
  );
};

const ProjectIframe = () => {
  return (
    <div className="b2" id="b2">
      <iframe
        name="n_call"
        title="Project Iframe"
      ></iframe>
    </div>
  );
};

export default App;

