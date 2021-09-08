import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ item, removeBook }) => (
  <div className="LessonPanel">
    <span className="category">
      {item.category}
    </span>
    <span className="title">
      {item.title}
    </span>
    <span className="author">
      {item.author}
    </span>
    <span>
      <button
        type="button"
        onClick={() => removeBook(item)}
      >
        Remove
      </button>
    </span>

  </div>
);

Book.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  item: {
    id: Math.random().toString(36).substring(7),
    title: 'not defined',
    category: 'not defined',
    author: 'not defined',
  },
};

export default Book;
