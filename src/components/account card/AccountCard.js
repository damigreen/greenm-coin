import React, { useState, useEffect } from 'react';
import transactionService from '../../services/transactions';
import useField from '../../hook/index';
import _ from 'lodash';
import './AccountCard.css';


const AccountCard = ({ user, users }) => {
  const [userTransactions, setUserTransactions] = useState([]);
  const amountDebit = useField('number');
  const amountCredit = useField('number');
  const accountToCredit = useField('text');

  // Get user account
  const userAccount = users.find(u => u.name === user.name);
  console.log(userAccount)
  useEffect(() => {
    if (userAccount) {
      setUserTransactions(userAccount.transactions);

    }
  }, [userAccount]);
  
  
  if (userAccount === undefined) {
    return null;
  }


  const handleCredit = async (e) => {
    e.preventDefault();

    const creditObj = {
      amount: parseInt(amountCredit.form.value),
    }

    // Handle credit object
    const newCreditTransaction = await transactionService.credit(creditObj);
    setUserTransactions(userTransactions.concat(newCreditTransaction));
    amountCredit.reset();
  }

  // const handleDebit = async (e) => {
  //   e.preventDefault();

  //   const debitObj = {
  //     amount: parseInt(amountDebit.form.value),
  //     accountToCredit: accountToCredit.form.value
  //   }

  //   const newDebitTransaction = await transaction.debit(debitObj);
  // }
  

  return (
    <div className='flex-row card-wrap'>

      <div className="flex-col card-mr">
        <div className="flex-col card-md">
          <h4 className="bal card-md">Balance</h4>
          <h3 className='bal-val'>₦{userAccount.balance}</h3>
          <h3 className='bal-val'>₦100000</h3>
          <div className='flex-row card-links'>
            <div className="link-history"></div>
            <div className="link-send"></div>
            <div className="link-fund"></div>
          </div>

        </div>
        
        <form onSubmit className='card-md'>
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
                <input className='form-input' { ...amountDebit.form } placeholder='3000' />
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


        <form onSubmit={handleCredit} className='card-md'>
          <h4 className='send-heading'>Fund wallet</h4>
          <div>
            <p className='para-style'>How much do you want to fund</p>
            <div className='flex-row'>
              <div className='flex-col user-div f-xm'>
                <h5 style={{color: '#222525'}} className>NGN</h5>
              </div>
              <div className='flex-row f-xxlg card-form'>
                <input className='form-input' {...amountCredit.form } placeholder='5000' />
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

      </div>

      <div className='flex-col card-ms'>
        <div className='trans-wrap'>
          <h4 className="send-heading card-md">Transaction History</h4>
          {
              userTransactions.map(tran => {
            // transaction.map(tran => {
              // if (tran.type === 'Account Debit') {
              //   // console.log(tran.type);

              //   const debitElem = document.getElementsByClassName('.trans-style');
              //   // const debitElem = document.getElementById('id');
              //   console.log(debitElem);
              //   // debitElem.classList.add('debit')
              //   debitElem.className += 'debit';
              // }

              return (
                <div key={tran.id} className='card-md flex-row trans-card'>
                  <div className='trans-info flex-col'>
                    <p className='trans-style trans-time'>{tran.date}</p>
                    <p id='id' className='trans-style trans-type'>{tran.transactionType}</p>
                    <p className='trans-style trans-account'>{tran.transactionAccount}</p>
                    <p className='trans-style trans-id'>ID: {tran.id}</p>
                  </div>

                  <div>
                    <p className='trans-style trans-price'>₦{tran.amount}</p>
                  </div>
                </div>
              )
            }).reverse().slice(0, 5)
          }

          <button style={{color: '#f4f4f4'}} className='btn'>Show More</button>
        </div>
      </div>
    </div>
  )
}

export default AccountCard;
