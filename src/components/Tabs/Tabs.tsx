import { useDispatch } from "react-redux";
import { setSorting, SortingKey } from "../../redux/sorting";
import { useSelector } from "../../redux/store";

import styles from "./Tabs.module.scss";

const Tabs = () => {
  const sortingOptions = [
    { value: SortingKey.Cheapest, label: "Самый дешевый" },
    { value: SortingKey.Fastest, label: "Самый быстрый" },
    { value: SortingKey.Optimal, label: "Оптимальный" },
  ] as const;

  const dispatch = useDispatch();
  const currentSorting = useSelector((state) => state.sorting.sort);

  const handleClick = (sort: SortingKey) => () => {
    dispatch(setSorting(sort));
  };

  return (
    <div className={styles.tabs} role="tablist">
      {sortingOptions.map(({ value, label }) => {
        return (
          <button
            key={value}
            className={`${styles.tab} ${currentSorting === value ? styles.active : ""}`}
            role="tab"
            onClick={handleClick(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
