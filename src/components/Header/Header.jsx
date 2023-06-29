import PropTypes from 'prop-types';
import css from './Header.module.css';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectUserName } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleHeaderButton }) => {
  const isLogin = useSelector(selectIsLogin);
  const userName = useSelector(selectUserName);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate(-1);
  };

  return (
    <>
      <header className={css.header}>
        <div>
          <Button text="Back" handleButton={handleButton} view="back" />
        </div>
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
    </>
  );
};

export default Header;

Header.propTypes = {
  handleHeaderButton: PropTypes.func.isRequired,
};
