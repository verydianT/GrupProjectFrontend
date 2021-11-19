import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CounterProvider } from "./context/wishlistContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CounterProvider>
      <App />
    </CounterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
