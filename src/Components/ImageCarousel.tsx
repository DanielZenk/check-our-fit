import React from "react";
//material components
//import { makeStyles } from "@material-ui/core/styles";
//carousel components
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Props {
  images: string[];
}

//const styles = makeStyles({});

export const ImageCarousel: React.FC<Props> = ({ images }) => {
  //const classes = styles();

  const renderImages = () => {
    return images.map((imgSrc) => {
      return (
        <div>
          <img src={imgSrc} alt="temp" />
        </div>
      );
    });
  };

  return <Carousel>{renderImages()}</Carousel>;
};
