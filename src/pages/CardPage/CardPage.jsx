import css from './CardPage.module.css';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import {
  getAllScores,
  getUserScores,
} from '../../redux/scores/scoresOperations';

const CardPage = () => {
  const [gameOver, setGameOver] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [sign, setSign] = useState('');

  const dispatch = useDispatch();

  const reloadPage = () => {
    window.location.reload();
  };

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      setIsModalWindowOpen(false);
    }
  };

  const handleHeaderButton = e => {
    if (e.target.getAttribute('class').includes('Up')) {
      setSign('signUp');
      setIsModalWindowOpen(true);
    } else if (e.target.getAttribute('class').includes('In')) {
      setSign('');
      setIsModalWindowOpen(true);
    } else if (e.target.getAttribute('class').includes('Out')) {
      dispatch(logout());
    }
  };

  const closeModal = e => {
    setIsModalWindowOpen(false);
  };

  const showAllScores = () => {
    dispatch(getAllScores());
  };

  const showMyScores = () => {
    dispatch(getUserScores());
  };

  return (
    <div className={css.cardPage}>
      <div className={css.container}>
        {isModalWindowOpen ? (
          <ModalWindow
            onKeyDown={onKeyDown}
            closeModal={closeModal}
            sign={sign}
          />
        ) : (
          ''
        )}
        <Header handleHeaderButton={handleHeaderButton} />
        <Button
          text="Start New Game"
          handleButton={reloadPage}
          view="buttonNewGame"
        />
        <Button
          text="Show all Scores"
          handleButton={showAllScores}
          view="buttonShowAllScores"
        />
        <Button
          text="Show my Scores"
          handleButton={showMyScores}
          view="buttonShowMyScores"
        />

        {!gameOver ? (
          <p className={css.totalScore}>Your current score: {totalScore}</p>
        ) : (
          <p style={{ color: 'palegoldenrod' }}>_</p>
        )}
        <CardList
          setGameOver={setGameOver}
          gameOver={gameOver}
          setTotalScore={setTotalScore}
          totalScore={totalScore}
        />

        {gameOver ? (
          <div className={css.gameOver}>
            <p>{gameOver}</p>
            <p>Your final score: {totalScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CardPage;
