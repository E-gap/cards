import PropTypes from 'prop-types';
import css from './ErrorComponent.module.css';

const ErrorComponent = ({ text }) => {
  return (
    <div className={css.error}>
      <p className={css.errorMessage}>{text}</p>
    </div>
  );
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
