import React from "react";
import classes from "./NewsLetter.module.css";
import newsLI from "../../assets/get-newsletter-updates.svg";

const NewsLetter = () => {
  return (
    <section id="contact" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get Our Latest Offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="Enter Your Email..." />
          <i className={`fa-solid fa-paper-plane ${classes.sendIcon}`}></i>
        </div>
        <img src={newsLI} className={classes.illustration} />
      </div>
    </section>
  );
};

export default NewsLetter;
