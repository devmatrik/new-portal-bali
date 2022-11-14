import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Function(props) {


  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

  return (
    <div className="Function">
      <Slider {...settings}>
        
      </Slider>
    </div>
  );
}

export default Function;