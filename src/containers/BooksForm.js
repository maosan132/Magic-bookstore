import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <h4> Title:</h4>
    <input
      type="text"
      name="title"
      value="{title}"
    />
    <h4>Category:</h4>
    <select
      name="category"
      value=""
    >
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
