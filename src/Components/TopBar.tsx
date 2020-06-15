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

interface Props {
  onNextClick: () => void;
  onBackClick: () => void;
  currPage: number;
}

export const TopBar: React.FC<Props> = ({
  onNextClick,
  onBackClick,
  currPage,
}) => {
  const classes = styles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            disabled={currPage === 0}
            onClick={() => onBackClick()}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIcon />
          </IconButton>
          <div className={classes.grow} />
          <Button className={classes.button} onClick={() => onNextClick()}>
            {currPage === 3 ? <>Post</> : <>Next</>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
