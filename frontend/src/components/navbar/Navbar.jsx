import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { products } = useSelector((store) => store.cart);
  const { token } = useSelector((store) => store.auth);
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className={classes.title}>
            Food Rush
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="#home">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <span>{user ? user.username : null}</span>
          <Link to="/cart" className={classes.cartContainer}>
            <i className={`fa-solid fa-cart-shopping ${classes.cartIcon}`}></i>

            <div className={classes.cartQuantity}>{products?.length}</div>
          </Link>
          {token ? (
            <button
              className={classes.logout}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
