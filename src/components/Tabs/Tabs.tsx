import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "../../redux/store";
import styles from "./Tabs.module.scss";

const Tabs = () => {
  const dispatch = useDispatch();
  const currentSorting = useSelector((state) => state.sorting);

  const handleClick = (sort: string) => {
    dispatch(setSorting(sort));
  };

  return (
    <div className={styles.tabs} role="tablist">
      <button
        className={`${styles.tab} ${currentSorting === "cheapest" ? styles.active : ""}`}
        role="tab"
        onClick={() => handleClick("cheapest")}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles.tab} ${currentSorting === "fastest" ? styles.active : ""}`}
        role="tab"
        onClick={() => handleClick("fastest")}
      >
        Самый быстрый
      </button>
      <button
        className={`${styles.tab} ${currentSorting === "optimal" ? styles.active : ""}`}
        role="tab"
        onClick={() => handleClick("optimal")}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Tabs;
