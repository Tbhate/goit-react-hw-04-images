import css from './searchBar.module.css';
import PropTypes from 'prop-types';
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const query = elements[1].value;
    if (query.trim() === '') return;
    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <header className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
SearchBar.propTypes = { onSubmit: PropTypes.func };
export default SearchBar;