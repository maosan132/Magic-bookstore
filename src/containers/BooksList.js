import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <div>
      <h1>Books List</h1>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((b) => (
              <Book
                bookId={b.id}
                title={b.title}
                category={b.category}
                key={b.id}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
