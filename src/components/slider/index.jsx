import React from "react";
import Slider from "react-slick";
import slider_img1 from '../assets/slider/image-1.png'
import slider_img2 from '../assets/slider/image-2.png'
function AutoPlaySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-img-container">
          <img src={slider_img1} alt="" />
        </div>
        <div className="slider-img-container">
            <img src={slider_img2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;

