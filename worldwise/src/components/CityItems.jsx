import React from "react";
import styles from "./CityItems.module.css";

function CityItems({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
    </li>
  );
}
export default CityItems;
