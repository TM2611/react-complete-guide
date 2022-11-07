import React, { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton"
import mealsImage from "../Assets/meals.jpg"

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div>ReactMeals</div>
        <HeaderCartButton/>
      </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Table of food"/>
        </div>
    </Fragment>
  );
};

export default Header;
