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
//user context
import { UserContext } from "../../Context/UserContext";

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
  confirmPassword: string | undefined;
  general: string | undefined;
  handle: string | undefined;
}

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
  const [errors, setErrors] = useState<errorObj>({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    general: undefined,
    handle: undefined,
  });

  const isValidEmail = () => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegEx)) return true;
    else return false;
  };

  const signUpNewUser = () => {
    let tempErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      general: undefined,
    };
    if (email.length === 0) {
      tempErrors.email = "Must not be empty";
    } else if (!isValidEmail()) {
      tempErrors.email = "Must be a valid email";
    }
    if (pass.length === 0) {
      tempErrors.password = "Must not be empty";
    } else if (pass !== confirmPass) {
      tempErrors.confirmPassword = "Passwords must match";
    }
    if (user.length === 0) {
      tempErrors.handle = "Must not be empty";
    }

    if (
      tempErrors.email.length > 0 ||
      tempErrors.password.length > 0 ||
      tempErrors.confirmPassword.length > 0 ||
      tempErrors.handle.length > 0
    ) {
      setErrors(tempErrors);
      return;
    }

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
        if (!res.token) {
          setErrors({
            email: res.email,
            password: res.password,
            confirmPassword: res.confirmPassword,
            general: res.general,
            handle: res.handle,
          });
          return;
        }
        setContextValue({
          email,
          password: pass,
          token: res.token,
        });
        isSignedUp(true);
      });
  };

  const decideEmailError = () => {
    if (errors.email) {
      return errors.email;
    }
    if (errors.general) return errors.general;
    return undefined;
  };

  const decideUserError = () => {
    if (errors.handle && user.length === 0) {
      return errors.handle;
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

  const decideConfirmPasswordError = () => {
    if (errors.confirmPassword) {
      return errors.confirmPassword;
    }
    if (errors.general) return errors.general;
    return undefined;
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
            error={decideEmailError() ? true : false}
            helperText={decideEmailError()}
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setUser(e.target.value)}
            variant="outlined"
            label="Username"
            className={classes.textField}
            error={decideUserError() ? true : false}
            helperText={decideUserError()}
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setPass(e.target.value)}
            variant="outlined"
            label="Password"
            error={decidePasswordError() ? true : false}
            helperText={decidePasswordError()}
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
            error={decideConfirmPasswordError() ? true : false}
            helperText={decideConfirmPasswordError()}
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
        <UserContext.Provider value={contextValue}></UserContext.Provider>
      ) : (
        renderSignUpSheet()
      )}
    </div>
  );
}

export default SignUp;
