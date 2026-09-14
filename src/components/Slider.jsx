import React, { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import product1tumbnail from "../assets/image-product-1-thumbnail.jpg";
import product2 from "../assets/image-product-2.jpg";
import product2tumbnail from "../assets/image-product-2-thumbnail.jpg";
import product3 from "../assets/image-product-3.jpg";
import product3tumbnail from "../assets/image-product-3-thumbnail.jpg";
import product4 from "../assets/image-product-4.jpg";
import product4tumbnail from "../assets/image-product-4-thumbnail.jpg";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import "./slider.css";
const Slider = () => {
  const image = [product1, product2, product3, product4];
  const thumbnail = [
    product1tumbnail,
    product2tumbnail,
    product3tumbnail,
    product4tumbnail,
  ];
  const [changeSliderImage, setChangeSliderImage] = useState(0);
  const handleSliderCount = (buttonStatus) => {
    if (buttonStatus === "next") {
      setChangeSliderImage((value) =>
        value < image.length - 1 ? value + 1 : 0,
      );
    } else if (buttonStatus === "previous") {
      console.log("previous image");
      setChangeSliderImage((value) =>
        value > 0 ? value - 1 : image.length - 1,
      );
    } else {
      setChangeSliderImage(buttonStatus);
    }
  };
  return (
    <section className="slider-section">
      <div className="slider-image-box">
        <img className="slider-image" src={image[changeSliderImage]} alt="" />
      </div>
      <div className="button-control">
        <button
          type="button"
          className="btn circle start"
          onClick={() => handleSliderCount("previous")}
        >
          <img src={previous} alt="" />
        </button>
        <button
          type="button"
          className="btn circle end"
          onClick={() => handleSliderCount("next")}
        >
          <img src={next} alt="" />
        </button>
      </div>
      <div className="button-thumbnail-control">
        {thumbnail.map((thumbImage, index) => (
          <button
            type="btn"
            className="btn thumbnail-box width"
            onClick={() => handleSliderCount(index)}
          >
            <img src={thumbImage} alt="" className="slider-image rounded" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
