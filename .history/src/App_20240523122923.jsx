

import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
// import circle from './images/mainbgi.png';
import mainPage from './../.history/src/pages/mainPage/mainPage_20240521145324';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;

