import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => {
  const [book, setBook] = useState({ title: '', category: '' });

  let title = '';
  let category = '';
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setBook({ ...book, [name]: value });
    if (name === 'title') {
      title = value;
      setBook((state) => ({ ...state, title }));
    }
    if (name === 'category') {
      category = value;
      setBook((state) => ({ ...state, category }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: Math.random().toString(36).substring(7) }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4> Title:</h4>
      <input
        name="title"
        value="{title}"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <h4>Category:</h4>
      <select
        name="category"
        value="{category}"
        onChange={(e) => handleChange(e)}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
