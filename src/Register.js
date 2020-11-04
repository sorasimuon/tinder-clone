import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "./axios";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  inputField: {
    marginBottom: 20,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 6,
    width: "100%",
  },
  margin: {
    marginBottom: 60,
  },
  registerButton: {
    color: "white",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}));

function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const history = useHistory();
  const [passwordMatch, setPasswordMatch] = useState(false);

  const match = <p className="passwordMatch"> The two passwords match</p>;
  const noMatch = (
    <p className="passwordNoMatch"> The two passwords do not match</p>
  );

  const [error, setError] = useState(null);

  // Check if both passwords entered are matching
  const checkPasswordMatching = () => {
    console.log("check");
    if (password !== "" || password2 !== "") {
      console.log(password + " / " + password2);
      setPasswordMatch(password === password2 ? true : false);
    }

    console.log(passwordMatch);
  };

  const checkPasswordRule = () => {
    if (password !== "") {
      const regex1 = new RegExp(".{8,}");
      const regex2 = new RegExp("[0-9]+");
      const regex3 = new RegExp("[!@#$%^&*]+");
      if (regex1.test(password)) {
        document.getElementById("pwdRule1").style.color = "green";
      } else {
        document.getElementById("pwdRule1").style.color = "rgb(156, 58, 58)";
      }
      if (regex2.test(password)) {
        document.getElementById("pwdRule2").style.color = "green";
      } else {
        document.getElementById("pwdRule2").style.color = "rgb(156, 58, 58)";
      }
      if (regex3.test(password)) {
        document.getElementById("pwdRule3").style.color = "green";
      } else {
        document.getElementById("pwdRule3").style.color = "rgb(156, 58, 58)";
      }
    }
  };

  useEffect(() => {
    checkPasswordMatching();
    checkPasswordRule();
  }, [password2, password]);

  const registerNewAccount = async (e) => {
    e.preventDefault();
    console.log("Register New account >>> " + email);

    let newAccount = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password2: password2,
      gender: gender,
    };

    console.log(newAccount);

    const req = await axios({
      method: "post",
      url: "/tinder/users/register",
      data: newAccount,
    }).then((res) => {
      console.log("New account created >> " + res.email);
      history.push("/playground");
    });
  };

  return (
    <div className="register">
      <div className="register-container-background">
        <div className="register-container">
          <form className="size" onSubmit={registerNewAccount}>
            <FormControl className="size">
              <h1>New Account</h1>
              <h4>Create your account</h4>

              <FormLabel component="legend" className="label">
                Identifier
              </FormLabel>
              <TextField
                required
                id="inputFirstname"
                type="text"
                className={classes.inputField}
                label="first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                variant="outlined"
                // helperText="Incorrect Entry"
              />
              <TextField
                required
                id="inputLastname"
                type="text"
                className={classes.inputField + " " + classes.margin}
                label="last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                variant="outlined"
              />

              <FormLabel component="legend" className="label">
                Credentials
              </FormLabel>
              <TextField
                required
                id="inputUsername"
                type="email"
                className={classes.inputField}
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                // helperText="Incorrect Entry"
              />
              <TextField
                required
                id="inputPassword"
                type={showPassword ? "text" : "password"}
                className={classes.inputField}
                label="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => {
                          showPassword
                            ? setShowPassword(false)
                            : setShowPassword(true);
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                id="inputPassword2"
                type={showPassword2 ? "text" : "password"}
                className={classes.inputField}
                label="confirm password"
                value={password2}
                onInput={(e) => setPassword2(e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => {
                          showPassword2
                            ? setShowPassword2(false)
                            : setShowPassword2(true);
                        }}
                      >
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="passwordRules">
                <p>Password must contain:</p>

                <ul className={"passwordRules passwordRules-red"}>
                  <li id="pwdRule1">At least 8 characters</li>
                  <li id="pwdRule2">At least 1 number</li>
                  <li id="pwdRule3">
                    At least 1 special character among: ! @ # $ % ^ & *
                  </li>
                </ul>

                {passwordMatch ? match : noMatch}
              </div>

              <FormLabel component="legend" className="label">
                Gender (optional)
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={classes.margin}
              >
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="M" control={<Radio />} label="Male" />
                <FormControlLabel value="O" control={<Radio />} label="Other" />
              </RadioGroup>

              <p className="textAgreement">
                By clicking Sign Up, you agree to our Terms. Learn how we
                collect, use and share your data in our Data Policy and how we
                use cookies and similar technology in our Cookies Policy. You
                may receive SMS Notifications from us and can opt out any time.
              </p>

              <Button
                type="submit"
                className={classes.registerButton}
                variant="contained"
              >
                Create New Account
              </Button>
              {/* Error */}
              {error && <div className="error">{error}</div>}
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
