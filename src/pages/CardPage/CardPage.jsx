import css from './CardPage.module.css';
import ItemCard from '../../components/ItemCard/ItemCard';
import { useState, useEffect } from 'react';

const cardsFromBackend = [
  { _id: 1, back: 10, isShowed: false },
  { _id: 2, back: 20, isShowed: false },
  { _id: 3, back: 30, isShowed: false },
  { _id: 4, back: 40, isShowed: false },
  { _id: 5, back: 50, isShowed: false },
  { _id: 6, back: 60, isShowed: false },
  { _id: 7, back: 70, isShowed: false },
  { _id: 8, back: 80, isShowed: false },
  { _id: 9, back: 90, isShowed: false },
  { _id: 10, back: 100, isShowed: false },
];

const CardPage = () => {
  const [cards, setCards] = useState(() => {
    const ttt = cardsFromBackend.sort(() => Math.random() - 0.5);
    return ttt;
  });
  const [gameOver, setGameOver] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const changeCard = id => {
      const quantityShowedCards = cards.filter(card => card.isShowed === true);

      if (quantityShowedCards.length >= 3) {
        return;
      }

      if (quantityShowedCards.length >= 2) {
        setGameOver('Game Over');
      }

      const cardsAfterSelect = cards.map((card, index) => {
        if (index === id) {
          return { ...card, isShowed: true };
        } else {
          return card;
        }
      });

      setCards(cardsAfterSelect);
    };

    changeCard(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={css.cardPage}>
      <div className={css.container}>
        <ul className={css.cardList}>
          {cards.map((card, index) => (
            <ItemCard
              // key=index because every time we start game, we shuffled array of cards
              key={index}
              id={index}
              back={card.back}
              isShowed={card.isShowed}
              changeCard={setId}
            />
          ))}
        </ul>
        {gameOver ? <p className={css.gameOver}>{gameOver}</p> : ''}
      </div>
    </div>
  );
};

export default CardPage;
