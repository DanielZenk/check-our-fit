import React from "react";
//material make styles
import { makeStyles } from "@material-ui/core/styles";

import { CardMedia } from "@material-ui/core";
//carousel components
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
//aspect ratio

interface Props {
  images: string[];
}

const styles = makeStyles({
  slider: {
    width: 300,
    height: 533,
  },
});

export const ImageCarouselV2: React.FC<Props> = ({ images }) => {
  const classes = styles();

  const renderImages = () => {
    return images.map((imgSrc, index) => {
      return <div data-src={imgSrc}></div>;
    });
  };

  return (
    <AwesomeSlider className={classes.slider}>{renderImages()}</AwesomeSlider>
  );
};
