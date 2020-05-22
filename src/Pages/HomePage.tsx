import React, { useState, createContext, useContext } from "react";
//material components
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
//main page component
import { Main } from "./MainPage/Main";
import SignUp from "./SignUpPage/SignUp";
//user context
import { UserContext } from "../Context/UserContext";

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

function HomePage() {
  const [login, setLogin] = useState(false);
  const [signUp, toggleSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passVis, togglePassVis] = useState(false);
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
    token: "",
  });

  const attemptLogin = () => {
    console.log(email);
    console.log(pass);
    const loginObj = {
      email,
      password: pass,
    };
    fetch("/api/login", {
      method: "post",
      body: JSON.stringify(loginObj),
    })
      .then((res) => res.json())
      .then((res) => {
        setUserObj({
          email,
          password: pass,
          token: res.token,
        });
        setLogin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPage = () => {
    if (login) {
      return (
        <UserContext.Provider value={userObj}>
          <Main user="daniel" />
        </UserContext.Provider>
      );
    }
    if (signUp) {
      return <SignUp />;
    }
    return (
      <div>
        <>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            className={classes.textField}
          />
        </>
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
          <Button
            onClick={() => attemptLogin()}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Log In
          </Button>
        </div>
        <div>
          <Button
            onClick={() => toggleSignUp(true)}
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

  const classes = styles();
  return <div className={classes.root}>{renderPage()}</div>;
}

export default HomePage;
