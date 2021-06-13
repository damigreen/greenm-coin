import React from 'react';
import './Header.css';
import logoutIcon from '../../assets/images/box-arrow-left.svg';

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
        <img style={{marginBottom: '0.561rem', marginRight: '0.431rem', width: 25, height: 25}} alt='logout icon' src={logoutIcon} />
        <h5 style={{color: '#f45d48'}}>Logout</h5>
      </a>
    </div>
  )
}

export default Header;
