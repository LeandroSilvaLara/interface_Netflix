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

          </form.Base>
          </Form>
  </HeaderContainer>
  <FooterContainer />
  </>
  );
}