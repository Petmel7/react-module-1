import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//! Старий код рякт
const myBtn = React.createElement('button', { type: 'button' }, 'Load more')
// console.log(myBtn)

//! Новий код рякт
// Підстановка значень
let value = 'Load more'
const newBtn = <button type="button">{value}</button>
// console.log(newBtn)

const teamItem = (
  <>
    <img src="" alt=""></img>
    <h3>heading</h3>
  </>
)
// console.log(teamItem)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);