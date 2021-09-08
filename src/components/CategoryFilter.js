import PropTypes from 'prop-types';

const categories = [
  'Select a category',
  'All',
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

const CategoryFilter = ({ filter }) => (
  <select onChange={filter}>
    {selectBox}
  </select>
);

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;
