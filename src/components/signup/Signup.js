import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";
import useField from '../../hook/';
import signupService from '../../services/signup';
import { useHistory } from 'react-router-dom';
import Notification from '../notification/Notification';
// function ValidateEmail(mail) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

const Signup = () => {
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const fullName = useField('text');
  const email = useField('email');
  const number = useField('number');
  const password = useField('password');
  const confirmPassword = useField('password');
  const history = useHistory();


  const handleSignup = async(e) => {
    e.preventDefault();
    const passwordConfirmed = password.form.value === confirmPassword.form.value;

    
    try {
      if (passwordConfirmed) {
        const userObj = {
          name: fullName.form.value,
          number: number.form.value,
          email: email.form.value,
          password: password.form.value,
        }
  
        await signupService.signup(userObj);
        setMessageSuccess('You have successfully signed up to the app');
        setTimeout(() => {
          setMessageSuccess('');
          history.push('/login');
        }, 3000);
      } else {
        console.log('Wrong password');
        setMessageError('Password does not match. Retry.')
        setTimeout(() => {
          setMessageError('');
        }, 4000);
      }

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="login-wrap flex-col bg-signup">
      <div className="login-row flex-col">
        <div className='login-intro'>
          <h1>Join Us</h1>
          <p>Create an account today to start sending and receiving money at your convenience</p>
        </div>

        <Form onSubmit={handleSignup} className='form-wrap'>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>FullName</Form.Label>
            <Form.Control { ...fullName.form } placeholder="Enter Full Name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control { ...email.form } placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account Number</Form.Label>
            <Form.Control { ...number.form } placeholder="Enter account" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control { ...password.form } placeholder="Password" required />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicComfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control { ...confirmPassword.form } placeholder="Comfirm Password" required />
          </Form.Group>
          <Notification message={messageError} variant='danger' />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button style={{width: '100%'}} variant="primary" type="submit">
            Submit
          </Button>
          <Notification message={messageSuccess} variant='success' />
        </Form>


        <div style={{marginTop: "3rem"}}>
          <Link to="/login" style={{color: '#c4c4c4',fontSize: "1.02732rem"}}>Already have an account? <span style={{color: '#17e2be'}}>Login!</span></Link>
        </div>
      </div>
    </div>
  ) 
}

export default Signup;
