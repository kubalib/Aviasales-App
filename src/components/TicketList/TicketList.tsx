import Ticket from "../Ticket/Ticket";
import styles from "./TicketList.module.scss";

const TicketList = () => {
  return (
    <div className={styles.ticketList}>
      <Ticket />
      <button className={styles.showMoreButton} type="button">
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default TicketList;
