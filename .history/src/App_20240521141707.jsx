
import './App.scss';
import Header from './components/Header/header';
import circle from './images/circle on main page.png';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={circle} alt="circle" style={{ width: '100px', height: '100px' }}/>
      <footer>

      </footer>
    </div>
  );
}

export default App;
