import './index.css';

import React from 'react'
import ReactDOM from 'react-dom/client';
// import { Toaster } from 'react-hot-toast';
// import { Provider } from 'react-redux';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Toaster /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
