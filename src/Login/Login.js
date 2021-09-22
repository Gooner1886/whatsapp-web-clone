import { Button } from "@material-ui/core";
import React from "react";
import classes from "./Login.module.css";
import { auth, provider } from "../firebaseConfig";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

const Login = (props) => {
  const [{ user }, dispatch] = useStateValue();
  const signInHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png"
          alt=""
        />
        <div className={classes.login__text}>
          <h1>Sign In to Whatsapp</h1>
        </div>

        <Button onClick={signInHandler}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
