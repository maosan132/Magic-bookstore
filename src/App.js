import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App panel-bg">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
