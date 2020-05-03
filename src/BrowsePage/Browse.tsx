import React, {useState} from 'react'
//material components
import { TextField, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


interface Props {
}

const styles = makeStyles({
  root: {
    flexGrow: 1,
  },
  leftPaper: {
    marginLeft: "10px",
    marginTop: "5px",
    width: "97%",
  },
  rightPaper: {
    width: "95%",
    marginTop: "5px",
  },
});

export const Browse: React.FC<Props> = () => {

  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={8}>
          <Paper className={classes.leftPaper}>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.leftPaper}>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
};
