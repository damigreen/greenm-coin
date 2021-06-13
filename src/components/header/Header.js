import React from 'react';
import './Header.css';

function Header({ user, handleLogout }) {
  const welcomeMessage = () => {
    return (
      <div>
        <h3 className='user-name'></h3>
        <h3 className='user-mail'></h3>
      </div>
    )
  }

  return (
    <div className="header-wrap flex-col">
      <div className='user-avatar'></div>
      <h4 className='user-name'>{user.name} is <span style={{color: '#27B8AC', fontStyle: 'italics' }}>loggedin</span></h4>
      <h6 className="user-mail">{`${user.email}`}</h6>
      <a className="logout flex-row" onClick={handleLogout}>
        <button className="btn-logout">Logout</button>
      </a>
    </div>
  )
}

export default Header;
