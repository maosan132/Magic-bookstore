import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';
import '../styles/BookForm.css';

const categories = [
  'Category',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const selectBox = categories.map((c) => (
  <option value={c} key={c}>
    {c}
  </option>
));

const BooksForm = () => {
  const [book, setBook] = useState({ title: '', category: '' });

  let title = '';
  let category = '';
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'title') {
      title = value;
      setBook({ ...book, title });
    }
    if (name === 'category') {
      category = value;
      setBook({ ...book, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...book,
      id: Math.random().toString(36).substring(7),
    }));
  };

  return (
    <div className="form-container">
      <h2 className="title">ADD NEW BOOK</h2>
      <form className="BooksForm flex" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={handleChange}
        />
        <select
          className="pointer"
          name="category"
          onChange={handleChange}
        >
          {selectBox}
        </select>
        <button type="submit" className="pointer">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BooksForm;
