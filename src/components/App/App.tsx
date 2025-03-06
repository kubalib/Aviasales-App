import Filter from "../Filter/Filter";
import TicketList from "../TicketList/TicketList";
import Tabs from "../Tabs/Tabs";

import styles from "./App.module.scss";
import logo from "./Logo.png";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img className={styles.logo} alt="logo" src={logo} />
      </div>
      <div className={styles.filterBlock}>
        <Filter />
      </div>
      <div className={styles.main}>
        <Tabs />
        <TicketList />
      </div>
    </div>
  );
};

export default App;
