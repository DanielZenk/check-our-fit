import React, { useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
//react router components
import { Switch, Route, Redirect } from "react-router-dom";
//main page component
import SignUp from "./SignUpPage/SignUp";
import { Browse } from "./BrowsePage/Browse";
import { Upload } from "./UploadPage/Upload";
import { UserPosts } from "./PostsPage/UserPosts";
import { Login } from "./LoginPage/Login";
//user context
import { UserContext } from "../Context/UserContext";
//routes
import { BottomBar } from "../Components/BottomBar";

const styles = makeStyles({
  root: {
    textAlign: "center",
  },
});

interface errorObj {
  email: string | undefined;
  password: string | undefined;
  general: string | undefined;
}

function HomePage() {
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
    token: "",
  });

  const classes = styles();

  return (
    <div className={classes.root}>
      <UserContext.Provider value={userObj}>
        <Switch>
          <Route exact path="/login">
            <Login onSuccessfulLogin={(e) => setUserObj(e)} />
          </Route>
          <Route exact path="/">
            <Browse />
          </Route>
          <Route
            path="/Upload"
            render={({ location }) =>
              userObj.token.length > 0 ? (
                <Upload />
              ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: location } }}
                />
              )
            }
          ></Route>
          <Route
            exact
            path="/UserPosts"
            render={({ location }) =>
              userObj.token.length > 0 ? (
                <UserPosts />
              ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: location } }}
                />
              )
            }
          />
        </Switch>

        <BottomBar changePage={(e) => console.log(e)} />
      </UserContext.Provider>
    </div>
  );
}

export default HomePage;
