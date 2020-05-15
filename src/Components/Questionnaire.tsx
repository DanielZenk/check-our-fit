import React from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, TextField, MenuItem } from "@material-ui/core";

interface Props {
  questions?: Array<{
    questionText: string;
    // answers: Array<{

    // }>;
  }>;
}

const styles = makeStyles({
  question: {
    marginBottom: "15px",
    width: "95%",
    marginLeft: "5px",
  },
  questionsBlock: {
    marginTop: "15px",
  },
});

export const Questionnaire = ({ questions }: Props) => {
  const classes = styles();

  const renderQuestions = () => {
    if (!questions) return;
    return questions.map((question) => {
      return (
        <TextField
          className={classes.question}
          select
          label={question.questionText}
        >
          {/* {question.answers.map((answer) => {
            return (
              <MenuItem key={answer} value={answer}>
                {answer}
              </MenuItem>
            );
          })} */}
        </TextField>
      );
    });
  };

  return (
    <>
      <div>
        <FormControl className={classes.questionsBlock} fullWidth>
          {questions ? renderQuestions() : null}
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <Button>Submit</Button>
          <Button>Clear</Button>
          <Button>Skip</Button>
        </FormControl>
      </div>
    </>
  );
};
