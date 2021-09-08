import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="panel-bg">
        <BooksList />
        <div className="Line" />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
