import React, { useState } from 'react';
import './App.css';
import { signUp } from './api/signUp';
import { login } from './api/login';
import { getSession } from './api/session';
import { logout } from './api/logout';
import {useEffect} from 'react';
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

          {/* <ProjectSummary /> */}
          

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
          {activeSidebar === '마이페이지' ? ( 
            <Mypage/>) : ( 
              <>
            {/* <ProjectIframe/> */}
            <DocList/>
            </>) 
            
          }

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

// const ProjectSummary = () => {
//   return (
//     <div className="b1">
//       <nav>
//         <ul>
//           <li>
//             <a href="https://example.com/project1" target="n_call">
//               2024.03.20 ~ 2024.06.04:<br /> 웹 프론트엔드 스터디 및 토이 플젝
//             </a>
//           </li>
//           <br />
//           <li>
//             <a href="https://www.pknu.ac.kr/main/163" target="n_call">
//               2024.06.20 ~ 2025.01.01:<br /> 프로젝트1
//             </a>
//           </li>
//           <br />
//         </ul>
//       </nav>
//     </div>
//   );
// };

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

const DocList = () => {
  const [docList, setDocList] = useState([]);

  useEffect(() => {
    documentGet().then((response) => {
      if (response.length === 0) {
        alert('문서를 가지고 오는데 실패하였습니다!');
        return ;
      }
      // console.log(response)
      setDocList(response)
    });
    
  },[])


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

  )
}
const Mypage = () => {
  const [inputId,setInputId] = useState('');
  const [inputPassword,setInputPassword] = useState('');

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
          alert('이메일 인증을 하시고 회원가입을 완료하시면 됩니다')
      
          return ; 
        }
          alert('회원가입이 완료되었습니다')


       }
     )
   }


   
  
  const [loginId,setLoginId] = useState('');
  const [loginPw,setLoginPw] = useState('');
  const [showloginComponent,setShowLoginComponent] = useState(true);

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
          alert('로그인완료')
          window.location.reload();
      
          return ; 
        }
          alert('로그인 실패')


      }
    )
  }
  
  useEffect(() => {
    getSession().then((result) => {
      if (result.session !== undefined){
        setShowLoginComponent(false)

        
        return ;
      }
      
      setShowLoginComponent(true)
    })
  },[])
  const logoutfunc = () => {
    logout().then((result) => {
      if (result){
        setShowLoginComponent(true)
        return;
      }
      alert('로그아웃 실패'); 
    })
  }
    
  
  return(

   <div>
     {showloginComponent ? ( <>
     <div>
      <input type='text' value={loginId} onChange={onChangeloginId}/>
      <input type='password' value={loginPw} onChange={onChangeloginPw}/>
      <button onClick={loginFunc}>login</button>
     </div>
     <div>
      <input type='text' value={inputId} onChange={onChangeId}/>
      <input type='password'value={inputPassword} onChange={onChangePassword}/>
      <button onClick={signUpFunc}>Sign in</button>
     </div></>
            ) : (<div>
              <div>환영합니다</div>
              <button onClick={logoutfunc}>logout</button>
              </div>
             ) 
          }
    </div>      
    
  )
}



export default App;

