import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import axios from "./axios";

const useStyles = makeStyles((theme) => ({
  inputField: {
    marginBottom: 20,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 6,
  },
  loginButton: {
    marginBottom: 20,
  },
  registerButton: {
    color: "white",
    backgroundColor: green[500],
    width: "100%",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  margin: {
    marginBottom: 20,
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const connect = async (e) => {
    e.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    const req = await axios
      .post("/tinder/users/login", credentials)
      .then((res) => {
        console.log("Login sucessful >> ", res.email);
        history.push("/playground");
      });
  };

  return (
    <div className="login">
      <div className="login-container-background">
        <div className="login-container">
          <div className="login-container1"></div>
          <form onSubmit={connect}>
            <div className="login-container2">
              <TextField
                error
                id="inputUsername"
                type="email"
                className={classes.inputField}
                label="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                // helperText="Incorrect Entry"
              />
              <TextField
                error
                id="inputUsername"
                type="password"
                className={classes.inputField}
                label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
              <Button
                type="submit"
                className={classes.loginButton + " " + classes.margin}
                variant="contained"
                color="secondary"
              >
                Sign In
              </Button>

              <p> Or </p>

              <Link to="/new-account" className="no-decoration">
                <Button className={classes.registerButton} variant="contained">
                  Create New Account
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
