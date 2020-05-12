import React from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, TextField, MenuItem } from "@material-ui/core";

interface Props {}

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

export const Questionnaire: React.FC<Props> = () => {
  const classes = styles();

  const questions = [
    {
      question: "What are pigs?",
      answers: ["mammals", "reptiles", "insects", "other"],
    },
    {
      question: "What are pigs?",
      answers: ["mammals", "reptiles", "insects", "other"],
    },
    {
      question: "What are pigs?",
      answers: ["mammals", "reptiles", "insects", "other"],
    },
  ];

  function renderQuestions() {
    return questions.map((question) => {
      return (
        <TextField
          className={classes.question}
          select
          label={question.question}
        >
          {question.answers.map((answer) => {
            return (
              <MenuItem key={answer} value={answer}>
                {answer}
              </MenuItem>
            );
          })}
        </TextField>
      );
    });
  }

  return (
    <>
      <div>
        <FormControl className={classes.questionsBlock} fullWidth>
          {renderQuestions()}
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
