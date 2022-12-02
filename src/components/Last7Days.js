import DayBar from "./DayBar";
import SpendingData from "../data/data.json";
import styles from "./Last7Days.module.css"

function Last7Days() {
  return (
    <>
      <p className={styles.title}>Spending - Last 7 days</p>
      {SpendingData.map(data => (
        <DayBar key={data.day} day={data.day} amount={data.amount} />
      ))}
    </>
  );
}

export default Last7Days;
