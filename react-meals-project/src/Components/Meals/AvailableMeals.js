import React from "react";
import MealItem from "./MealItem";
import DUMMY_MEALS from "./dummy-meals";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const AvaliableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card className={styles.meals}>
      <ul>{meals}</ul>
    </Card>
  );
};

export default AvaliableMeals;
