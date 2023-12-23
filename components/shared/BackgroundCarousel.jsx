// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Carousel = ({ imageArray }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {imageArray.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              className="w-full h-full object-cover cursor-pointer"
              alt={`Slide ${index + 1}`}
              width={200}
              height={100}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  imageArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
