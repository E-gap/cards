import css from './ItemCard.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ id, back, isShowed, changeCard }) => {
  const [showValueBack, setShowValueBack] = useState(false);

  const showBack = () => {
    if (isShowed) {
      return;
    }
    changeCard(id);
    setTimeout(() => {
      setShowValueBack(true);
    }, 100);
  };

  const classes = isShowed ? `${css.item} ${css.rotatedItem}` : `${css.item}`;

  return (
    <li className={classes} onClick={showBack}>
      <p className={css.back}>{showValueBack && isShowed ? back : ''}</p>
    </li>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  back: PropTypes.number.isRequired,
  isShowed: PropTypes.bool.isRequired,
  changeCard: PropTypes.func.isRequired,
};
