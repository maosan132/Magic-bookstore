import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ item, removeBook }) => (
  <div className="Book flex">
    <div className="book-main">
      <span className="book-category">{item.category}</span>
      <h2>{item.title}</h2>
      <span className="book-author">Author</span>
      <ul className="books-actions flex">
        <li>Comments</li>
        <li>
          <button
            type="button"
            onClick={() => removeBook(item)}
          >
            Remove
          </button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
    <div className="book-progress flex">
      <div className="book-progress-chart flex">
        <div className="progress-circle p64">
          <div className="left-half-clipper">
            <div className="first50-bar" />
            <div className="value-bar" />
          </div>
        </div>
        <div>
          <span className="percentage">64%</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="vertical-line" />
      <div className="book-progress-chapter">
        <span className="title">CURRENT CHAPTER</span>
        <span className="chapter-num">Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
