import PropTypes from 'prop-types';
import css from './Button.module.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, changePage, view }) => {
  const navigate = useNavigate();
  const style = view === 'back' ? css.back : css.loadMore;

  const goBack = () => {
    navigate('/');
  };

  const handleClick = () => {
    if (view === 'back') {
      goBack();
    } else {
      changePage();
    }
  };

  return (
    <button onClick={handleClick} className={style} type="button">
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  changePage: PropTypes.func,
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};
