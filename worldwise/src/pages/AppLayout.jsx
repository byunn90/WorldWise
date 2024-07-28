import React from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { Outlet } from "react-router-dom";
import CityList from "../components/CityList";
import styles from "./AppLayout.module.css";

function AppLayout({ cities, countries, isLoading }) {
  return (
    <div className={styles.app}>
      <Sidebar cities={cities} countries={countries} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Map>
        <CityList cities={cities} isLoading={isLoading} />
      </Map>
      <User />
    </div>
  );
}

export default AppLayout;
