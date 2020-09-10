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
    backgroundColor: "#449872",
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
  nextDisabled: boolean;
}

export const TopBar: React.FC<Props> = ({
  onNextClick,
  onBackClick,
  currPage,
  nextDisabled,
}) => {
  const classes = styles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
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
          <Button
            disabled={nextDisabled}
            className={classes.button}
            onClick={() => onNextClick()}
          >
            {currPage === 2 ? <>Post</> : <>Next</>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
