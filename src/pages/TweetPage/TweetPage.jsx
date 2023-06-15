import css from './TweetPage.module.css';
import ItemTweet from '../../components/ItemTweet/ItemTweet';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import { useEffect, useState } from 'react';
import {
  fetchAllUsers,
  compareArray,
  getFromLocalStorage,
} from '../../utils/operations';

const TweetPage = () => {
  const [finalArrayUsersVisible, setFinalArrayUsersVisible] = useState([]);
  const [totalAllUsers, setTotalAllUsers] = useState(0);
  const [categoryUsers, setCategoryUsers] = useState('all');
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setError('');
    fetchAllUsers()
      .then(response => {
        setIsLoading(false);
        if (response.statusText !== 'OK') {
          throw new Error('Server Error');
        } else {
          const usersPerPage = 3;
          let endUserFromArray = usersPerPage * page;
          const followingUsers = getFromLocalStorage();

          if (categoryUsers === 'all') {
            const finalArrayUsers = compareArray(response.data, followingUsers);
            const finalArrayUsersVisible = finalArrayUsers.slice(
              0,
              endUserFromArray
            );
            setFinalArrayUsersVisible(finalArrayUsersVisible);
            setTotalAllUsers(finalArrayUsers.length);
          } else if (categoryUsers === 'follow') {
            const finalArrayUsers = compareArray(response.data, followingUsers);
            const finalArrayUsersFollow = finalArrayUsers.filter(
              user => user.follow === false
            );

            const finalArrayUsersVisible = finalArrayUsersFollow.slice(
              0,
              endUserFromArray
            );
            setFinalArrayUsersVisible(finalArrayUsersVisible);
            setTotalAllUsers(finalArrayUsersFollow.length);
          } else if (categoryUsers === 'followings') {
            const finalArrayUsers = compareArray(response.data, followingUsers);
            const finalArrayUsersFollowings = finalArrayUsers.filter(
              user => user.follow === true
            );

            const finalArrayUsersVisible = finalArrayUsersFollowings.slice(
              0,
              endUserFromArray
            );
            setFinalArrayUsersVisible(finalArrayUsersVisible);
            setTotalAllUsers(finalArrayUsersFollowings.length);
          }
        }
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [page, categoryUsers]);

  const changePage = () => {
    setPage(page + 1);
  };

  const handleSelect = e => {
    setCategoryUsers(e);
    setPage(1);
  };

  return (
    <div className={css.tweetPage}>
      <div className={css.container}>
        <div className={css.backSelect}>
          <Button text="BACK" view="back" />
          <Select handleSelect={handleSelect} />
        </div>
        {error ? <p className={css.error}>{error}</p> : ''}
        {finalArrayUsersVisible.length > 0 ? (
          <ul className={css.userList}>
            {finalArrayUsersVisible.map(user => (
              <ItemTweet
                key={user.id}
                tweets={user.tweets}
                followers={user.followers}
                avatar={user.avatar}
                id={user.id}
                user={user.user}
                follow={user.follow}
              />
            ))}
          </ul>
        ) : !isLoading && !error ? (
          <p className={css.notItemsByCategory}>
            There aren't any selected users
          </p>
        ) : (
          ''
        )}

        {finalArrayUsersVisible.length > 0 &&
        finalArrayUsersVisible.length < totalAllUsers ? (
          <Button text="LOAD MORE" changePage={changePage} view="loadMore" />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TweetPage;
