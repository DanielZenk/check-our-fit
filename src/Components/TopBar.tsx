import React from "react";
//material components
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    width: 250,
  },
  appbar: {
    backgroundColor: "#9b0a0a",
    color: "white",
    textAlign: "center",
    width: "100%",
    top: "auto",
    bottom: 0,
  },
  button: {
    color: "white",
  },
  grow: {
    flexGrow: 1,
  },
});

export const TopBar: React.FC = () => {
  const classes = styles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowBackIcon />
          </IconButton>
          <div className={classes.grow} />
          <Button className={classes.button}>Next</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
