import React from "react";
import MealItem from './meal-items'
export default function MealsGrid({ meals }) {
  return (
    <>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal}></MealItem>
          </li>
        ))}
      </ul>
    </>
  );
}
