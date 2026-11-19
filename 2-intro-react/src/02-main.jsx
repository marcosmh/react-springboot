import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const h1 = React.createElement('div', null, 
  React.createElement('ul', null, 
    React.createElement('li',null,'item 1')));

const h11 = <div><ul><li>Hola Mundo X</li></ul></div>

const h2 = document.createElement('h2');
h2.innerHTML = 'Que la fuerza te acompañe';

createRoot(document.getElementById('root')).render(
  h1,
  h2
);
