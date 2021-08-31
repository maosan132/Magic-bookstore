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
    { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
    <label> Title:</label>
    <input
      type="text"
      name="title"
      value="{title}"
    />
    { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
    <label>Category:</label>
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
