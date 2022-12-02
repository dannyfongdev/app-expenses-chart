import styles from "./DetailsContainer.module.css";

function DetailsContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default DetailsContainer;
