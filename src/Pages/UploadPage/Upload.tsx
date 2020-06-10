import React, { useEffect, useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Fab,
  ListItemSecondaryAction,
  Checkbox,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
//carousel components
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
//created components
import { PostCard } from "../../Components/PostCard";
import { ImageCarousel } from "../../Components/ImageCarousel";

import { ImageCarouselV2 } from "../../Components/ImageCarouselV2";

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

interface QuestionFormat {
  questionText: string;
  answers: Array<string>;
}

const styles = makeStyles({
  root: {
    textAlign: "center",
  },
  header: {
    marginTop: "10px",
  },
  list: {
    width: "95%",
    margin: "auto",
    overflow: "auto",
    marginTop: "10px",
  },
  carousel: {
    maxWidth: "300px",
    margin: "auto",
    maxHeight: "600px",
  },
  questionForm: {
    marginTop: "40px",
  },
  carouselItem: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    margin: "auto",
    overflow: "auto",
  },
  carouselContent: {
    textAlign: "center",
    width: "95%",
    margin: "auto",
  },
  fab: {
    marginBottom: "5px",
  },
  questionContainer: {},
  textField: {
    marginBottom: "5px",
  },
  card: {
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

  const [currPage, setPage] = useState(2);

  const [numQuestions, addQuestion] = useState(0);

  const [questions, modifyQuestions] = useState<Array<QuestionFormat>>([]);

  const [images, setImages] = useState<Array<string> | undefined>(undefined);

  const [openCards, setOpenCards] = useState([false, false, false, false]);

  const premadeQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const classes = styles();

  const renderIndividualQuestion = (
    question: QuestionFormat,
    index: number
  ) => {
    return (
      <Card raised className={classes.card}>
        <CardHeader title={`Question ${index + 1}`} />
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              var temp = openCards;
              temp[index] = !temp[index];
              setOpenCards(temp);
            }}
          >
            {openCards[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </CardActions>
        <Collapse in={openCards[index]}>
          <>
            <TextField
              className={classes.textField}
              variant="outlined"
              multiline
              rows={3}
              label={`Question`}
              fullWidth
            />
          </>
          {question.answers.map((answer, index) => {
            return (
              <>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  label={`Answer ${index + 1}`}
                  fullWidth
                />
              </>
            );
          })}
          <>
            <Button
              onClick={() => {
                var tempAnswers = question.answers;
                tempAnswers.push("");
                var tempQuestions = questions;
                tempQuestions[index].answers = tempAnswers;
                modifyQuestions(tempQuestions);
              }}
            >
              Add Answer Option
            </Button>
          </>
        </Collapse>
      </Card>
    );
  };

  const renderQuestionForm = () => {
    return (
      <>
        <Typography className={classes.header}>
          You can add {4 - numQuestions} more questions.
        </Typography>
        <Button
          className={classes.fab}
          variant="contained"
          disabled={numQuestions >= 4}
          //variant="extended"
          onClick={() => {
            addQuestion(numQuestions + 1);
            var temp = questions;
            temp?.push({ questionText: "", answers: ["", ""] });
            modifyQuestions(temp);
          }}
        >
          Add question
        </Button>
        {questions?.map((question, index) => {
          return <div>{renderIndividualQuestion(question, index)}</div>;
        })}
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
    setImages(tempArr);
  };

  return (
    <div>
      <AwesomeSlider
        fillParent
        mobileTouch={false}
        bullets={false}
        buttons={false}
        selected={currPage}
      >
        <div className={classes.carouselItem}>
          <div className={classes.carouselContent}>
            <Typography className={classes.header}>
              First, add some images!
            </Typography>

            <input
              hidden
              multiple
              type="file"
              id="image-upload"
              onChange={(e) => handleImageChange(e)}
              accept="image/*"
            />
            <>
              <Button color="primary" onClick={handleEditPicture}>
                Add Image
              </Button>
            </>

            <div className={classes.carousel}>
              {images ? (
                <>
                  <ImageCarousel images={images} />
                  <Fab
                    disabled={numQuestions >= 4}
                    variant="extended"
                    onClick={() => setPage(1)}
                  >
                    Lets look at questions!
                  </Fab>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className={classes.carouselItem}>
          <div className={classes.carouselContent}>
            <Typography className={classes.header}>
              You can find some premade questions here:
            </Typography>
            <List className={classes.list}>
              {premadeQuestions.map((id) => {
                return (
                  <ListItem button key={id}>
                    <ListItemText primary={`Premade question ${id}`} />
                    <ListItemSecondaryAction>
                      <Checkbox></Checkbox>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <Typography className={classes.header}>
              Or you can come up with your own.
            </Typography>

            <Fab
              disabled={numQuestions >= 4}
              variant="extended"
              onClick={() => setPage(2)}
            >
              Create my own
            </Fab>
          </div>
        </div>
        <div className={classes.carouselItem}>
          <div className={classes.carouselContent}>
            <div className={classes.questionForm}>{renderQuestionForm()}</div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};
