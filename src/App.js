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
import Notification from './components/notification/Notification';



function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const email = useField('email').form;
  const password = useField('password').form;

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
      setMessage('You have successfully logged in');
      setTimeout(() => {
        setMessage(null);
      }, 3000)
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
            <Login
              setUser={setUser}
              handleLogin={handleLogin}
              email={email}
              password={password}
            />
          </Route>
        </Switch>
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header user={user} handleLogout={handleLogout} />
        <Notification message={message} variant='success' />
        <AccountCard />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
