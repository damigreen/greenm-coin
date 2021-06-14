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
import usersService from './services/users';
import transactionService from './services/transactions';


function App() {
  const [users,  setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [userTransaction, setUserTransaction] = useState([]);
  
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const email = useField('email').form;
  const password = useField('password').form;

  useEffect(() => {
    // Get all users
    usersService.getAll().then(result => {
      setUsers(result);
    });

    // Get all transactions
    transactionService.getAll().then(result => {
      setTransactions(result);
    });


    const userAccount = users.find(u => u.name === user.name);
    if (userAccount) {
      setUserTransaction(userAccount.transactions.reverse());
    }
  }, []);

  
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loginUser');
    if (loggedInUser) {
      const currentUser = JSON.parse(loggedInUser);
      setUser(currentUser);
      transactionService.setToken(currentUser.token);
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
  
      // User login
      const loggedInUser = await loginServices.login(loginObj);
      setUser(loggedInUser);

      // Set token for logged in user
      transactionService.setToken(loggedInUser.token);
      transactionService.token = transactionService.setToken(loggedInUser.token);

      // Store user in local storage
      window.localStorage.setItem('loginUser', JSON.stringify(loggedInUser));

      setMessage('You have successfully logged in');
      setTimeout(() => {
        setMessage(null);
      }, 3000)
    } catch (e) {
      console.log(e);
    }
  }

  // console.log(user);
  console.log(userTransaction);


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
        <AccountCard
          users={users}
          user={user}
          userTransaction={userTransaction}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
