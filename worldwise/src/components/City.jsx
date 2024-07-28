import React from "react";
import CityList from "./CityList";
import styles from "./City.module.css";

const City = ({ cities }) => {
  return (
    <div className={styles.city}>
      <h6>Cities</h6>
      <CityList cities={cities} />
    </div>
  );
};

export default City;
