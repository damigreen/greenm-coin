import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Transactions = ({  user, users }) => {
  const [transactionsHistory, setTransactionsHistory] = useState([]);
  const userTransaction = users.find(u => user.name === u.name);

  useEffect(() => {
    if (userTransaction) {
      setTransactionsHistory(userTransaction.transactions);
    }
  }, [userTransaction, user, transactionsHistory]);


  return (
    <div> 
      <Link className="flex-col center-align" to='/'>
        <button className='align-left'>Go Back</button>
      </Link>
      <h4>Transactions History</h4>
      {
        <Table  className='card-mr' style={{justifySelf: 'center', margin: '0 auto'}} striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction type</th>
              <th>Amount</th>
              <th>Account</th>
            </tr>
          </thead>
          {
            transactionsHistory.map(transaction => {
              return (
                <tbody key={transaction.id}>
                  <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.id}</td>
                  </tr>
                </tbody>
              )
            })
          }
        </Table>
      }
    </div>
  )
}

export default Transactions;
