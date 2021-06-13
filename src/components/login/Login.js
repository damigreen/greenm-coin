import './Login.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Login = ({ setUser, handleLogin, email, password }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  return (
    <div className="login-wrap flex-col bg-login">
      <div className="login-row flex-col">
        <div className='login-intro'>
          <h1>Let's Get Started</h1>
          <p>Login to your account to start sending and receiving money at your convenience</p>
        </div>

        <Form onSubmit={handleLogin} className='form-wrap'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control { ...email } placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control { ...password } placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button style={{width: '100%'}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>


        <div style={{marginTop: "3rem"}}>
          <Link to="/signup" style={{color: '#c4c4c4',fontSize: "1.02732rem"}}>Dont Have an account? <span style={{color: '#17e2be'}}>Signup!</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
