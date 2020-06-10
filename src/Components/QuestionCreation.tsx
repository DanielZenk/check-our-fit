import React, { useState } from "react";
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
            />
          </>
          {answers.map((answer, index) => {
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
