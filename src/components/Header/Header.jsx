import PropTypes from 'prop-types';
import css from './Header.module.css';
import Button from '../Button/Button';

const Header = ({ handleHeaderButton }) => {
  return (
    <header className={css.header}>
      <Button text="Sign In" handleButton={handleHeaderButton} view="signIn" />
      <Button text="Sign Up" handleButton={handleHeaderButton} view="signUp" />
    </header>
  );
};

export default Header;

Header.propTypes = {
  handleHeaderButton: PropTypes.func.isRequired,
};
