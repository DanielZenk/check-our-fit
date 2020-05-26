import React, { useState } from "react";
//material components
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Fab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  changePage: (page: string) => void;
}

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

export const BottomBar: React.FC<Props> = ({ changePage }) => {
  const [drawerOpen, toggleDrawer] = useState(false);

  const classes = styles();

  const listItemClicked = (newPage: string) => {
    changePage(newPage);
    toggleDrawer(false);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Fab aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <List className={classes.root}>
            <ListItem button onClick={() => listItemClicked("Browse")}>
              <ListItemText primary={"Browse"} />
            </ListItem>
            <ListItem button onClick={() => listItemClicked("Upload")}>
              <ListItemText primary={"Upload"} />
            </ListItem>
            <ListItem button onClick={() => listItemClicked("Your Posts")}>
              <ListItemText primary={"Your Posts"} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
};
