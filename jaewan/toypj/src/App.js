import React, { useState, useEffect } from 'react';
import './App.css';
import { signUp } from './api/signUp.js';
import { login } from './api/login';
import { getSession } from './api/session.js';
import { logout } from './api/logout';
import { documentGet } from './api/documentGet';
import { downloadDoc } from './api/downloadDoc';

function App() {
  const [activeSidebar, setActiveSidebar] = useState('학년');
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);

  const years = ['1학년', '2학년', '3학년', '4학년'];
  const depts = ['컴퓨터공학과', '전자공학과', '기계공학과', '화학공학과'];

  const yearDocuments = {
    '1학년': ['1학년 문서1', '1학년 문서2'],
    '2학년': ['2학년 문서1', '2학년 문서2'],
    '3학년': ['3학년 문서1', '3학년 문서2'],
    '4학년': ['4학년 문서1', '4학년 문서2']
  };

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
        <div className="nav-item" onClick={() => handleNavClick('마이페이지')}>마이페이지</div>
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
          {activeSidebar === '마이페이지' ? (
            <Mypage />
          ) : (
            <>
              <DocList />
            </>
          )}
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

const Mypage = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [showLoginComponent, setShowLoginComponent] = useState(true);
  const [signUpBoxActive, setSignUpBoxActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (event) => {
    setInputId(event.target.value);
  };

  const onChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const signUpFunc = () => {
    signUp(inputId, inputPassword).then(
      (result) => {
        if (result) {
          alert('이메일 인증을 하시고 회원가입을 완료하시면 됩니다');
          return;
        }
        alert('회원가입이 완료되었습니다');
      }
    );
  };

  const onChangeloginId = (event) => {
    setLoginId(event.target.value);
  };

  const onChangeloginPw = (event) => {
    setLoginPw(event.target.value);
  };

  const loginFunc = () => {
    login(loginId, loginPw).then(
      (result) => {
        if (result) {
          alert('로그인 완료');
          window.location.reload();
          return;
        }
        alert('로그인 실패');
      }
    );
  };

  useEffect(() => {
    getSession().then((result) => {
      if (result.session !== undefined) {
        setShowLoginComponent(false);
        return;
      }
      setShowLoginComponent(true);
    });
  }, [setShowLoginComponent]);

  const logoutFunc = () => {
    logout().then((result) => {
      if (result) {
        setShowLoginComponent(true);
        return;
      }
      alert('로그아웃 실패');
    });
  };

  const handleSignUpBoxClick = () => {
    if (signUpBoxActive) return;
    setSignUpBoxActive(true);
  };

  const handleRemoveActive = () => {
    setSignUpBoxActive(false);
  };

  const handleSignUp = () => {
    if (name === '' || email === '' || password === '') {
      return;
    }
    handleRemoveActive();
  };

  return (
    <div>
      {showLoginComponent ? (
        <div className="box">
          <input type="text" value={loginId} onChange={onChangeloginId} placeholder="Email" />
          <input type="password" value={loginPw} onChange={onChangeloginPw} placeholder="Password" />
          <button onClick={loginFunc}>Login</button>
          <div className={`sign-up-box ${signUpBoxActive ? 'active' : ''}`} onClick={handleSignUpBoxClick}>
            {signUpBoxActive ? (
              <>
                <span onClick={(e) => { e.stopPropagation(); handleRemoveActive(); }}>X</span>
                <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={(e) => { e.stopPropagation(); handleSignUp(); }}>Sign up</button>
              </>
            ) : (
              <i className="material-icons">SignUp</i>
            )}
          </div>
        </div>
      ) : (
        <div className='logoutpage'>
          <div>환영합니다</div>
          <button className='logoutbutton' onClick={logoutFunc}>Logout</button>
        </div>
      )}
    </div>
  );
};

const DocList = () => {
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    documentGet().then((response) => {
      if (response.length === 0) {
        return;
      }
      setDocList(response);
    });
  }, []);

  return (
    <div>
      <ul>
        {docList.map((doc, index) => (
          <li key={index}>
            <button onClick={() => downloadDoc(doc)}>Download {doc}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
