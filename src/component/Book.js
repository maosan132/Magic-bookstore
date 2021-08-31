import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, title, category } = props;
  return (
    <tr>
      <td>{book}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
