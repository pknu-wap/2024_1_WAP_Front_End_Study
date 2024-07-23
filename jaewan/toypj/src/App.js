import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSidebar, setActiveSidebar] = useState('학년');
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);

  const years = ['1학년', '2학년', '3학년', '4학년'];
  const depts = ['컴퓨터공학과', '전자공학과', '기계공학과', '화학공학과'];

  // 각 학년별 문서
  const yearDocuments = {
    '1학년': ['1학년 문서1', '1학년 문서2'],
    '2학년': ['2학년 문서1', '2학년 문서2'],
    '3학년': ['3학년 문서1', '3학년 문서2'],
    '4학년': ['4학년 문서1', '4학년 문서2']
  };

  // 각 학과별 문서
  const deptDocuments = {
    '컴퓨터공학과': ['컴퓨터공학과 문서1', '컴퓨터공학과 문서2'],
    '전자공학과': ['전자공학과 문서1', '전자공학과 문서2'],
    '기계공학과': ['기계공학과 문서1', '기계공학과 문서2'],
    '화학공학과': ['화학공학과 문서1', '화학공학과 문서2']
  };

  const handleNavClick = (item) => {
    setActiveSidebar(item);
    setSelectedYear(null);
    setSelectedDept(null);
  };

  const handleYearClick = (year) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  const handleDeptClick = (dept) => {
    setSelectedDept(dept === selectedDept ? null : dept);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-item" onClick={() => handleNavClick('학년')}>학년</div>
        <div className="nav-item" onClick={() => handleNavClick('학과')}>학과</div>
        <div className="nav-item">자주 방문하는 글</div>
        <div className="nav-item">유형</div>
        <div className="search-bar">
          <input type="text" placeholder="검색창" />
          <button>검색</button>
        </div>
      </header>
      <div className="main">
        <div className="sidebar">
          {activeSidebar === '학년' && (
            <>
              <h2>학년</h2>
              <ul>
                {years.map((year) => (
                  <li key={year} onClick={() => handleYearClick(year)}>
                    <input type="checkbox" checked={selectedYear === year} readOnly />
                    {year}
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeSidebar === '학과' && (
            <>
              <h2>학과</h2>
              <ul>
                {depts.map((dept) => (
                  <li key={dept} onClick={() => handleDeptClick(dept)}>
                    <input type="checkbox" checked={selectedDept === dept} readOnly />
                    {dept}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="content">
          <h2>화면나오는곳</h2>
          <ul>
            {activeSidebar === '학년' && selectedYear && yearDocuments[selectedYear]?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
            {activeSidebar === '학과' && selectedDept && deptDocuments[selectedDept]?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
