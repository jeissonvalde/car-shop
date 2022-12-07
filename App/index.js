import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './pages/home';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('app-container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();