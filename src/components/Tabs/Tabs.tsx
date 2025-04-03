import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "../../redux/sorting";
import { SortingState } from "../../redux/sorting";
import styles from "./Tabs.module.scss";

const Tabs = () => {
  const sortingOptions = [
    { key: "cheapest", label: "Самый дешевый" },
    { key: "fastest", label: "Самый быстрый" },
    { key: "optimal", label: "Оптимальный" },
  ];

  const dispatch = useDispatch();
  const currentSorting = useSelector(
    (state: { sorting: SortingState }) => state.sorting.sort,
  );

  const handleClick = (sort: SortingState["sort"]) => () => {
    dispatch(setSorting(sort));
  };

  return (
    <div className={styles.tabs} role="tablist">
      {sortingOptions.map(({ key, label }) => {
        return (
          <button
            key={key}
            className={`${styles.tab} ${currentSorting === key ? styles.active : ""}`}
            role="tab"
            onClick={handleClick(key as SortingState["sort"])}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
