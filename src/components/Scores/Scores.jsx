import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAllScores, selectScoresByUser } from 'redux/selectors';
import css from './Scores.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export const Scores = ({ sign, closeModal }) => {
  const allScores = useSelector(selectAllScores);
  const scoresByUser = useSelector(selectScoresByUser);
  const [scores, setScores] = useState(() => {
    return sign === 'allScores' ? allScores : scoresByUser;
  });

  const handleButton = e => {
    if (e.target.textContent.includes('Date')) {
      setScores([...scores].sort((a, b) => b.date.localeCompare(a.date)));
    } else {
      setScores([...scores].sort((a, b) => b.score - a.score));
    }
  };

  return (
    <div className={css.wrapperScores}>
      <p className={css.highlight}>
        {sign === 'allScores' ? 'All Scores' : 'My Scores'}
      </p>
      <div className={css.listButtonsSort}>
        <Button
          text="Sort by Date"
          handleButton={handleButton}
          view="sortByDate"
        />
        <Button
          text="Sort by Score"
          handleButton={handleButton}
          view="sortByScore"
        />
      </div>
      <table className={css.scoresHistory}>
        <thead>
          <tr>
            <th>Date</th>
            {sign === 'allScores' && <th>User</th>}
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(({ score, date, owner }, index) => {
            return index % 2 === 0 ? (
              <tr key={index}>
                <td className={css.pair}>{date}</td>
                {sign === 'allScores' && (
                  <td className={css.pair}>{owner.name}</td>
                )}
                <td className={css.pair}>{score}</td>
              </tr>
            ) : (
              <tr key={index}>
                <td className={css.odd}>{date}</td>
                {sign === 'allScores' && (
                  <td className={css.odd}>{owner.name}</td>
                )}
                <td className={css.odd}>{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Scores.propTypes = {
  sign: PropTypes.string,
  closeModal: PropTypes.func,
};
