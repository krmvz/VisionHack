
import './App.scss';
import Header from './components/Header/header';
import circle from './images/';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={circle} alt="circle" style={{ width: '628px', height: 'auto' }}/>
      <footer>

      </footer>
    </div>
  );
}

export default App;

