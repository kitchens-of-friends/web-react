import React from "react";
import { Carousel } from "antd";

const KitchenCarousel = ({ imgs }) => {
  return (
    <div className="w-full flex">
      <div className="w-full lg:w-1/2">
        <Carousel autoplay className="lg:p-2">
          {imgs.map((item) => {
            return (
              <div className="lg:w-1/2" key={`carousel-img-${item}`}>
                <img src={item} alt="Kitchen" className="w-full" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="hidden lg:w-1/2 lg:p-2 lg:grid lg:grid-rows-2 lg:grid-cols-2">
        {[1, 2, 3, 4].map((index) => {
          return (
            <div className="px-1 rounded-sm" key={`side-img-${index}`}>
              <img
                src={imgs[imgs.length - index]}
                alt="Kitchen"
                className="w-full rounded-sm"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KitchenCarousel;
