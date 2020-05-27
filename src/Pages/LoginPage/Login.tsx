import React, { useState } from "react";
//material components
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
//react router components
import { useHistory, useLocation } from "react-router-dom";

const styles = makeStyles({
  root: {
    textAlign: "center",
  },
  textField: {
    marginTop: "10px",
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

interface errorObj {
  email: string | undefined;
  password: string | undefined;
  general: string | undefined;
}

interface userObjectFormat {
  email: string;
  password: string;
  token: string;
}

interface Props {
  onSuccessfulLogin: (user: userObjectFormat) => void;
}

export const Login: React.FC<Props> = ({ onSuccessfulLogin }) => {
  const [signUp, toggleSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passVis, togglePassVis] = useState(false);
  const [errors, setErrors] = useState<errorObj>({
    email: undefined,
    password: undefined,
    general: undefined,
  });

  let history = useHistory();
  let location = useLocation();
  const from: any = location.state || { from: { pathname: "/" } };

  const isValidEmail = () => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegEx)) return true;
    else return false;
  };

  const attemptLogin = () => {
    let tempErrors = { email: "", password: "", general: "" };
    if (email.length === 0) {
      tempErrors.email = "Must not be empty";
    } else if (!isValidEmail()) {
      tempErrors.email = "Must be a valid email";
    }
    if (pass.length === 0) {
      tempErrors.password = "Must not be empty";
    }
    if (tempErrors.email.length > 0 || tempErrors.password.length > 0) {
      setErrors(tempErrors);
      return;
    }

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
        if (!res.token) {
          setErrors({
            password: res.password,
            email: res.email,
            general: res.general,
          });
          return;
        }
        onSuccessfulLogin({ email, password: pass, token: res.token });
        history.replace(from.from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decideEmailError = () => {
    if (errors.email) {
      return errors.email;
    }
    if (errors.general) return errors.general;
    return undefined;
  };

  const decidePasswordError = () => {
    if (errors.password && pass.length === 0) {
      return errors.password;
    }
    if (errors.general) return errors.general;
    return undefined;
  };

  const renderPage = () => {
    return (
      <div>
        <>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
            className={classes.textField}
            helperText={decideEmailError()}
            error={decideEmailError() ? true : false}
          />
        </>
        <div>
          <TextField
            onChange={(e) => setPass(e.target.value)}
            error={decidePasswordError() ? true : false}
            helperText={decidePasswordError()}
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
};
