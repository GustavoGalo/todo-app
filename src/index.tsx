import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyles } from './styles/globalStyles';
import { Theme } from './hooks/theme';
import { TodoProvider } from './hooks/todo';

ReactDOM.render(
  <Theme>
    <TodoProvider>
      <App />
    </TodoProvider>

    <GlobalStyles />
  </Theme>,
  document.getElementById('root'),
);
