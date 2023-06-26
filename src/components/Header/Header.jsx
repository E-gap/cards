import PropTypes from 'prop-types';
import css from './Header.module.css';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectUserName } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/auth/authOperations';
import { useEffect } from 'react';

const Header = ({ handleHeaderButton }) => {
  const isLogin = useSelector(selectIsLogin);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

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
          <p className={css.userName}>user: {userName}</p>
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
