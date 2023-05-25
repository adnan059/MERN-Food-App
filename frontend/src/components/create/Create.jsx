import React, { useState } from "react";
import classes from "./Create.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  // console.log(title, desc, image);
  //console.log(token);
  // *********************************************

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const fd = new FormData();
      let filename = null;

      if (image) {
        filename = Date.now() + "_" + image.name;
        console.log(filename);
        fd.append("filename", filename);
        fd.append("image", image);
        console.log(fd);

        const res = await axios.post(
          "http://localhost:8000/upload",
          fd,
          config
        );

        console.log(res.data);
      }

      const res2 = await axios.post(
        "http://localhost:8000/products/create",
        {
          title,
          desc,
          category,
          img: filename,
          price,
          review,
        },
        config
      );

      console.log(res2.data);

      navigate(`/food/${res2.data._id}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCloseImg = () => {
    setImage("");
  };

  // console.log({ title, desc, category, price, review });

  //console.log(image);

  //**********************************************
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title..."
              value={title}
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input
              type="text"
              value={desc}
              placeholder="Description..."
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input
              type="text"
              value={category}
              placeholder="Category..."
              className={classes.input}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>
              Image: <span>Upload here</span>
            </label>

            <input
              type="file"
              id="image"
              placeholder="Image..."
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: "none" }}
            />

            {image && (
              <p className={classes.imageName}>
                {image.name}{" "}
                <i
                  onClick={handleCloseImg}
                  className={`${classes.closeIcon} fa-solid fa-circle-xmark`}
                ></i>
              </p>
            )}
          </div>
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input
              type="number"
              step={0.01}
              value={price}
              placeholder="Price..."
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review: </label>
            <input
              type="number"
              step={0.1}
              min={1}
              max={5}
              value={review}
              placeholder="Review..."
              className={classes.input}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
