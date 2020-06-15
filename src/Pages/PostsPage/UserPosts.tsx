import React, { useState, useEffect, useContext } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
//created components
import { IndividualPost } from "./IndividualPost";
//user context
import { UserContext } from "../../Context/UserContext";

interface PostData {
  questions: Array<{
    questionText: string;
    totalResponses: number;
    answers: {
      0?: {
        timesAnswered: number;
        answerText: string;
      };
      1?: {
        timesAnswered: number;
        answerText: string;
      };
      2?: {
        timesAnswered: number;
        answerText: string;
      };
      3?: {
        timesAnswered: number;
        answerText: string;
      };
    };
  }>;
  postId: string;
  createdAt: string;
  totalResponses: number;
  handle: string;
  userImage: string;
}

const styles = makeStyles({
  card: {
    //maxWidth: "20%",
    width: "95%",
    margin: "auto",
    marginTop: "5px",
  },
  media: {
    height: 140,
  },
});

export const UserPosts: React.FC = () => {
  const classes = styles();
  //cardId should change to a string if a card is selected
  const [cardId, clickCard] = useState<string | undefined>(undefined);
  const [posts, setPosts] = useState<Array<PostData> | undefined>(undefined);

  const userObject = useContext(UserContext);

  useEffect(() => {
    if (!posts) {
      fetch("/api/myPosts", {
        headers: {
          Authorization: `Bearer ${userObject.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
          console.log(posts);
        });
    }
  });

  //() => clickCard(id)
  const renderCard = (post: PostData) => {
    const newDate = new Date(post.createdAt);
    return (
      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/id/1018/1000/600/"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Title of post can go here
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Created on {newDate.toLocaleDateString()}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.totalResponses} responses.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => clickCard(post.postId)}
            >
              View Responses
            </Button>
            <Button size="small" color="primary">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  //map through cards and render
  const renderCards = () => {
    if (!posts) {
      return <h1>Loading posts...</h1>;
    }
    return posts.map((post) => {
      return renderCard(post);
    });
  };

  const renderIndividualPost = () => {
    return <IndividualPost />;
  };

  return (
    <Grid container>{!cardId ? renderCards() : renderIndividualPost()}</Grid>
  );
};
