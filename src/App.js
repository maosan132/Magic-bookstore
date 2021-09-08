import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="panel-bg">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
