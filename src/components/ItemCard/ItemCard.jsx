import css from './ItemCard.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ id, score, isShowed, changeCard, changeScore }) => {
  const [showValueScore, setShowValueScore] = useState(false);

  const showScore = () => {
    if (isShowed) {
      return;
    }
    changeCard(id);
    changeScore(score);
    setTimeout(() => {
      setShowValueScore(true);
    }, 100);
  };

  const classes = isShowed ? `${css.item} ${css.rotatedItem}` : `${css.item}`;

  return (
    <li className={classes} onClick={showScore}>
      <p className={css.score}>{showValueScore && isShowed ? score : ''}</p>
    </li>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  isShowed: PropTypes.bool.isRequired,
  changeCard: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
};
