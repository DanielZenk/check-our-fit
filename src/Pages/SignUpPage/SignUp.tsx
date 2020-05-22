import React, { useState, useContext } from "react";
//material components
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
//user context
import { UserContext } from "../../Context/UserContext";
import { Main } from "../MainPage/Main";

const styles = makeStyles({
  root: {
    textAlign: "center",
  },
  textField: {
    marginTop: "10px",
    // backgroundColor: "#9b0a0a",
    color: "white",
    width: "250px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#9b0a0a",
    color: "white",
    width: "250px",
    borderRadius: "10px",
  },
});

function SignUp() {
  const classes = styles();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [signedUp, isSignedUp] = useState(false);
  const [passVis, togglePassVis] = useState(false);
  const [confirmPassVis, toggleConfirmPassVis] = useState(false);
  const [contextValue, setContextValue] = useState({
    email: "",
    password: "",
    token: "",
  });

  const signUpNewUser = () => {
    const signUpObj = {
      email,
      password: pass,
      confirmPassword: confirmPass,
      handle: user,
    };
    fetch("/api/signup", {
      method: "post",
      body: JSON.stringify(signUpObj),
    })
      .then((res) => res.json())
      .then((res) => {
        setContextValue({
          email,
          password: pass,
          token: res.token,
        });
        isSignedUp(true);
      });
  };

  const renderSignUpSheet = () => {
    return (
      <div>
        <div>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setUser(e.target.value)}
            variant="outlined"
            label="Username"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setPass(e.target.value)}
            variant="outlined"
            label="Password"
            className={classes.textField}
            type={passVis ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => togglePassVis(!passVis)}>
                    {passVis ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setConfirmPass(e.target.value)}
            variant="outlined"
            label="Confirm Password"
            className={classes.textField}
            type={confirmPassVis ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => toggleConfirmPassVis(!confirmPassVis)}
                  >
                    {confirmPassVis ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Button
            onClick={() => signUpNewUser()}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {signedUp ? (
        <UserContext.Provider value={contextValue}>
          <Main user="daniel" />
        </UserContext.Provider>
      ) : (
        renderSignUpSheet()
      )}
    </div>
  );
}

export default SignUp;
