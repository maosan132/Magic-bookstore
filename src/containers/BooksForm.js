import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions';

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const selectBox = categories.map((c) => (
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
    <form onSubmit={handleSubmit}>
      <h4> Title:</h4>
      <input
        name="title"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <h4>Category:</h4>
      <select
        name="category"
        value="{category}"
        onChange={(e) => handleChange(e)}
      >
        {selectBox}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
