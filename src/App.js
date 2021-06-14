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
} from "react-router-dom";
import AccountCard from './components/account card';
import Footer from './components/footer/Footer';
import useField from './hook/';
import loginServices from './services/login';
import Notification from './components/notification/Notification';
import usersService from './services/users';
import transactionService from './services/transactions';
import { useHistory } from 'react-router-dom';
import Transactions from './components/transactions/';


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

    // let userTrans
    // if (users && user) {
    //   userTrans = users.find(u => u.name === user.name);
    // }
    // console.log(userTrans);
    // if (userTrans) {
    //   setUserTransaction(userTrans.transactions);
    // }
  }, [user]);

  
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
    
      console.log(loggedInUser.transactions)
      const UT = users.find(u => u.name === loggedInUser.name)
      window.localStorage.setItem('loginUser', JSON.stringify(loggedInUser));
      window.localStorage.setItem('UT', JSON.stringify(UT.transactions.reverse()));

      setMessage('You have successfully logged in');
      // history.push('/');
      setTimeout(() => {
        setMessage(null);
      }, 3000)
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogout = () => {
    setUser(null);
    setUserTransaction(null);
    window.localStorage.removeItem('loginUser');
    window.localStorage.removeItem('UT')
  }


  if (user === null) {
    // history.push('/login');
    
    return (
      <Router>
        <Switch>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            {/* <Redirect to='/login' /> */}
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
      <Switch>
        <div className="App">
          <Header user={user} handleLogout={handleLogout} />
          <Notification message={message} variant='success' />
          <Route exact path='/'>
            <AccountCard
              users={users}
              user={user}
              userTransaction={userTransaction}
            />

          </Route>
          <Route exact path='/transactions' >
            <Transactions
              userTransaction={userTransaction}
              user={user}
              users={users}
            />
          </Route>
        </div>
      </Switch>
        <Footer />
    </Router>
  );
}

export default App;
