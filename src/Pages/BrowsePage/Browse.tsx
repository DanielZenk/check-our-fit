import React, { useEffect, useState } from "react";
//material components
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//axios import
//created components
import { ImageCarousel } from "../../Components/ImageCarousel";
import { Questionnaire } from "../../Components/Questionnaire";

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

  const [posts, setPosts] = useState([
    {
      questions: [],
    },
  ]);

  const imagesArray = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
  ];

  // componentDidMount() {
  //   axios.get("/posts")
  // }

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((result) => setPosts(result));
  });

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
            {posts.length > 0 ? (
              <Questionnaire questions={posts[0].questions} />
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
