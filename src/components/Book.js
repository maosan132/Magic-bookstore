import PropTypes from 'prop-types';

const Book = ({ item, removeBook }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.category}</td>
    <td>
      <button
        type="button"
        onClick={() => removeBook(item)}
      >
        Remove book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  item: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
