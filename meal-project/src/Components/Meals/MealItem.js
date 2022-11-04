import React from 'react'
import styles from "./MealItem.module.css";


const MealItem = (props) => {
  return (
    <div className={styles.meal}>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
    </div>
  )
}

export default MealItem