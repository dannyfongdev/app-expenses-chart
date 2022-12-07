import styles from "./TotalThisMonth.module.css";

function TotalThisMonth() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.label}>Total this month</p>
        <p className={styles.amount}>$478.33</p>
      </div>
      <div>
        <p className={styles.percent}>+2.4%</p>
        <p className={styles.label}>from last month</p>
      </div>
    </div>
  );
}

export default TotalThisMonth;
