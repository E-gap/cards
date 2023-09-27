import css from './CardPage.module.css';
import Button from '../../components/Button/Button';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, refresh } from '../../redux/auth/authOperations';
import {
  getAllScores,
  getUserScores,
} from '../../redux/scores/scoresOperations';
import {
  selectIsLogin,
  selectAllScores,
  selectScoresByUser,
  selectIsUserLoading,
  selectAuthError,
} from '../../redux/selectors';
import FormSign from '../../components/FormSign/FormSign';
import { Scores } from '../../components/Scores/Scores';
import { Preloader } from '../../components/Preloader/Preloader';
import Container from 'components/Container/Container';

const CardPage = () => {
  const [key, setKey] = useState(0);
  const [gameOver, setGameOver] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [sign, setSign] = useState('');
  const isLogin = useSelector(selectIsLogin);
  const allScores = useSelector(selectAllScores);
  const myScores = useSelector(selectScoresByUser);
  const isUserLoading = useSelector(selectIsUserLoading);
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const restartGame = () => {
    setTotalScore(0);
    setGameOver('');
    setKey(Math.random());
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
      setSign('signIn');
      setIsModalWindowOpen(true);
    } else if (e.target.getAttribute('class').includes('Out')) {
      dispatch(logout());
    }

    restartGame();
  };

  const closeModal = () => {
    setIsModalWindowOpen(false);
  };

  const showScores = e => {
    setIsModalWindowOpen(true);
    if (e.target.getAttribute('class').includes('AllScores')) {
      setSign('allScores');
      dispatch(getAllScores());
    } else if (e.target.getAttribute('class').includes('MyScores')) {
      dispatch(getUserScores());
      setSign('myScores');
    }
  };

  return (
    <>
      {isUserLoading ? (
        <Preloader />
      ) : (
        <div className={css.cardPage}>
          <Container>
            <Header handleHeaderButton={handleHeaderButton} />
            {isModalWindowOpen ? (
              <ModalWindow
                onKeyDown={onKeyDown}
                setIsModalWindowOpen={setIsModalWindowOpen}
              >
                {sign.includes('sign') && (
                  <FormSign sign={sign} closeModal={closeModal} />
                )}
                {sign === 'allScores' && (
                  <Scores
                    sign={sign}
                    closeModal={closeModal}
                    scores={allScores}
                  />
                )}
                {sign === 'myScores' && (
                  <Scores
                    sign={sign}
                    closeModal={closeModal}
                    scores={myScores}
                  />
                )}
              </ModalWindow>
            ) : (
              ''
            )}
            <Button
              text="Start New Game"
              handleButton={restartGame}
              view="buttonNewGame"
            />
            {isLogin ? (
              <div className={css.buttonsShowResults}>
                <Button
                  text="Show all Scores"
                  handleButton={showScores}
                  view="buttonShowAllScores"
                />
                <Button
                  text="Show my Scores"
                  handleButton={showScores}
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
              key={key}
              setGameOver={setGameOver}
              gameOver={gameOver}
              setTotalScore={setTotalScore}
              totalScore={totalScore}
            />
            {gameOver && (
              <div className={css.gameOver}>
                <p>{gameOver}</p>
                <p className={css.finalScore}>Your final score: {totalScore}</p>
              </div>
            )}
            {error && <ErrorComponent text={error} />}
          </Container>
        </div>
      )}
    </>
  );
};

export default CardPage;
