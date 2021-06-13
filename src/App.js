import './App.css';
import React, { useState, useEffect } from 'react';
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
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState('dami');
  // const [loggedIn, setIsLoggedIn] = useState(false);

  console.log(user);
  useEffect(() => {

  }, [])

  if (user === null) {
    
    return (
      <Router>
        <Switch>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Redirect to="/login" />
            <Login setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <AccountCard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
