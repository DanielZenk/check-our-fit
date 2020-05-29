import React, { useEffect, useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
//created components
import { PostCard } from "../../Components/PostCard";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

interface Props {}

interface PostData {
  questions: Array<{
    questionText: string;
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
}

const styles = makeStyles({
  root: {
    textAlign: "center",
  },
  header: {
    marginTop: "10px",
  },
  list: {
    maxHeight: "300px",
    width: "95%",
    margin: "auto",
    overflow: "auto",
    marginTop: "10px",
  },
});

export const Upload: React.FC<Props> = () => {
  const [post, setPost] = useState<Array<PostData> | undefined>(undefined);

  const [images, addImage] = useState(0);

  const premadeQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const classes = styles();

  const renderQuestionForm = () => {
    return (
      <>
        <Typography className={classes.header}>
          Awesome! Let's work on some questions you want to ask the community.
        </Typography>
        <Typography className={classes.header}>
          You can find some premade questions here:
        </Typography>
        <List className={classes.list}>
          {premadeQuestions.map((id) => {
            return (
              <ListItem button key={id}>
                <ListItemText primary={`Premade question ${id}`} />
              </ListItem>
            );
          })}
        </List>
        <Typography className={classes.header}>
          Or you can come up with your own.
        </Typography>
      </>
    );
  };

  return (
    <div className={classes.root}>
      <>
        <Typography className={classes.header}>
          First, add some images!
        </Typography>
      </>
      <>
        <Button color="primary" onClick={() => addImage(images + 1)}>
          Add Image
        </Button>
      </>
      {images > 0 ? renderQuestionForm() : null}
    </div>
  );
};
