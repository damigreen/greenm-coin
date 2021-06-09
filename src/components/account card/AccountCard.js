import React from 'react';
import './AccountCard.css';



const AccountCard = () => {

  return (
    <div className="flex-col card-md">
      <h5 className="bal">Balance</h5>
      <h3 className='bal-val'>₦2000</h3>
    </div>
  )
}

export default AccountCard;
