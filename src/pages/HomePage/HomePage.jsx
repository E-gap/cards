import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.container}>
        <ItemCard className={css.card} />
        <NavLink to="/cards" className={css.moveToCards}>
          Go to Cards
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
