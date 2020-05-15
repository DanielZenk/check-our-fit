import React, { useState } from "react";
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
  const [cardId, clickCard] = useState(0);

  const classes = styles();
  //() => clickCard(id)
  const renderCard = (id: number) => {
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
                Posted time can go here. Amount of responses can go here.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => clickCard(id)}>
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
    const randomArray = [1, 2, 3, 4, 5, 6, 7];
    return randomArray.map((index) => {
      return renderCard(randomArray[index]);
    });
  };

  const renderIndividualPost = () => {
    return <IndividualPost />;
  };

  return (
    <Grid container>
      {cardId === 0 ? renderCards() : renderIndividualPost()}
    </Grid>
  );
};
