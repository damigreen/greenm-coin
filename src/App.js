import './App.css';
import React, { useState } from 'react';
import Home from './components/home/';
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


// import logo from './logo.svg';

function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState('dami');
  // const [loggedIn, setIsLoggedIn] = useState(false);

  if (user === null) {
    
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login
              show={page === 'login'}
            />
          </Route>

          <Route path='/signup'>
            <Signup
              show={page === 'signup'}
            />
          </Route>

        </Switch>
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <Home
          show={page === 'home'}
        />
      </div>
    </Router>
  );
}

export default App;
