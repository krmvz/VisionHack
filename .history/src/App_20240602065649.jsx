
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
// import circle from './images/mainbgi.png';
// import mainPage from './../.history/src/pages/mainPage/mainPage_20240521145324';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/teams">
                            <Teams />
                        </Route>
                        <Route path="/market">
                            <Market />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;

