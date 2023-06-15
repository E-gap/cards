import css from "./ItemTweet.module.css";
import logo from "../../images/logo-for-item.png";
import picture from "../../images/picture-for-item.png";
import line from "../../images/line.png";
import ellipse from "../../images/ellipse.png";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  updateUser,
  addToLocalStorage,
  removeFromLocalStorage,
} from "../../utils/operations";

const ItemTweet = ({ tweets, followers, avatar, id, user, follow }) => {
  const [isPushfollow, setIsPush] = useState(() => {
    return follow ? true : false;
  });
  const [numbersFollowers, setNumbersFollowers] = useState(() => {
    return followers;
  });

  const push = (tweets, avatar, id, user) => {
    if (!isPushfollow) {
      const upNumbersFollowers = numbersFollowers + 1;
      setNumbersFollowers(upNumbersFollowers);
      updateUser(tweets, upNumbersFollowers, avatar, id, user)
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error.message));

      addToLocalStorage(id);
    } else {
      const downNumbersFollowers = numbersFollowers - 1;
      setNumbersFollowers(downNumbersFollowers);
      updateUser(tweets, downNumbersFollowers, avatar, id, user)
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error.message));

      removeFromLocalStorage(id);
    }
    setIsPush(!isPushfollow);
  };

  return (
    <li className={css.item}>
      <img src={logo} alt="logo" className={css.logo} />
      <img src={picture} alt="signs of tweets" className={css.picture} />
      <div className={css.line_ellipse}>
        <div className={css.div_ellipse}>
          <img src={ellipse} alt="ellipse" className={css.ellipse} />
          <img src={avatar} alt="user" className={css.user} />
        </div>
        <img src={line} alt="line" className={css.line} />
      </div>
      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>
        {new Intl.NumberFormat("en").format(numbersFollowers)} followers
      </p>
      <button
        type="button"
        className={!isPushfollow ? css.buttonFollow : css.buttonFollowing}
        onClick={() => {
          push(tweets, avatar, id, user);
        }}
      >
        {!isPushfollow ? "follow" : "following"}
      </button>
    </li>
  );
};

export default ItemTweet;

ItemTweet.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
};
