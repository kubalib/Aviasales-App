import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="All"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="no_transfers"
          name="no_transfers"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="no_transfers">
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="All"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="All"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="all"
          name="All"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
    </div>
  );
};

export default Filter;
