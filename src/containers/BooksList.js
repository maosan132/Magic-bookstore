import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as action from '../actions';

const BookList = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(action.removeBook(book));
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
                item={b}
                removeBook={handleRemoveBook}
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
