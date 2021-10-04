import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/about';
import Services from './components/Services/Services';
import Apply from './components/Apply/Apply';
import Error from './components/Error/Error';


function App() {
  const style = { 
    color:'blueviolet',

  };
  return (
    <div className="App" style={style} >
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Router path="/apply">
            <Apply></Apply>
          </Router>
          <Route exact path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
