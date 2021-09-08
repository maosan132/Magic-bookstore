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
    <span className="Comments">
      Comments
    </span>
    <span>
      <button
        type="button"
        onClick={() => removeBook(item)}
      >
        Remove
      </button>
    </span>
    <span className="Edit">
      Edit
    </span>
    <div className="Rectangle-3">
      <div className="Oval-2" />
    </div>
    <span className="-Percent-Complete">
      64%
    </span>
    <span className="Completed Text-Style-9">
      Completed
    </span>

    <div className="Line-2" />

    <span className="Current-Chapter">
      Current Chapter
    </span>
    <span className="Current-Lesson">
      Chapter 17
    </span>
    <div className="Rectangle-2">
      <span className="Update-progress">
        UPDATE PROGRESS
      </span>
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
