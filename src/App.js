import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Login from './components/login';
import Signup from './components/signup';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AccountCard from './components/account card';
import Footer from './components/footer/Footer';


// import logo from './logo.svg';

function App() {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState('dami');
  // const [loggedIn, setIsLoggedIn] = useState(false);

  if (user === null) {
    
    return (
      <Router>
        <Switch>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Redirect to="/login" />
            <Login />
          </Route>
        </Switch>
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <AccountCard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
