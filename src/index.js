import React from 'react';
import App from './app';
import 'normalize.css';
import { render } from 'react-dom';
import { GlobalStyles } from './global-styles';

render(<>
  <GlobalStyles />
  <App />
  </>,
  document.getElementById('root'));  
