import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Signup = () => {

  return (
        <div className="login-wrap flex-col bg-signup">
          <div className="login-row flex-col">
            <div className='login-intro'>
              <h1>Join Us</h1>
              <p>Create an account today to start sending and receiving money</p>
            </div>

            <Form className='form-wrap'>
              <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Label>FullName</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
              </Form.Group>

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

              <Form.Group className="mb-3" controlId="formBasicComfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Comfirm Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button style={{width: '100%'}} variant="primary" type="submit">
                Submit
              </Button>
            </Form>


            <div style={{marginTop: "3rem"}}>
              <Link to="/login" style={{color: '#c4c4c4',fontSize: "1.02732rem"}}>Already have an account? <span style={{color: '#17e2be'}}>Login!</span></Link>
            </div>
          </div>
        </div>
  ) 
}

export default Signup;
