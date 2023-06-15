import css from './ItemCard.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ id, back, isShowed, changeCard }) => {
  const [isPushed, setIsPushed] = useState(() => {
    return isShowed;
  });
  const [showValueBack, setShowValueBack] = useState(false);

  const showBack = () => {
    if (isPushed) {
      return;
    } else {
      setIsPushed(!isPushed);
      changeCard(id);
      setTimeout(() => {
        setShowValueBack(true);
      }, 1000);
    }
  };

  const classes = isPushed ? `${css.item} ${css.rotatedItem}` : `${css.item}`;

  return (
    <li className={classes} onClick={showBack}>
      <p>{showValueBack ? back : ''}</p>
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
