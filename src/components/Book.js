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
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  item: {
    id: Math.random().toString(36).substring(7),
    title: 'not defined',
    category: 'not defined',
  },
};

export default Book;
