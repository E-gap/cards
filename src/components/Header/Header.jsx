import PropTypes from 'prop-types';
import css from './Header.module.css';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/selectors';

const Header = ({ handleHeaderButton }) => {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);

  return (
    <header className={css.header}>
      {!isLogin ? (
        <div>
          <Button
            text="Sign In"
            handleButton={handleHeaderButton}
            view="signIn"
          />
          <Button
            text="Sign Up"
            handleButton={handleHeaderButton}
            view="signUp"
          />
        </div>
      ) : (
        <div>
          <Button
            text="Log out"
            handleButton={handleHeaderButton}
            view="logOut"
          />
        </div>
      )}
    </header>
  );
};

export default Header;

Header.propTypes = {
  handleHeaderButton: PropTypes.func.isRequired,
};
