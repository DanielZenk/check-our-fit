import React, { useState, useContext } from "react";
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
} from "@material-ui/core";
//carousel components
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
//created components
import { PostCard } from "../../Components/PostCard";
import { ImageCarousel } from "../../Components/ImageCarousel";
import { QuestionCreation } from "../../Components/QuestionCreation";
import { TopBar } from "../../Components/TopBar";
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
  images?: Array<string>;
}

interface UploadFormat {
  questions: Array<{
    questionText: string;
    answers: Array<string>;
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
    top: "50px",
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
  slider: {
    top: "50px",
  },
});

interface fileObject {
  target: {
    files: Array<object>;
  };
}

export const Upload: React.FC = () => {
  const userObj = useContext(UserContext);

  const [post, setPost] = useState<PostData | undefined>(undefined);

  const [finalPost, setFinalPost] = useState<UploadFormat | undefined>(
    undefined
  );

  const [currPage, setPage] = useState(0);

  const [numQuestions, addQuestion] = useState(0);

  const [questions, modifyQuestions] = useState<Array<QuestionFormat>>([]);

  const [images, setImages] = useState<Array<string> | undefined>(undefined);

  const premadeQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const classes = styles();

  const onQuestionChange = (questionText: string, questionNumber: number) => {
    var temp = questions;
    temp[questionNumber].questionText = questionText;
    modifyQuestions(temp);
  };

  const onDelete = (question: QuestionFormat, questionIndex: number) => {
    const temp = questions;
    temp[questionIndex] = question;
    modifyQuestions(temp);
  };

  const onAnswerChange = (
    answerText: string,
    questionNumber: number,
    answerNumber: number
  ) => {
    var temp = questions;
    temp[questionNumber].answers[answerNumber] = answerText;
    modifyQuestions(temp);
  };

  const renderIndividualQuestion = (
    question: QuestionFormat,
    index: number
  ) => {
    return (
      <QuestionCreation
        index={index}
        modifyQuestion={(t, n) => onQuestionChange(t, n)}
        modifyAnswer={(t, qN, aN) => onAnswerChange(t, qN, aN)}
        onDelete={(q, i) => onDelete(q, i)}
      />
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

  //format the questions to be an object accepted by the post card,
  // and by the api
  // this is pretty FUBAR, need to reformat stuff on the backend.
  // It works but its ugly so it'll be changed in the near future
  const formatQuestions = () => {
    var newPost: PostData = { questions: [] };
    var uploadFormattedPost: UploadFormat = {
      questions: [{ questionText: "", answers: [""] }],
    };
    questions.forEach((question, index) => {
      newPost.images = images;
      newPost.questions[index] = {
        questionText: "",
        totalResponses: 0,
        answers: {},
      };
      newPost.questions[index].questionText = question.questionText;
      uploadFormattedPost.questions[index] = {
        questionText: "",
        answers: [""],
      };
      uploadFormattedPost.questions[index].questionText = question.questionText;
      uploadFormattedPost.questions[index].answers = question.answers;
      if (question.answers.length === 2) {
        newPost.questions[index].answers = {
          0: { answerText: question.answers[0], timesAnswered: 0 },
          1: { answerText: question.answers[1], timesAnswered: 0 },
        };
      } else if (question.answers.length === 3) {
        newPost.questions[index].answers = {
          0: { answerText: question.answers[0], timesAnswered: 0 },
          1: { answerText: question.answers[1], timesAnswered: 0 },
          2: { answerText: question.answers[2], timesAnswered: 0 },
        };
      } else if (question.answers.length === 4) {
        newPost.questions[index].answers = {
          0: { answerText: question.answers[0], timesAnswered: 0 },
          1: { answerText: question.answers[1], timesAnswered: 0 },
          2: { answerText: question.answers[2], timesAnswered: 0 },
          3: { answerText: question.answers[3], timesAnswered: 0 },
        };
      }
    });
    setPost(newPost);
    setFinalPost(uploadFormattedPost);
  };

  const handleNextClick = () => {
    if (currPage === 2) {
      formatQuestions();
      setPage(currPage + 1);
    } else if (currPage === 3) {
      fetch(`/api/post`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${userObj.token}`,
        },
        body: JSON.stringify(finalPost),
      })
        .then((result) => result.json())
        .then((result) => console.log(result));
    } else {
      setPage(currPage + 1);
    }
  };

  return (
    <div>
      <TopBar
        currPage={currPage}
        onBackClick={() => setPage(currPage - 1)}
        onNextClick={() => handleNextClick()}
      />
      <AwesomeSlider
        className={classes.slider}
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
          </div>
        </div>
        <div className={classes.carouselItem}>
          <div className={classes.carouselContent}>
            <div className={classes.questionForm}>{renderQuestionForm()}</div>
          </div>
        </div>
        <div className={classes.carouselItem}>
          <div className={classes.carouselContent}>
            {post ? <PostCard post={post} /> : null}
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};
