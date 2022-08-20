import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import 'typeface-inter';

import App from './App';
import './env/index.css';
import './env/colors.css';
import './env/font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  process.env.REACT_APP__USE_HASH_ROUTER === 'true' ? (
    <HashRouter>
      <App />
    </HashRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
