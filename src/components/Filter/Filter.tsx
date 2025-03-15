import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../redux/store";
import { FiltersState } from "../../redux/store";

import styles from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: { filters: FiltersState }) => state.filters,
  );

  const handleChange = (filterName: string) => {
    dispatch(toggleFilter(filterName));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.title}>Количество пересадок</p>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          className={styles.checkbox}
          checked={filters.all}
          onChange={() => handleChange("all")}
        />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="no_transfers"
          className={styles.checkbox}
          checked={filters.no_transfers}
          onChange={() => handleChange("no_transfers")}
        />
        <label className={styles.label} htmlFor="no_transfers">
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="transfers_one"
          className={styles.checkbox}
          checked={filters.transfers_one}
          onChange={() => handleChange("transfers_one")}
        />
        <label className={styles.label} htmlFor="transfers_one">
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="transfers_two"
          className={styles.checkbox}
          checked={filters.transfers_two}
          onChange={() => handleChange("transfers_two")}
        />
        <label className={styles.label} htmlFor="transfers_two">
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="transfers_three"
          className={styles.checkbox}
          checked={filters.transfers_three}
          onChange={() => handleChange("transfers_three")}
        />
        <label className={styles.label} htmlFor="transfers_three">
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Filter;
