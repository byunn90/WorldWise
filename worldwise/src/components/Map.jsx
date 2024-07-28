import React from "react";
import styles from "./Map.module.css";

function Map({ children }) {
  return <div className={styles.map}>{children}</div>;
}

export default Map;
