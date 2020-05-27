import React from "react";
//material components
import { AppBar, Toolbar, IconButton, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

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
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  grow: {
    flexGrow: 1,
  },
});

export const BottomBar: React.FC = () => {
  const classes = styles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/Upload">
            <Fab aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
          </Link>
          <div className={classes.grow} />
          <Link to="/UserPosts">
            <IconButton edge="end" color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
