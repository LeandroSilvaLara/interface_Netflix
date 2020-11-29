import React from 'react';
import App from './app';
import 'normalize.css';
import { render } from 'react-dom';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext} from './context/firebase';

render(<>
  <FirebaseContext.Provider value={{ firebase }}>
  <GlobalStyles />
  <App />
  </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
  
  );  
