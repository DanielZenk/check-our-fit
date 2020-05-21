import React, { useState, useEffect } from "react";
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

interface Props {}

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
    marginLeft: "10px",
    marginTop: "10px",
  },
  media: {
    height: 140,
  },
});

export const UserPosts: React.FC<Props> = () => {
  //cardId should change to a number if a card is selected
  const [cardId, clickCard] = useState<string | undefined>(undefined);

  const classes = styles();

  const [posts, setPosts] = useState<Array<PostData> | undefined>(undefined);

  useEffect(() => {
    if (!posts) {
      fetch("/api/myPosts", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1YzlhZWJlMjM0ZGE2MDE2YmQ3Yjk0OTE2OGI4Y2Q1YjRlYzllZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFzaGlvbmFibGUtdHlwZXNjcmlwdCIsImF1ZCI6ImZhc2hpb25hYmxlLXR5cGVzY3JpcHQiLCJhdXRoX3RpbWUiOjE1OTAwOTM1NTAsInVzZXJfaWQiOiI5NDdZc1VPUHZKWTRSeW5GdzFlZkY0ZmY3SXExIiwic3ViIjoiOTQ3WXNVT1B2Slk0UnluRncxZWZGNGZmN0lxMSIsImlhdCI6MTU5MDA5MzU1MCwiZXhwIjoxNTkwMDk3MTUwLCJlbWFpbCI6InVzZXI0QGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyNEBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XPmOybety_Sat6pkzjDsFZqhMkSwztqmXC3xCItUC3W_NxJJwoHfB9t-5ef1Lllio1Cek8p6J6MQOk7B8MBVOf_m9B6hEdHLoUIRah_DSKpPSlK1qu8cn0tyANP16RV0fukrKlCLgm5C27_3kXca_9ajQ-gcHZ2bw4dGMmKqz78h_KI3kFwqKq6yqLVzZJTueMywDg2MLr1YEVNePNhn1p-XPXAe4En09Z5nqMAkQpd0uH7QCtmy1PEMkNOALeX_e6tIttj0Mp8mk20-7FvB2B8TyxgYssZCwJ1eYBV2tZJUt9gwn5ukiglmDTru_CqS_EVeZDWkTMDG8Pss5z_dzg",
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
  const renderCard = (id: PostData) => {
    const newDate = new Date(id.createdAt);
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
                {id.totalResponses} responses.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => clickCard(id.postId)}
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
