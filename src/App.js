import './App.css';
import React, { useState } from 'react';
import Home from './components/home/';
import Login from './components/login';
// import logo from './logo.svg';

function App() {
  const [user, setUser] = useState(null);
  // const [loggedIn, setIsLoggedIn] = useState(false);

  if (user === null) {
    return <Login />
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
