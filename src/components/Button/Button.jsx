import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ text, handleButton, view }) => {
  let style;

  switch (view) {
    case 'buttonNewGame':
      style = css.buttonNewGame;
      break;

    case 'signIn':
      style = css.buttonSignIn;
      break;

    case 'signUp':
      style = css.buttonSignUp;
      break;

    case 'logOut':
      style = css.buttonLogOut;
      break;

    case 'buttonAllScores':
      style = css.buttonShowAllScores;
      break;

    case 'buttonMyScores':
      style = css.buttonShowMyScores;
      break;

    default:
      style = '';
  }

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
