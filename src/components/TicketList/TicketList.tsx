import Ticket from "../Ticket/Ticket";
import styles from "./TicketList.module.scss";

const TicketList = () => {
  return (
    <section>
      <ul className={styles.ticketList}>
        <Ticket />
      </ul>
      <button className={styles.showMoreButton} type="button">
        Показать еще 5 билетов!
      </button>
    </section>
  );
};



export default TicketList;
