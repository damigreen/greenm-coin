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
import useField from './hook/';
import loginServices from './services/login';


// import logo from './logo.svg';

function App() {
  const [user, setUser] = useState(null);
  const email = useField('email').form;
  const password = useField('password').form;

  // const [user, setUser] = useState('dami');
  // const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loginUser');
    if (loggedInUser) {
      const currentUser = JSON.parse(loggedInUser);
      setUser(currentUser);
    }

  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(`Loginin in ----`);
  
      const loginObj = {
        email: email.value,
        password: password.value,
      }
  
      const user = await loginServices.login(loginObj);
      setUser(user);
      console.log(user);
      window.localStorage.setItem('loginUser', JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('loginUser');
  }
  


  if (user === null) {
    
    return (
      <Router>
        <Switch>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Redirect to="/login" />
            <Login setUser={setUser} handleLogin={handleLogin} email={email} password={password} />
          </Route>
        </Switch>
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header user={user} handleLogout={handleLogout} />
        <AccountCard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
