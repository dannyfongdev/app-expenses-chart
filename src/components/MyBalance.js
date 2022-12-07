import styles from "./MyBalance.module.css";
function MyBalance() {
  return (
    <div className={styles.container}> 
    <div>
      <h1 className={styles.label}>My balance</h1>
      <p className={styles.amount}>$921.48</p></div><div><img src="../images/logo.svg" alt="logo" /></div>
    </div>
  );
}

export default MyBalance;
