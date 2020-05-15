import React, {useState} from 'react';
//material components
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
//main page component
import { Main } from "./MainPage/Main";

const styles = makeStyles({
    root: {
      textAlign: "center"
    },
    textField: {
      marginTop: "10px",
      // backgroundColor: "#9b0a0a",
      color: "white",
      width: "250px"
    },
    button: {
      marginTop: "10px",
      backgroundColor: "#9b0a0a",
      color: "white",
      width: "250px",
      borderRadius: "10px"
    }
});

function HomePage() {
  const [login, setLogin] = useState(false); 

  const classes = styles();
  return (
    <div className={classes.root} >
      {login ?
        <Main user="daniel"/> :
        <div>
          <>
            <TextField variant="outlined" label="Email" className={classes.textField}/>
          </>
          <div>
            <TextField variant="outlined" label="Password" className={classes.textField} />
          </div>
          <div>
            <Button onClick={() => setLogin(true)} variant="contained" color="primary" className={classes.button}>
              Log In
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default HomePage;
