import React from 'react';
import Slider from 'react-slick';


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
    <div>
      <Slider {...settings} >
        <div className="box">
          <h3>1</h3>
        </div>
        <div className="box">
          <h3>2</h3>
        </div>
        <div className="box">
          <h3>3</h3>
        </div>
        <div className="box">
          <h3>4</h3>
        </div>
        <div className="box">
          <h3>5</h3>
        </div>
        <div className="box">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </div>
  );
}
