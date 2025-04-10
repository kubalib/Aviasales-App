import { useDispatch } from "react-redux";
import { toggleFilter, FiltersKey } from "../../redux/filters";
import { useSelector } from "../../redux/store";

import styles from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);

  const handleChange = (filterName: FiltersKey) => () => {
    dispatch(toggleFilter(filterName));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.title}>Количество пересадок</p>
      {filters.map(({ value, checked, label }) => {
        return (
          <div key={value} className={styles.wrapper}>
            <input
              type="checkbox"
              id={value.toString()}
              className={styles.checkbox}
              checked={checked}
              onChange={handleChange(value)}
            />
            <label className={styles.label} htmlFor={value.toString()}>
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
