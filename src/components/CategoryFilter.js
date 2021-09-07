import { categories } from '../containers/BooksForm';

const CategoryFilter = ({ categories }) => 

  return (
    <div className="category-filter">
      <h3>Filter by category</h3>
      <div className="category-filter__list">
        {categories.map((category) => (
          <div key={category} className="category-filter__item">
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={selected.includes(category)}
              onChange={handleChange}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  CategoryFilter: PropTypes.func.isRequired,
};
