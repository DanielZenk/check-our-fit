import React, { useState, useContext } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, TextField, MenuItem } from "@material-ui/core";
//user context
import { UserContext } from "../Context/UserContext";

interface Props {
  questions?: Array<{
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
    totalResponses: number;
  }>;
  postId?: string;
}

interface answersObject {
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
}

const styles = makeStyles({
  question: {
    marginBottom: "15px",
    width: "95%",
    marginLeft: "5px",
  },
});

export const Questionnaire: React.FC<Props> = ({ questions, postId }) => {
  const classes = styles();

  const [answers, setAnswers] = useState<Array<number>>([]);

  const userObj = useContext(UserContext);

  const renderAnswers = (answers: answersObject) => {
    return Object.entries(answers).map((entry) => {
      return (
        <MenuItem key={entry[0]} value={entry[0]}>
          {entry[1].answerText}
        </MenuItem>
      );
    });
  };

  const setOneAnswer = (
    e: { value: string; name: string | undefined },
    index: number
  ) => {
    var temp = answers;
    temp[index] = parseInt(e.value, 10);
    setAnswers(temp);
  };

  const renderQuestions = () => {
    if (!questions) return;

    return questions.map((question, index) => {
      return (
        <TextField
          key={index}
          select
          className={classes.question}
          label={question.questionText}
          onChange={(e) => setOneAnswer(e.target, index)}
          defaultValue=""
        >
          {renderAnswers(question.answers)}
        </TextField>
      );
    });
  };

  const submitAnswers = () => {
    const answersObj = { answers };
    fetch(
      `https://us-central1-fashionable-typescript.cloudfunctions.net/api/post/${postId}/answer`,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${userObj.token}`,
        },
        body: JSON.stringify(answersObj),
      }
    )
      .then((result) => {
        result.json();
      })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <div>
        <FormControl fullWidth>
          {questions ? renderQuestions() : null}
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          {postId ? (
            <>
              <Button onClick={() => submitAnswers()}>Submit</Button>
              <Button>Clear</Button>
              <Button>Skip</Button>
            </>
          ) : null}
        </FormControl>
      </div>
    </>
  );
};
