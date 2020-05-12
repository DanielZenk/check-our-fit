import React from "react";
//material components
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//created components
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { Questionnaire } from "../QuestionPanel/Questionnaire";

interface Props {}

const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  leftPaper: {
    marginTop: "5px",
    marginLeft: "4px",
    height: "97%",
  },
  rightPaper: {
    marginTop: "5px",
    marginLeft: "4px",
    height: "97%",
  },
});

export const Browse: React.FC<Props> = () => {
  const classes = styles();

  const imagesArray = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
  ];

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={12} md={8}>
          <Paper className={classes.leftPaper}>
            <ImageCarousel images={imagesArray} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.rightPaper}>
            <Questionnaire />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
