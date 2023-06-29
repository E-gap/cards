import loader from '../../images/Spinner-0.9s-200px.gif';
import css from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div>
      <div className={css.preloader}>
        <img src={loader} alt="qwerty" width="100" />
      </div>
    </div>
  );
};
