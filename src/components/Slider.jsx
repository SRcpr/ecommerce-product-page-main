import { useState } from "react";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import { sliderImage } from "../data.js";
import "./slider.css";
const Slider = () => {
  const [changeSliderImage, setChangeSliderImage] = useState(0);
  const handleSliderCount = (buttonStatus) => {
    if (buttonStatus === "next") {
      setChangeSliderImage((value) =>
        value < sliderImage.length - 1 ? value + 1 : 0,
      );
    } else if (buttonStatus === "previous") {
      console.log("previous image");
      setChangeSliderImage((value) =>
        value > 0 ? value - 1 : sliderImage.length - 1,
      );
    } else {
      setChangeSliderImage(buttonStatus);
    }
  };
  const handleLightHouse = () => {};
  return (
    <section className="slider-section">
      <button
        aria-label={sliderImage[changeSliderImage].image}
        className="btn width slider-image-box"
        onClick={() => handleLightHouse()}
      >
        <img
          className="slider-image"
          src={sliderImage[changeSliderImage].image}
          alt=""
        />
      </button>
      <div className="button-control">
        <button
          type="button"
          aria-label="previous image"
          className="btn circle start"
          onClick={() => handleSliderCount("previous")}
        >
          <img src={previous} alt="" />
        </button>
        <button
          aria-label="next image"
          type="button"
          className="btn circle end"
          onClick={() => handleSliderCount("next")}
        >
          <img src={next} alt="" />
        </button>
      </div>
      <div className="button-thumbnail-control">
        {sliderImage.map((sliderImg, index) => (
          <button
            key={sliderImg.thumb}
            type="button"
            aria-label={`show image ${index + 1}`}
            aria-pressed={index === changeSliderImage}
            className={`btn thumbnail-box width ${index === changeSliderImage ? "active" : ""}`}
            onClick={() => handleSliderCount(index)}
          >
            <img
              src={sliderImg.thumb}
              alt={``}
              className={`slider-image rounded`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
