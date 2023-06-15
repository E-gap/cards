import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import picture from '../../images/picture-for-item.png';
import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import user3 from '../../images/user3.jpg';
import user4 from '../../images/user4.jpg';
import user5 from '../../images/user5.jpg';
import user6 from '../../images/user6.jpg';

const users = [user1, user2, user3, user4, user5, user6];

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.container}>
        <div className={css.linkPicture}>
          <NavLink to="/tweets" className={css.moveToTweets}>
            Go to Tweets
          </NavLink>
          <img src={picture} alt="head" className={css.picture} />
        </div>
        <ul className={css.listUser}>
          {users.map((user, index) => (
            <li key={index}>
              <img src={user} alt="auto" className={css.photouser} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
