import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <p className={styles.title}>Количество пересадок</p>
      <div className={styles.wrapper}>
        <input type="checkbox" id="all" className={styles.checkbox} />
        <label className={styles.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="no_transfers" className={styles.checkbox} />
        <label className={styles.label} htmlFor="no_transfers">
          Без пересадок
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="transfers_one" className={styles.checkbox} />
        <label className={styles.label} htmlFor="transfers_one">
          1 пересадка
        </label>
      </div>
      <div className={styles.wrapper}>
        <input type="checkbox" id="transfers_two" className={styles.checkbox} />
        <label className={styles.label} htmlFor="transfers_two">
          2 пересадки
        </label>
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id="transfers_three"
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor="transfers_three">
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Filter;
