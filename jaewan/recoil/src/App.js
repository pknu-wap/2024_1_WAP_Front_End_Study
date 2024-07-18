import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main.js";
import NextPage from './pages/NextPage.js';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/nextPage" element={<NextPage/>} />

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
