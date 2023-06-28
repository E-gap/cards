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

    case 'buttonShowAllScores':
      style = css.buttonShowAllScores;
      break;

    case 'buttonShowMyScores':
      style = css.buttonShowMyScores;
      break;

    case 'buttonQuestionSign':
      style = css.buttonQuestionSign;
      break;

    case 'sortByDate':
      style = css.sortByDate;
      break;

    case 'sortByScore':
      style = css.sortByScore;
      break;

    case 'back':
      style = css.back;
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
