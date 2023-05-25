import React, { useEffect, useState } from "react";
import classes from "./FoodDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../../redux/cartSlice";

const FoodDetails = () => {
  const [foodDetails, setFoodDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const { products } = useSelector((store) => store.cart);
  const { id } = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const res = await axios.get(
          "http://localhost:8000/products/find/" + id,
          config
        );

        console.log(res.data);
        setFoodDetails(res.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchFood();
  }, [id, token]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    } else {
      return;
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  console.log(products);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={`http://localhost:8000/images/${foodDetails?.img}`} />
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>{foodDetails?.title}</h2>
          <div className={classes.price}>
            Price: <span>$</span> {foodDetails?.price}
          </div>
          <div className={classes.quantity}>
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("dec")}
            >
              -
            </button>
            <span className={classes.quantityNumber}>{quantity}</span>
            <button onClick={() => changeQuantity("inc")}>+</button>
          </div>
          <div className={classes.category}>
            <h3>Category: </h3>
            <span className={classes.categoryName}>
              {foodDetails?.category}
            </span>
          </div>
          <div className={classes.productDesc}>
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50
                ? `${foodDetails?.desc}`.slice(0, 50)
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className={classes.addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
