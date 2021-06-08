import './Login.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="login-wrap flex-col bg-login">
      <div className="login-row flex-col">
        <div className='login-intro'>
          <h1>Let's Get Started</h1>
          <p>Login to your account to start sending and receiving money at your convenience</p>
        </div>

        <Form className='form-wrap'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


        <div>
          <p style={{color: 'blue'}}>Create new account!</p>
        </div>
      </div>
    </div>
  )
}

export default Login;
