import React from 'react';
import 'tailwindcss/tailwind.css';
import './css/index.css';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
const rootInstance = ReactDOM.createRoot(root);

rootInstance.render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ StrictMode>
);