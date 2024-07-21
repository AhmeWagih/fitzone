"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500 rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500 rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-400 rounded-full mt-2"></div>
    ),
  };

  return (
    <Slider {...settings}>
      <div className="flex flex-col items-center bg-black rounded-lg p-8 mx-auto max-w-2xl">
        <div className="mb-4">
          <p className="text-lg">
            "Join this fitness member, the best choice that I've. They're very
            professional and give you suggestion about what food and nutrition
            that you can eat"
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="/avatar.png"
            alt="Testimonial 1"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div className="text-left">
            <h3 className="font-bold text-lg">Jon Deo</h3>
            <p className="text-sm">Office Worker</p>
          </div>
        </div>
        <div className="text-yellow-500 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-black rounded-lg p-8 mx-auto max-w-2xl">
        <div className="mb-4">
          <p className="text-lg">
            "Join this fitness member, the best choice that I've. They're very
            professional and give you suggestion about what food and nutrition
            that you can eat"
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="/avatar.png"
            alt="Testimonial 1"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div className="text-left">
            <h3 className="font-bold text-lg">Jon Deo</h3>
            <p className="text-sm">Office Worker</p>
          </div>
        </div>
        <div className="text-yellow-500 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-black rounded-lg p-8 mx-auto max-w-2xl">
        <div className="mb-4">
          <p className="text-lg">
            "Join this fitness member, the best choice that I've. They're very
            professional and give you suggestion about what food and nutrition
            that you can eat"
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="/avatar.png"
            alt="Testimonial 1"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div className="text-left">
            <h3 className="font-bold text-lg">Jon Deo</h3>
            <p className="text-sm">Office Worker</p>
          </div>
        </div>
        <div className="text-yellow-500 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-black rounded-lg p-8 mx-auto max-w-2xl">
        <div className="mb-4">
          <p className="text-lg">
            "Join this fitness member, the best choice that I've. They're very
            professional and give you suggestion about what food and nutrition
            that you can eat"
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="/avatar.png"
            alt="Testimonial 1"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div className="text-left">
            <h3 className="font-bold text-lg">Jon Deo</h3>
            <p className="text-sm">Office Worker</p>
          </div>
        </div>
        <div className="text-yellow-500 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
