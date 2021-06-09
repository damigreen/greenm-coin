import React from 'react';
import './AccountCard.css';


const AccountCard = () => {


  return (
    <div className='flex-row card-wrap'>

      <div className="flex-col card-md">
        <h5 className="bal">Balance</h5>
        <h3 className='bal-val'>₦2000</h3>
        <div className='flex-row card-links'>
          <div className="link-history"></div>
          <div className="link-send"></div>
          <div className="link-fund"></div>
        </div>

      </div>
      
      <div className='card-send'>
        <h4 className='send-heading'>Send money</h4>
        <div style={{marginBottom: '2rem'}}>
          <p>Enter phone number of recipient</p>
          <div className='flex-row'>
            <div className='flex-col user-div f-xm'>
              <div className='user-img'></div>
            </div>
            <form className='flex-row f-xxlg card-form'>
              <input className='form-input' type="text" placeholder='07000000000' />
            </form>
          </div>
        </div>

        <div>
          <p>How much do you want to send</p>
          <div className='flex-row'>
            <div className='flex-col user-div f-xm'>
              <h3 style={{color: '#222525'}} className>NGN</h3>
            </div>
            <form className='flex-row f-xxlg card-form'>
              <input className='form-input' type="text" placeholder='3000' />
            </form>
          </div>
          <div className='flex-row price-row'>
            <p className='user-div price-sel flex-row'>500</p>
            <p className='user-div price-sel flex-row'>1000</p>
            <p className='user-div price-sel flex-row'>2000</p>
            <p className='user-div price-sel flex-row'>5000</p>
          </div>
        </div>        

      </div>

    </div>
  )
}

export default AccountCard;
