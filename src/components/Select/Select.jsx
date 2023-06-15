import PropTypes from "prop-types";
import css from "./Select.module.css";

const Select = ({ handleSelect }) => {
  const chooseSelect = (e) => {
    handleSelect(e.target.value);
  };

  return (
    <label onChange={chooseSelect} className={css.label}>
      Filter
      <select name="size" className={css.select}>
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </label>
  );
};

export default Select;

Select.propTypes = {
  handleSelect: PropTypes.func,
};
