import React from 'react';
import './Header.css';

function Header() {

  return (
    <div className="header-wrap flex-col">
      <div className='user-avatar'></div>
      <h3 className='user-name'>Damilola Faseun</h3>
      <h6 className="user-mail">damilola.faseun@gmail.com</h6>
    </div>
  )
}

export default Header;
