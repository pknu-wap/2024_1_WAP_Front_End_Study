import React, { useState, useEffect } from 'react';
import './App.css';
import { signUp } from './api/signUp';
import { login } from './api/login';
import { getSession } from './api/session';
import { logout } from './api/logout';
import { documentGet } from './api/documentGet';
import { downloadDoc } from './api/downloadDoc';

function App() {
  const [showYears, setShowYears] = useState(false);
  const [showDepts, setShowDepts] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showTypes, setShowTypes] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLikes, setSelectedLikes] = useState(null);
  const [showMypage, setShowMypage] = useState(false);

  const years = ['1학년', '2학년', '3학년', '4학년'];
  const depts = ['컴퓨터공학과', '전자공학과', '기계공학과', '화학공학과'];
  const types = ['수강신청', '전과', '휴학', '자퇴'];
  const likes = ['a', 's', 'w', 'f'];

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

  const typeDocuments = {
    '수강신청': ['수강신청 문서1', '수강신청 문서2'],
    '전과': ['전과 문서1', '전과 문서2'],
    '휴학': ['휴학 문서1', '휴학 문서2'],
    '자퇴': ['자퇴 문서1', '자퇴 문서2']
  };

  const likesDocuments = {
    'a': ['a 문서1', 'a 문서2'],
    's': ['s 문서1', 's 문서2'],
    'w': ['w 문서1', 'w 문서2'],
    'f': ['f 문서1', 'f 문서2']
  };

  const toggleYears = () => {
    setShowYears(!showYears);
  };

  const toggleDepts = () => {
    setShowDepts(!showDepts);
  };

  const toggleLikes = () => {
    setShowLikes(!showLikes);
  };

  const toggleTypes = () => {
    setShowTypes(!showTypes);
  };

  const toggleMypage = () => {
    setShowMypage(!showMypage);
  };

  const handleYearClick = (year) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  const handleDeptClick = (dept) => {
    setSelectedDept(dept === selectedDept ? null : dept);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  const handleLikesClick = (likes) => {
    setSelectedLikes(likes === selectedLikes ? null : likes);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="검색창" />
          <button>검색</button>
        </div>
      </header>

      <div className="main">
        <div className="sidebar">
          <div className="nav-item" onClick={toggleYears}>학년</div>
          {showYears && (
            <ul>
              {years.map((year) => (
                <li key={year} onClick={() => handleYearClick(year)}>
                  <input type="checkbox" checked={selectedYear === year} readOnly />
                  {year}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={toggleDepts}>학과</div>
          {showDepts && (
            <ul>
              {depts.map((dept) => (
                <li key={dept} onClick={() => handleDeptClick(dept)}>
                  <input type="checkbox" checked={selectedDept === dept} readOnly />
                  {dept}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={toggleLikes}>자주 방문하는 글</div>
          {showLikes && (
            <ul>
              {likes.map((like) => (
                <li key={like} onClick={() => handleLikesClick(like)}>
                  <input type="checkbox" checked={selectedLikes === like} readOnly />
                  {like}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={toggleTypes}>유형</div>
          {showTypes && (
            <ul>
              {types.map((type) => (
                <li key={type} onClick={() => handleTypeClick(type)}>
                  <input type="checkbox" checked={selectedType === type} readOnly />
                  {type}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={toggleMypage}>마이페이지</div>
        </div>

        <div className="content">
          <h2>화면나오는곳</h2>
          {showMypage ? (
            <Mypage />
          ) : (
            <DocList />
          )}

          <ul>
            {showYears && selectedYear && yearDocuments[selectedYear]?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
            {showDepts && selectedDept && deptDocuments[selectedDept]?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
            {showLikes && selectedLikes && likesDocuments[selectedLikes]?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
            {showTypes && selectedType && typeDocuments[selectedType]?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const DocList = () => {
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    documentGet().then((response) => {
      if (response.length === 0) {
        alert('문서를 가지고 오는데 실패하였습니다!');
        return;
      }
      setDocList(response);
    });
  }, []);

  return (
    <div className="app">
      <div className="main">
        <div className="content">
          <h2>Document List</h2>
          <table>
            <thead>
              <tr>
                <th>순번</th>
                <th>필요 학년</th>
                <th>필요 전공</th>
                <th>문서 유형</th>
                <th>업로드 일자</th>
                <th>즐겨찾기 수</th>
              </tr>
            </thead>
            <tbody>
              {docList.map((doc, index) => (
                <tr key={doc.id} onClick={() => downloadDoc(doc.id)}>
                  <td>{index + 1}</td>
                  <td>{doc.grade}</td>
                  <td>{doc.major}</td>
                  <td>{doc.doc_type}</td>
                  <td>{doc.created_at}</td>
                  <td>{doc.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Mypage = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onChangeId = (event) => {
    setInputId(event.target.value);
  };

  const onChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const signUpFunc = () => {
    signUp(inputId, inputPassword).then((result) => {
      if (result) {
        alert('이메일 인증을 하시고 회원가입을 완료하시면 됩니다');
        return;
      }
      alert('회원가입이 완료되었습니다');
    });
  };

  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [showLoginComponent, setShowLoginComponent] = useState(true);

  const onChangeloginId = (event) => {
    setLoginId(event.target.value);
  };

  const onChangeloginPw = (event) => {
    setLoginPw(event.target.value);
  };

  const loginFunc = () => {
    login(loginId, loginPw).then((result) => {
      if (result) {
        alert('로그인완료');
        window.location.reload();
        return;
      }
      alert('로그인 실패');
    });
  };

  useEffect(() => {
    getSession().then((result) => {
      if (result.session !== undefined) {
        setShowLoginComponent(false);
        return;
      }
      setShowLoginComponent(true);
    });
  }, []);

  const logoutfunc = () => {
    logout().then((result) => {
      if (result) {
        setShowLoginComponent(true);
        return;
      }
      alert('로그아웃 실패');
    });
  };

  return (
    <div>
      {showLoginComponent ? (
        <>
          <div>
            <input type='text' value={loginId} onChange={onChangeloginId} />
            <input type='password' value={loginPw} onChange={onChangeloginPw} />
            <button onClick={loginFunc}>login</button>
          </div>
          <div>
            <input type='text' value={inputId} onChange={onChangeId} />
            <input type='password' value={inputPassword} onChange={onChangePassword} />
            <button onClick={signUpFunc}>Sign in</button>
          </div>
        </>
      ) : (
        <div>
          <div>환영합니다</div>
          <button onClick={logoutfunc}>logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
