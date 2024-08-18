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
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedDept, setSelectedDept] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedLikes, setSelectedLikes] = useState([]);
  const [visibleYears, setVisibleYears] = useState([]);
  const [visibleDepts, setVisibleDepts] = useState([]);
  const [visibleTypes, setVisibleTypes] = useState([]);
  const [visibleLikes, setVisibleLikes] = useState([]);
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
    setShowMypage(false);
  };

  const toggleDepts = () => {
    setShowDepts(!showDepts);
    setShowMypage(false);
  };

  const toggleLikes = () => {
    setShowLikes(!showLikes);
    setShowMypage(false);
  };

  const toggleTypes = () => {
    setShowTypes(!showTypes);
    setShowMypage(false);
  };

  const showMypageSection = () => {
    setShowMypage(true);
    setShowYears(false);
    setShowDepts(false);
    setShowLikes(false);
    setShowTypes(false);
  };

  const handleSelection = ( setFunction, visibleFunction, item) => {
    setFunction(prevItems => {
      const newItems = prevItems.includes(item) ? prevItems.filter(i => i !== item) : [...prevItems, item];
      visibleFunction(newItems);  // 문서 목록 보이도록 업데이트
      return newItems;
    });
  };


  return (
    <div className="app">
      <header className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="검색창" />
          <button>검색</button>
        </div>
        <div className='searchbarright'>
        <p>환영합니다 OOO님!</p>
        </div>
      </header>

      <div className="main">
        <div className="sidebar">
          <div className="nav-item" onClick={toggleYears}>학년</div>
          {showYears && (
            <ul>
              {years.map((year) => (
                <li key={year} onClick={() => handleSelection(selectedYear, setSelectedYear, setVisibleYears, year)}>
                  <input type="checkbox" checked={selectedYear.includes(year)} readOnly />
                  {year}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={toggleDepts}>학과</div>
          {showDepts && (
            <ul>
              {depts.map((dept) => (
                <li key={dept} onClick={() => handleSelection(selectedDept, setSelectedDept, setVisibleDepts, dept)}>
                  <input type="checkbox" checked={selectedDept.includes(dept)} readOnly />
                  {dept}
                </li>
              ))}
            </ul>
          )}
          
          <div className="nav-item" onClick={toggleTypes}>유형</div>
          {showTypes && (
            <ul>
              {types.map((type) => (
                <li key={type} onClick={() => handleSelection(selectedType, setSelectedType, setVisibleTypes, type)}>
                  <input type="checkbox" checked={selectedType.includes(type)} readOnly />
                  {type}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={toggleLikes}>즐겨찾기</div>
          {showLikes && (
            <ul>
              {likes.map((like) => (
                <li key={like} onClick={() => handleSelection(selectedLikes, setSelectedLikes, setVisibleLikes, like)}>
                  <input type="checkbox" checked={selectedLikes.includes(like)} readOnly />
                  {like}
                </li>
              ))}
            </ul>
          )}
          <div className="nav-item" onClick={showMypageSection}>마이페이지</div>
        </div>

        <div className="content">
          
          {showMypage ? (
            <Mypage />
          ) : (
            <DocList />
          )}

          <ul>
            {visibleYears.map(year => yearDocuments[year]?.map((doc, index) => (
              <li key={`${year}-${index}`}>{doc}</li>
            )))}
            {visibleDepts.map(dept => deptDocuments[dept]?.map((doc, index) => (
              <li key={`${dept}-${index}`}>{doc}</li>
            )))}
            {visibleLikes.map(like => likesDocuments[like]?.map((doc, index) => (
              <li key={`${like}-${index}`}>{doc}</li>
            )))}
            {visibleTypes.map(type => typeDocuments[type]?.map((doc, index) => (
              <li key={`${type}-${index}`}>{doc}</li>
            )))}
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
                <th>필요 학년</th>
                <th>필요 전공</th>
                <th>문서 이름</th>
                <th>문서 유형</th>
                <th>업로드 일자</th>
                <th>링크</th>
                <th>즐겨찾기 수</th>
              </tr>
            </thead>
            <tbody>
              {docList.map((doc) => (
                <tr>
                  <td>{doc.grade}</td>
                  <td>{doc.major}</td>
                  <td className='listname' key={doc.grade} onClick={() => downloadDoc(doc.grade)}>{doc.list_name}</td>
                  <td>{doc.doc_type}</td>
                  <td>{doc.created_at}</td>
                  <td>{doc.link}</td>
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
  
  const [signUpBoxActive, setSignUpBoxActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpFunc = async () => {
    const result = await signUp(email, password);
    if (result) {
      alert('이메일 인증을 하시고 회원가입을 완료하시면 됩니다');
      return;
    }
    alert('회원가입이 완료되었습니다');
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

  const loginFunc = async () => {
    const result = await login(loginId, loginPw);
    if (result) {

      alert('로그인완료');
      window.location.reload();
      return;
    }
    alert('로그인 실패');
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

  const logoutfunc = async () => {
    const result = await logout();
    if (result) {
      setShowLoginComponent(true);
      return;
    }
    alert('로그아웃 실패');
  };

  const handleSignUpBoxClick = () => {
    setSignUpBoxActive(true);
  };

  const handleRemoveActive = (e) => {
    if (e) {
      e.stopPropagation(); 
    }
    setSignUpBoxActive(false);
  };

  const handleSignUp = async () => {
    if (name === '' || email === '' || password === '') {
      return;
    }
    await signUpFunc();
    handleRemoveActive(); 
  };

  return (
    <div className='bigbox'>
      {showLoginComponent ? (
        <div className="box">
          <div className='logindiv'>
            <h1>Login</h1>
            <p>국립부경대학교 문서 정리 페이지입니다!</p>
          </div>  
          <input type="text" value={loginId} onChange={onChangeloginId} placeholder="Email" />
          <input type="password" value={loginPw} onChange={onChangeloginPw} placeholder="Password" />
          <button onClick={loginFunc}>Login</button>
          <div 
            className={`sign-up-box ${signUpBoxActive ? 'active' : ''}`} 
            onClick={handleSignUpBoxClick}
          >
            {signUpBoxActive ? (
              <>
                <div className='signupdiv'>
                  <h1>SignUp</h1>
                  <p>국립부경대학교 문서 정리 페이지에 오신것을 환영합니다!</p>
                </div>
                <span onClick={(e) => handleRemoveActive(e)}>X</span>
                <input className="Name" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignUp}>Sign up</button>
              </>
            ) : (
              <i className="material-icons">SignUp</i>
            )}
          </div>
        </div>
      ) : (
        <div className="logoutpage">
          <h3>환영합니다!</h3>
          <button className="logoutbutton" onClick={logoutfunc}>Logout</button>
        </div>
      )}
    </div>
  );
};



export default App;


