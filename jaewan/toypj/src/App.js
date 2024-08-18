import React, { useState, useEffect } from 'react';
import './App.css';
import { signUp } from './api/signUp';
import { login } from './api/login';
import { getSession } from './api/session';
import { logout } from './api/logout';
import { documentGet } from './api/documentGet';
import { downloadDoc } from './api/downloadDoc';

function App() {
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedDept, setSelectedDept] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [showYear, setShowYear] = useState(false);
  const [showDept, setShowDept] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showMypage, setShowMypage] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToFavorites = (doc) => {
    setFavorites((prevFavorites) => [...prevFavorites, doc]);
  };

  const resetView = () => {
    setShowMypage(false);
    setShowFavorites(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="검색창"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>검색</button>
        </div>
        <div className="searchbarright">
          <p>환영합니다 OOO님!</p>
        </div>
      </header>
      <div className="main">
        <Sidebar
          showYear={showYear}
          setShowYear={setShowYear}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          showDept={showDept}
          setShowDept={setShowDept}
          selectedDept={selectedDept}
          setSelectedDept={setSelectedDept}
          showType={showType}
          setShowType={setShowType}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          showMypage={showMypage}
          setShowMypage={setShowMypage}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          resetView={resetView}
        />
        {showMypage ? (
          <Mypage favorites={favorites} setShowMypage={setShowMypage} />
        ) : showFavorites ? (
          <Favorites favorites={favorites} />
        ) : (
          <DocList
            selectedYear={selectedYear}
            selectedDept={selectedDept}
            selectedType={selectedType}
            addToFavorites={addToFavorites}
            setFavorites={setFavorites}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
}

function Favorites({ favorites }) {
  return (
    <div className="content">
      <h2>즐겨찾기 목록</h2>
      <table>
        <thead>
          <tr>
            <th>필요 학년</th>
            <th>필요 전공</th>
            <th>문서 이름</th>
            <th>문서 유형</th>
            <th>업로드 일자</th>
            <th>링크</th>
          </tr>
        </thead>
        <tbody>
          {favorites.length > 0 ? (
            favorites.map((doc, index) => (
              <tr key={index}>
                <td>{doc.grade}</td>
                <td>{doc.major}</td>
                <td>{doc.list_name}</td>
                <td>{doc.doc_type}</td>
                <td>{doc.created_at}</td>
                <td>
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">
                    다운로드
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">즐겨찾기된 문서가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Sidebar({
  showYear,
  setShowYear,
  selectedYear,
  setSelectedYear,
  showDept,
  setShowDept,
  selectedDept,
  setSelectedDept,
  showType,
  setShowType,
  selectedType,
  setSelectedType,
  showMypage,
  setShowMypage,
  showFavorites,
  setShowFavorites,
  resetView,
}) {
  const years = ['1학년', '2학년', '3학년', '4학년'];
  const depts = ['컴퓨터공학과', '전자공학과', '기계공학과', '화학공학과'];
  const types = ['수강신청', '전과', '휴학', '자퇴'];

  function toggleSelection(setSelected, item) {
    setSelected((prev) => {
      const idx = prev.indexOf(item);
      if (idx === -1) {
        return [...prev, item];
      } else {
        return prev.filter((x) => x !== item);
      }
    });
  }

  const handleHomeClick = () => {
    resetView();
    setShowYear(false);
    setShowDept(false);
    setShowType(false);
  };

  return (
    <div className="sidebar">
      <div className="nav-item" onClick={handleHomeClick}>
        Home
      </div>
      <div
        className="nav-item"
        onClick={() => {
          handleHomeClick();
          setShowYear(!showYear);
        }}
      >
        학년
      </div>
      {showYear && (
        <ul>
          {years.map((year) => (
            <li key={year} onClick={() => toggleSelection(setSelectedYear, year)}>
              <input type="checkbox" checked={selectedYear.includes(year)} readOnly />
              {year}
            </li>
          ))}
        </ul>
      )}
      <div
        className="nav-item"
        onClick={() => {
          handleHomeClick();
          setShowDept(!showDept);
        }}
      >
        학과
      </div>
      {showDept && (
        <ul>
          {depts.map((dept) => (
            <li key={dept} onClick={() => toggleSelection(setSelectedDept, dept)}>
              <input type="checkbox" checked={selectedDept.includes(dept)} readOnly />
              {dept}
            </li>
          ))}
        </ul>
      )}
      <div
        className="nav-item"
        onClick={() => {
          handleHomeClick();
          setShowType(!showType);
        }}
      >
        유형
      </div>
      {showType && (
        <ul>
          {types.map((type) => (
            <li key={type} onClick={() => toggleSelection(setSelectedType, type)}>
              <input type="checkbox" checked={selectedType.includes(type)} readOnly />
              {type}
            </li>
          ))}
        </ul>
      )}
      <div
        className="nav-item"
        onClick={() => {
          resetView();
          setShowFavorites(true);
        }}
      >
        즐겨찾기
      </div>
      <div
        className="nav-item"
        onClick={() => {
          resetView();
          setShowMypage(true);
        }}
      >
        마이페이지
      </div>
    </div>
  );
}

const Mypage = ({ favorites, setShowMypage }) => {
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
      alert('로그인 완료');
      setShowMypage(false);
      setShowLoginComponent(false);
      return;
    }
    alert('로그인 실패');
  };

  useEffect(() => {
    getSession().then((result) => {
      if (result && result.session) {
        setShowMypage(true);
        setShowLoginComponent(false);
      } else {
        setShowLoginComponent(true);
      }
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
    <div>
      {showLoginComponent ? (
        <div className="box">
          <div className="logindiv">
            <h1>Login</h1>
            <p>국립부경대학교 문서 정리 페이지입니다</p>
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
                <div className="signupdiv">
                  <h1>SignUp</h1>
                  <p>국립부경대학교 문서 정리 페이지에 오신것을 환영합니다!</p>
                </div>
                <span onClick={(e) => handleRemoveActive(e)}>X</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSignUp}>Sign up</button>
              </>
            ) : (
              <i className="material-icons">SignUp</i>
            )}
          </div>
        </div>
      ) : (
        <div className="content2">
          <div className="logoutpage">
            <h3>환영합니다!</h3>
            <button className="logoutbutton" onClick={logoutfunc}>
              Logout
            </button>
            <h4>즐겨찾기된 문서 목록:</h4>
            <ul>
              {favorites.map((doc, index) => (
                <li key={index}>{doc.list_name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

function DocList({ selectedYear, selectedDept, selectedType, setFavorites, searchQuery }) {
  const [docList, setDocList] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);

  useEffect(() => {
    documentGet().then((docs) => {
      if (!docs) {
        alert('문서를 가져오는데 실패하였습니다!');
      } else {
        setDocList(docs);
      }
    });
  }, []);

  useEffect(() => {
    if (!docList || docList.length === 0) {
      return;
    }

    let tempDocs = docList;
    if (selectedYear.length > 0) {
      tempDocs = tempDocs.filter((doc) => selectedYear.includes(doc.grade));
    }
    if (selectedDept.length > 0) {
      tempDocs = tempDocs.filter((doc) => selectedDept.includes(doc.major));
    }
    if (selectedType.length > 0) {
      tempDocs = tempDocs.filter((doc) => selectedType.includes(doc.doc_type));
    }
    if (searchQuery) {
      tempDocs = tempDocs.filter((doc) =>
        doc.list_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDocs(tempDocs);
  }, [selectedYear, selectedDept, selectedType, searchQuery, docList]);

  const addToFavorites = (doc) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.list_name === doc.list_name)) {
        alert('이미 즐겨찾기 목록에 추가된 문서입니다.');
        return prevFavorites;
      }
      return [...prevFavorites, doc];
    });
  };

  return (
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
            <th>즐겨찾기</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc, index) => (
              <tr key={index}>
                <td>{doc.grade}</td>
                <td>{doc.major}</td>
                <td className="listname" onClick={() => downloadDoc(doc.list_name)}>
                  {doc.list_name}
                </td>
                <td>{doc.doc_type}</td>
                <td>{doc.created_at}</td>
                <td>
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">
                    다운로드
                  </a>
                </td>
                <td className="favoritesbutton" onClick={() => addToFavorites(doc)}>
                  {doc.likes}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No documents found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
