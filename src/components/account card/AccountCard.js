import React from 'react';
import './AccountCard.css';


const transaction = [
  {
    time: '02 June, 2021 - 04:20PM',
    type: 'Account Debit',
    account: '+23409017755801',
    price: 2000,
    id: 'TRA-87778-7622'
  },
  {
    time: '03 June, 2021 - 09:20PM',
    type: 'Account Credit',
    account: '+23409017755801',
    price: 1000,
    id: 'TRA-87738-7622'
  },
  {
    time: '02 June, 2021 - 04:20PM',
    type: 'Account Credit',
    account: '+23409017755801',
    price: 5000,
    id: 'TRA-83838-7622'
  }
]

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
      
      <form className='card-send'>
        <h4 className='send-heading'>Send money</h4>
        <div style={{marginBottom: '2rem'}}>
          <p className='para-style'>Enter phone number of recipient</p>
          <div className='flex-row'>
            <div className='flex-col user-div f-xm'>
              <div className='user-img'></div>
            </div>
            <div className='flex-row f-xxlg card-form'>
              <input className='form-input' type="text" placeholder='07000000000' />
            </div>
          </div>
        </div>

        <div>
          <p className='para-style'>How much do you want to send</p>
          <div className='flex-row'>
            <div className='flex-col user-div f-xm'>
              <h5 style={{color: '#222525'}} className>NGN</h5>
            </div>
            <div className='flex-row f-xxlg card-form'>
              <input className='form-input' type="text" placeholder='3000' />
            </div>
          </div>
          <div className='flex-row price-row'>
            <p className='user-div price-sel flex-row'>500</p>
            <p className='user-div price-sel flex-row'>1000</p>
            <p className='user-div price-sel flex-row'>2000</p>
            <p className='user-div price-sel flex-row'>5000</p>
          </div>
        </div>

        <button style={{color: '#fffffe'}} className='btn btn-submit' type='submit'>Send</button>
      </form>


      <form className='card-style card-send'>
        <h4 className='send-heading'>Fund wallet</h4>
        <div>
          <p className='para-style'>How much do you want to fund</p>
          <div className='flex-row'>
            <div className='flex-col user-div f-xm'>
              <h5 style={{color: '#222525'}} className>NGN</h5>
            </div>
            <div className='flex-row f-xxlg card-form'>
              <input className='form-input' type="text" placeholder='5000' />
            </div>
          </div>
          <div className='flex-row price-row'>
            <p className='user-div price-sel flex-row'>500</p>
            <p className='user-div price-sel flex-row'>1000</p>
            <p className='user-div price-sel flex-row'>2000</p>
            <p className='user-div price-sel flex-row'>5000</p>
          </div>
        </div>

        <button style={{color: '#fffffe'}} className='btn btn-submit' type='submit'>Fund</button>
      </form>

      <div style={{margin: '0 auto', width: '80%'}}>
        <h4 className="send-heading">Transaction History</h4>

        {
          transaction.map(tran => (
            <div className='trans-wrap card-style'>
              <div className='trans-info flex-col'>
                <p className='trans-style trans-time'>{tran.time}</p>
                <p className='trans-style trans-type'>{tran.type}</p>
                <p className='trans-style trans-account'>{tran.account}</p>
                <p className='trans-style trans-id'>{tran.id}</p>
              </div>

              <div>
                <p className='trans-style trans-price'>{tran.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AccountCard;
