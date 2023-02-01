import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/Routes';
import Navigation from './components/navigation/Navigation';

import './assets/scss/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
