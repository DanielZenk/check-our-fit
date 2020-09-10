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
    backgroundColor: "#449872",
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
    backgroundColor: "#627E6F",
  },
  grow: {
    flexGrow: 1,
  },
  iconButtons: {
    color: "#FFFFFF",
  },
  addIconFab: {
    color: "#FFFFFF",
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
              <HomeIcon className={classes.iconButtons} />
            </IconButton>
          </Link>
          <Link to="/Upload">
            <Fab aria-label="add" className={classes.fabButton}>
              <AddIcon className={classes.addIconFab} />
            </Fab>
          </Link>
          <div className={classes.grow} />
          <Link to="/UserPosts">
            <IconButton edge="end" color="inherit">
              <AccountCircleIcon className={classes.iconButtons} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
