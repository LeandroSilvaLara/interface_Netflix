import React  from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {
  const user = null;

  return (
  <Router> 
  <Switch>
     <Route exact path="/signin">
      <IsUserRedirect
       user={user} 
       loggerdInPath={ROUTES.BROWSE} 
       path={ROUTES.SIGN_IN}
       >
       
         <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
      <Browse />
      </ProtectedRoute>
      <IsUserRedirect
      user={user}
      loggerdInPath={ROUTES.BROWSE}
      path={ROUTES.HOME}
      exact
      >
      <Home />
      </IsUserRedirect>
    </Route>
    </Switch>
  </Router>
  );
}

