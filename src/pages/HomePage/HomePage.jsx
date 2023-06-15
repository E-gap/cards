import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.container}>
        <div className={css.linkPicture}>
          <NavLink to="/cards" className={css.moveToTweets}>
            Go to Cards
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
