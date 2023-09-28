import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { AnimationHome } from '../../components/AnimationHome/AnimationHome';

const HomePage = () => {
  return (
    <section className={css.homePage}>
      <div className={css.container}>
        <AnimationHome />
        <NavLink to="/cards" className={css.moveToCards}>
          Go to Cards
        </NavLink>
      </div>
    </section>
  );
};

export default HomePage;
