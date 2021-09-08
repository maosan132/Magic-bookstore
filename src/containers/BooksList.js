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
      <span className="BOOKS Text-Style-7">
        BOOKS
      </span>
      <span className="CATEGORIES Text-Style-7">
        CATEGORIES
      </span>
      <div className="Oval">
        <div className="Mask" />
      </div>
      <CategoryFilter filter={handleCategoryFilter} />
      {
        selectedCat.map((b) => (
          <Book
            item={b}
            removeBook={handleRemoveBook}
            key={b.id}
          />
        ))
      }
    </div>
  );
};

export default BookList;
