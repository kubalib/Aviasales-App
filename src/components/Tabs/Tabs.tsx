import styles from "./Tabs.module.scss";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab}>
        <span>Самый дешевый</span>
      </div>
      <div className={styles.tab}>
        <span>Самый быстрый</span>
      </div>
      <div className={styles.tab}>
        <span>Оптимальный</span>
      </div>
    </div>
  );
};

export default Tabs;
