import React from "react";
import classes from "./Foods.module.css";
import { foodTypes } from "./../../data/data";
import { Link } from "react-router-dom";

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>What We Offer</h4>
        <h2 className={classes.title}>Best Meals in the Town!</h2>
        <div className={classes.foods}>
          {foodTypes.map((foodType, i) => (
            <Link
              to={`/foods/${foodType.name}`}
              key={i}
              className={classes.food}
            >
              <h4>{foodType.name}</h4>
              <div className={classes.imgContainer}>
                <img src={foodType.img} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
