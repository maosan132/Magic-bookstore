import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';

const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    id: Math.floor(Math.random() * 1000),
    category: 'Design',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    id: Math.floor(Math.random() * 1000),
    category: 'Psychology',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    id: Math.floor(Math.random() * 1000),
    category: 'Software Practices',
  },
];

const initialState = { books };
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
