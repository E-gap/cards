import css from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
  const handleHeaderButton = e => {
    console.log(e.target);
  };
  return (
    <header className={css.header}>
      <Button text="Sign In" handleButton={handleHeaderButton} view="signIn" />
      <Button text="Sign Up" handleButton={handleHeaderButton} view="signUp" />
    </header>
  );
};

export default Header;
