import styles from "./Tabs.module.scss";

const Tabs = () => {
  return (
    <div className={styles.tabs} role="tablist">
      <button className={styles.tab} role="tab">
        Самый дешевый
      </button>
      <button className={styles.tab} role="tab">
        Самый быстрый
      </button>
      <button className={styles.tab} role="tab">
        Оптимальный
      </button>
    </div>
  );
};

export default Tabs;
