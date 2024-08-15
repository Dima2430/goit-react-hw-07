import { setFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.value);
  return (
    <div className={css.searchBox}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
