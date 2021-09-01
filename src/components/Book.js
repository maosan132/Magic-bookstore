import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookId, title, category } = props;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="button"
          onClick={() => props.remove(book)}
        >
          Remove book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
