import DayBar from "./DayBar";
import SpendingData from "../data/data.json";
import styles from "./Last7Days.module.css"

function Last7Days() {
  return (
    <>
      <p className={styles.title}>Spending - Last 7 days</p>
      <div className={styles.flex}>
      {SpendingData.map((data, index) => (
        <DayBar key={index} index={index} day={data.day} amount={data.amount} />
      ))}
      </div>
    </>
  );
}

export default Last7Days;
