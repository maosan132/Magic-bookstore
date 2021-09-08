import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as action from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/BookList.css';

const BookList = () => {
  const books = useSelector((store) => store.bookStoreReducer);
  const filter = useSelector((store) => store.filterReducer);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(action.removeBook(book));
  };

  const handleCategoryFilter = (e) => {
    dispatch(action.changeFilter(e.target.value));
  };

  const selectedCat = (filter !== 'All')
    ? books.filter((i) => i.category === filter)
    : books;

  return (
    <div>
      <span className="Bookstore-CMS Text-Style-5">
        Bookstore CMS
      </span>
      <h1>Books List</h1>
      <CategoryFilter filter={handleCategoryFilter} />
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
            selectedCat.map((b) => (
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
