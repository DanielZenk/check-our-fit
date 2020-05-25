import React from "react";
//carousel components
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Props {
  images: string[];
}

export const ImageCarousel: React.FC<Props> = ({ images }) => {
  const renderImages = () => {
    return images.map((imgSrc, index) => {
      return (
        <div key={index}>
          <img src={imgSrc} alt="temp" />
        </div>
      );
    });
  };

  return <Carousel>{renderImages()}</Carousel>;
};
