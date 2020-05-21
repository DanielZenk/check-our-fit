import React, { useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, TextField, MenuItem } from "@material-ui/core";

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
  postId: string;
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
    const questions = { questions: answers };
    fetch(
      `https://us-central1-fashionable-typescript.cloudfunctions.net/api/post/${postId}/answer`,
      {
        method: "post",
        headers: {
          Authentication: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1YzlhZWJlMjM0ZGE2MDE2YmQ3Yjk0OTE2OGI4Y2Q1YjRlYzllZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFzaGlvbmFibGUtdHlwZXNjcmlwdCIsImF1ZCI6ImZhc2hpb25hYmxlLXR5cGVzY3JpcHQiLCJhdXRoX3RpbWUiOjE1OTAwMDkxMDYsInVzZXJfaWQiOiI0SUg2c2k1NTNQWXpYbnl0Qk9jMjkyVUNiQnYyIiwic3ViIjoiNElINnNpNTUzUFl6WG55dEJPYzI5MlVDYkJ2MiIsImlhdCI6MTU5MDAwOTEwNiwiZXhwIjoxNTkwMDEyNzA2LCJlbWFpbCI6InVzZXIyQGVtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyMkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JCq5cfwWTQ0SlPe2WoesNRPE81k4SEQ_p9EKfFghWuGCQAkhohFuiWbjeqjHp1g-EXVHEeGEdZ9ETtROZVgGArilDEn-QRmjtpFFxKtWFaBhP-VFKiqoZAayn-TqpoV-9Ov_ddi5QMP9sHyiLTW0be0uk7MTdd1Lw__T7daGTXrHfAlEpWMOmYl19FQKlexszj40jV9fmDZI0zcR0qIYw5tszPMP7j6QxQOuRuQT7DlpIE3gw4_Ic59alMzeibjrI52PHZC55LDaxTinB7IhmfxNWa8lHIv1v07BQmG2rpyZnS9nzX5Wp6CXCS8Y1hjoTuSmo9MYn6fHzXTlUOhYGw`,
        },
        body: JSON.stringify(questions),
      }
    )
      .then((result) => {
        result.json();
      })
      .then((result) => {
        console.log(result);
      });
    // const test = "posts";
    // fetch(`/api/${test}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
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
          <Button onClick={() => submitAnswers()}>Submit</Button>
          <Button>Clear</Button>
          <Button>Skip</Button>
        </FormControl>
      </div>
    </>
  );
};
