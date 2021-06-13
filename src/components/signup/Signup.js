import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";
import useField from '../../hook/';
import signupService from '../../services/signup';
import { useHistory } from 'react-router-dom';

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
  const fullName = useField('text');
  const email = useField('email');
  const number = useField('number');
  const password = useField('password');
  const confirmPassword = useField('password');
  const history = useHistory();

  const handleSignup = async(e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Wrong password');
    }

    try {
      console.log('signinng up ---');
      const userObj = {
        name: fullName.form.value,
        number: number.form.value,
        email: email.form.value,
        password: password.form.value,
      }

      const newUser = await signupService.signup(userObj);
      history.push('/login')

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
            <Form.Control { ...fullName.form } placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control { ...email.form } placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account Number</Form.Label>
            <Form.Control { ...number.form } placeholder="Enter account" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control { ...password.form } placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicComfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control { ...confirmPassword.form } placeholder="Comfirm Password" />
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
