import css from './CardPage.module.css';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import {
  getAllScores,
  getUserScores,
} from '../../redux/scores/scoresOperations';
import { selectIsLogin } from '../../redux/selectors';

const CardPage = () => {
  const [gameOver, setGameOver] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [sign, setSign] = useState('');
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const reloadPage = () => {
    window.location.reload();
  };

  const onKeyDown = e => {
    if (e.target.getAttribute('class').includes('backdrop')) {
      setIsModalWindowOpen(false);
    }

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
        <Header handleHeaderButton={handleHeaderButton} />
        {isModalWindowOpen ? (
          <ModalWindow
            onKeyDown={onKeyDown}
            closeModal={closeModal}
            sign={sign}
          />
        ) : (
          ''
        )}

        <Button
          text="Start New Game"
          handleButton={reloadPage}
          view="buttonNewGame"
        />
        {isLogin ? (
          <div className={css.buttonsShowResults}>
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
          </div>
        ) : (
          ''
        )}

        {!gameOver ? (
          <p className={css.totalScore}>Your current score: {totalScore}</p>
        ) : (
          <p className={css.totalScore} style={{ visibility: 'hidden' }}>
            Your current score: {totalScore}
          </p>
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
            <p className={css.finalScore}>Your final score: {totalScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CardPage;
