
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
// import circle from './images/mainbgi.png';
// import mainPage from './../.history/src/pages/mainPage/mainPage_20240521145324';
import MainPage from './pages/mainPage/mainPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path="/profile" element={<LoginPage />} />
        {/* <Route path="/teams" element={<Teams />} />
        <Route path="/market" element={<Market />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<MainPage />} />
    </Routes>
      {/* <MainPage/> */}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

