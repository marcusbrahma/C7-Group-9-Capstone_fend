import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Store } from './components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />}></Route>
      <Route path='/Store' element={<Store/>} exact></Route>
    </Routes>
  </BrowserRouter>
);
