import React, { useEffect, useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Input,
} from "@material-ui/core";
//created components
import { PostCard } from "../../Components/PostCard";
import { ImageCarousel } from "../../Components/ImageCarousel";

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

interface fileObject {
  target: {
    files: Array<object>;
  };
}

export const Upload: React.FC<Props> = () => {
  const [post, setPost] = useState<Array<PostData> | undefined>(undefined);

  const [images, setImages] = useState<Array<string> | undefined>(undefined);

  const [image, setImage] = useState<any>(null);

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

  const handleEditPicture = () => {
    const fileInput = document.getElementById("image-upload");
    if (fileInput) fileInput.click();
    else return;
  };

  const handleImageChange = (event: any) => {
    console.log(event.target.files);
    let tempArr: Array<string> = [];
    Object.values(event.target.files).forEach((image: any) => {
      tempArr.push(URL.createObjectURL(image));
    });
    console.log(tempArr);
    setImages(tempArr);
  };

  return (
    <div className={classes.root}>
      <>
        <Typography className={classes.header}>
          First, add some images!
        </Typography>

        <input
          hidden
          multiple
          type="file"
          id="image-upload"
          onChange={(e) => handleImageChange(e)}
        />
      </>
      <>
        <Button color="primary" onClick={handleEditPicture}>
          Add Image
        </Button>
      </>
      <div>{images ? <ImageCarousel images={images} /> : null}</div>
    </div>
  );
};