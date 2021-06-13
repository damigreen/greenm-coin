import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Notification = ({ variant, message }) => {
    if (!(variant && message)) {
      return null;
    }

  return (
    <div className='flex-col'>
      <Alert variant={variant}>{message}</Alert>
    </div>
  )
}

export default Notification;
