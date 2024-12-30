import React from "react";
import classNames from "classnames";
import { NavLink} from "react-router-dom";
import { IRout } from "../../data/router/router";
import styles from './Navigation.module.scss'

interface IProp {
  navigationList: IRout[];
}

export default function Navigation({ navigationList}: IProp) {
  return (
  
    <nav >
      <ul className={styles.navList}>
        {navigationList.map(({ label, path, id }) => (
          <li key={id} className={styles.navItem}>
            <NavLink to={`${path}`}  className={({ isActive }) => classNames(styles.navItemLink, { [styles.navItemActive]: isActive })}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  
   
  );
}
