import loader from '../../images/Spinner-0.9s-200px.gif';
import PropTypes from 'prop-types';
import css from './Preloader.module.css';

export const Preloader = ({ sign }) => {
  const style = sign?.includes('Scores')
    ? `${css.scoresPreloader}`
    : `${css.cardPagePreloader}`;

  return (
    <div>
      <div className={style}>
        <img src={loader} alt="qwerty" />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  sign: PropTypes.string,
};
