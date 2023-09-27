import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ text, handleButton, view }) => {
  const style = css[view];

  return (
    <button type="button" className={style} onClick={handleButton}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
};
