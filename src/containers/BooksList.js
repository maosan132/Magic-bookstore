import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as action from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import userIcon from '../images/user-icon.png';

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
    <div className="BooksList">
      <header className="flex">
        <div className="header-leftside flex">
          <h1>Bookstore CMS</h1>
          <span>BOOKS</span>
          <CategoryFilter filter={handleCategoryFilter} />
        </div>
        <a href="#user" className="user-circle">
          <img
            className="icon"
            src={userIcon}
            alt="user-icon"
          />
        </a>
      </header>
      <main>
        {
          selectedCat.map((b) => (
            <Book
              item={b}
              removeBook={handleRemoveBook}
              key={b.id}
            />
          ))
        }
      </main>
    </div>
  );
};

export default BookList;
