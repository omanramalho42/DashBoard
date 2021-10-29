import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return(
    <Router>
        <Dashboard />
        <GlobalStyle />
    </Router>
  );
}

export default App;