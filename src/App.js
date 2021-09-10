import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import './styles/App.css';

const App = () => (
  <div className="App">
    <BooksList />
    <div className="Line" />
    <BooksForm />
  </div>
);

export default App;
