import React, { useState } from "react";
//material components
import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
  },
  menuButton: {
    marginRight: "2px",
    marginLeft: "5px",
    width: "35px",
  },
});

export const TopBar: React.FC<Props> = ({ changePage }) => {
  const [drawerOpen, toggleDrawer] = useState(false);

  const classes = styles();

  function listItemClicked(newPage: string) {
    changePage(newPage);
    toggleDrawer(false);
  }

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
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
