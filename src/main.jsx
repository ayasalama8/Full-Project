import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDom from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import CartProvider from './components/context/cartContext.jsx'
ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
