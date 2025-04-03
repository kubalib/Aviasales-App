import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, FiltersState } from "../../redux/filters";

import styles from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: { filters: FiltersState }) => state.filters,
  );

  const handleChange = (filterName: keyof FiltersState) => () => {
    dispatch(toggleFilter(filterName));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.title}>Количество пересадок</p>
      {Object.entries(filters)
        .filter(([key]) => key !== "activeStops")
        .map(([key, { checked, label }]) => {
          return (
            <div key={key} className={styles.wrapper}>
              <input
                type="checkbox"
                id={key}
                className={styles.checkbox}
                checked={checked}
                onChange={handleChange(key as keyof FiltersState)}
              />
              <label className={styles.label} htmlFor={key}>
                {label}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;
