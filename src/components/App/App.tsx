import Filter from "../Filter/Filter";
import TicketList from "../TicketList/TicketList";
import Tabs from "../Tabs/Tabs";

import styles from "./App.module.scss";
import logo from "./Logo.png";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.logo} alt="logo" src={logo} />
      </header>
      <aside className={styles.filterBlock}>
        <Filter />
      </aside>
      <main className={styles.main}>
        <Tabs />
        <TicketList />
      </main>
    </div>
  );
};

export default App;
