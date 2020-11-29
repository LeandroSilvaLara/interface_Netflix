import React, {useState} from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPasswrod] = useState();
  const [error, setError] = useState(' ');


  // check form input elements are valid
  // email & password 

  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (event) => {
    event.preventDefault();

    // firebase work here!
  }

  return <>
  <HeaderContainer>
    <Form>
        <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)} 
              /> 
              <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPasswrod(target.value)} 
              /> 

              <Form.Submit disabled={isInvalid} type="submit">
                Sign In
              </Form.Submit>

          </form.Base>
          </Form.Submit>
  </HeaderContainer>
  <FooterContainer />
  </>
  );
}