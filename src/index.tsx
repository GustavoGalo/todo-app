import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyles } from './styles/globalStyles';
import { Theme } from './hooks/theme';

ReactDOM.render(
  <Theme>
    <App />
    <GlobalStyles />
  </Theme>,
  document.getElementById('root'),
);
