import css from './CardPage.module.css';
import ItemCard from '../../components/ItemCard/ItemCard';
import { useState, useEffect } from 'react';

const cardsFromBackend = [
  { _id: 1, score: 10, isShowed: false },
  { _id: 2, score: 20, isShowed: false },
  { _id: 3, score: 30, isShowed: false },
  { _id: 4, score: 40, isShowed: false },
  { _id: 5, score: 50, isShowed: false },
  { _id: 6, score: 60, isShowed: false },
  { _id: 7, score: 70, isShowed: false },
  { _id: 8, score: 80, isShowed: false },
  { _id: 9, score: 90, isShowed: false },
  { _id: 10, score: 100, isShowed: false },
  { _id: 11, score: 110, isShowed: false },
  { _id: 12, score: 120, isShowed: false },
];

const CardPage = () => {
  const [cards, setCards] = useState(() => {
    const shuffledCards = cardsFromBackend.sort(() => Math.random() - 0.5);
    return shuffledCards;
  });
  const [gameOver, setGameOver] = useState('');
  const [id, setId] = useState('');
  const [totalScore, setTotalScore] = useState(0);

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

  const changeScore = score => {
    if (gameOver) {
      return;
    } else setTotalScore(totalScore + score);
  };

  return (
    <div className={css.cardPage}>
      <div className={css.container}>
        <button
          type="button"
          className={css.buttonNewGame}
          onClick={() => {
            window.location.reload();
          }}
        >
          Start New Game
        </button>
        <ul className={css.cardList}>
          {cards.map((card, index) => (
            <ItemCard
              // key=index because every time we start game, we shuffled array of cards
              key={index}
              id={index}
              score={card.score}
              isShowed={card.isShowed}
              changeCard={setId}
              changeScore={changeScore}
            />
          ))}
        </ul>
        <p className={css.totalScore}>Your score {totalScore}</p>
        {gameOver ? <p className={css.gameOver}>{gameOver}</p> : ''}
      </div>
    </div>
  );
};

export default CardPage;
