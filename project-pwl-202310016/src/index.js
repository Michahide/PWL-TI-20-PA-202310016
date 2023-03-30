import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import Formulir from './components/Formulir'
import reportWebVitals from './reportWebVitals';
import Latihan_5_1 from './components/latihan-5-1/Latihan_5_1';
import Dashboard from './components';
import MultiFormulir from './components/latihan-5-1/MultiFormulir';
import MultiFormulir_old from './components/latihan-5-1/MultiFormulir_old';
import AppRoute from './components/latihan-3-1/apps/AppRoute';
import { BrowserRouter } from 'react-router-dom';

const { PUBLIC_URL } = process.env;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
