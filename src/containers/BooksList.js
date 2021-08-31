import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
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
                key={b.id}
                bookId={b.id}
                title={b.title}
                category={b.category}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
