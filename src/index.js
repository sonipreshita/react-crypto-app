import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Coin.css';
import RoutesList from './Routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
       <RoutesList />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


