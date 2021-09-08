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
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
