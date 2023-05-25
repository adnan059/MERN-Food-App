import React, { useEffect, useState } from "react";
import classes from "./FoodCatalog.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const { token } = useSelector((store) => store.auth);
  const foodEndpoint = location.pathname.split("/")[2];

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const fetchFoodType = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/products?category=" + foodEndpoint,
          config
        );
        console.log(res.data);
        setFilteredFoods(res.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchFoodType();
  }, [foodEndpoint]);

  console.log(filteredFoods);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && (
          <h2 className={classes.title}>
            The best {foodEndpoint} in the region
          </h2>
        )}
        <div className={classes.foods}>
          {filteredFoods?.length !== 0 ? (
            filteredFoods?.map((f) => (
              <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
                <div className={classes.imgContainer}>
                  <img
                    src={`http://localhost:8000/images/${f?.img}`}
                    className={classes.foodImg}
                  />
                </div>
                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{f?.title}</h4>
                  <span className={classes.price}>
                    <span>$</span> {f?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h1 className={classes.noQuantity}>No {foodEndpoint} right now</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
