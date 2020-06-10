import React, { useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  index: number;
}

const styles = makeStyles({
  card: {
    marginTop: "10px",
  },
  textField: {
    marginBottom: "5px",
  },
});

export const QuestionCreation: React.FC<Props> = ({ index }) => {
  const [cardOpen, toggleCardOpen] = useState(false);

  const [answers, modifyAnswers] = useState(["", ""]);

  const [questionText, setQuestionText] = useState("");

  const classes = styles();

  return (
    <Card raised className={classes.card}>
      <CardHeader title={`Question ${index + 1}`} />
      <CardActions disableSpacing>
        <IconButton onClick={() => toggleCardOpen(!cardOpen)}>
          {cardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </CardActions>
      <Collapse in={cardOpen}>
        <CardContent>
          <>
            <TextField
              className={classes.textField}
              variant="outlined"
              multiline
              rows={3}
              label={`Question`}
              fullWidth
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </>
          {answers.map((answer, answerIndex) => {
            return (
              <>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  label={`Answer ${answerIndex + 1}`}
                  fullWidth
                  onChange={(e) =>
                    modifyAnswers((m) => {
                      m[answerIndex] = e.target.value;
                      return m;
                    })
                  }
                  value={answer}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disabled={answers.length === 2}
                          onClick={() =>
                            modifyAnswers((m) => {
                              m.splice(answerIndex, 1);
                              return m;
                            })
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            );
          })}
          <>
            <Button
              disabled={answers.length >= 4}
              onClick={() => {
                modifyAnswers((m) => m.concat([""]));
              }}
            >
              Add Answer Option
            </Button>
          </>
        </CardContent>
      </Collapse>
    </Card>
  );
};
