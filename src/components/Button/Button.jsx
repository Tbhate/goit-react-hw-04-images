import css from './button.module.css';
import PropTypes from 'prop-types';
const Button = ({ onClick }) => {
  const loadMoreBtnHandler = e => {
    e.preventDefault();
    onClick();
  };

  return (
    <button type="button" className={css.Button} onClick={loadMoreBtnHandler}>
      Load More
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;