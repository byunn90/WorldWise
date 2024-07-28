import React from "react";
import styles from "./CityItems.module.css";

const CityItems = ({ city }) => {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <span className={styles.name}>{city.name}</span>
      <span className={styles.date}>{city.date}</span>
      <button className={styles.deleteBtn}></button>
    </li>
  );
};

export default CityItems;
