import PropTypes from 'prop-types';
import { selectBox } from '../containers/BooksForm';

const CategoryFilter = ({ filter }) => (
  <select onChange={filter}>
    {selectBox}
  </select>
);

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;
