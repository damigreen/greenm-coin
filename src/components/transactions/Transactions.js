import React from 'react';
import Table from 'react-bootstrap/Table';

const Transactions = ({  user, users }) => {
  const userTransaction = users.find(u => user.name === u.name);

  if (!userTransaction) {
    return null;
  }

  let transactionHistory;
  if (userTransaction) {
    transactionHistory = userTransaction.transactions;
  }

  return (
    <div>
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
            transactionHistory.map(transaction => {
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
