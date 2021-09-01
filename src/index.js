import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';

const randomIdizer = () => Math.random().toString(36).substring(7);

const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    id: randomIdizer(),
    category: 'Design',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    id: randomIdizer(),
    category: 'Psychology',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    id: randomIdizer(),
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
