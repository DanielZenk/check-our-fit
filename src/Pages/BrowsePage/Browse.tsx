import React, { useEffect, useState } from "react";
//material components
// import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//created components
// import { ImageCarousel } from "../../Components/ImageCarousel";
// import { Questionnaire } from "../../Components/Questionnaire";
// import { UserCard } from "../../Components/UserCard";
import { PostCard } from "../../Components/PostCard";

interface Props {}

interface PostData {
  questions: Array<{
    questionText: string;
    totalResponses: number;
    answers?: object;
  }>;
  postId: string;
  createdAt: string;
  totalResponses: number;
  handle: string;
  userImage: string;
}

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

  const [posts, setPosts] = useState<Array<PostData> | undefined>(undefined);

  // const [currPost, setCurrPost] = useState({});

  // componentDidMount() {
  //   axios.get("/posts")
  // }

  // const updateCurrPost = () => {
  //   if (posts) setCurrPost(posts[0]);
  // };

  useEffect(() => {
    if (!posts) {
      fetch("/posts")
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
          console.log(posts);
        });
    }
  });

  return (
    <div className={classes.root}>
      {posts ? <PostCard post={posts[0]} /> : null}
      {posts ? <PostCard post={posts[0]} /> : null}
      {posts ? <PostCard post={posts[0]} /> : null}
      {posts ? <PostCard post={posts[0]} /> : null}
    </div>
  );
};

/*
<Grid container justify="center" alignItems="stretch">
        <Grid item xs={12} md={8}>
          <Paper className={classes.leftPaper}>
            <ImageCarousel images={imagesArray} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.rightPaper}>
            {posts ? (
              <>
                <UserCard
                  userImage={posts[0].userImage}
                  createdAt={posts[0].createdAt}
                />
                <Questionnaire questions={posts[0].questions} />
              </>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
*/
