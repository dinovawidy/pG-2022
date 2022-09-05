import {
  TextField,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import Gap from "./Gap/Gap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";

const Login = ({handleChange}) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0px auto",
  };
  const [username,setUsername]=useState('');
  const [password, setPassword]=useState('');
  const avatarStyle = { backgroundColor: "#2196f3" };
  const btnstyle = {margin: '8px 0'}
  // const initialValues = {
  //   username: '',
  //   password: '',
  //  // remember:false
  // }

  const onChangeUsername = (e) => {
    const value = e.target.value
    setUsername(value)
  }

  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const submitLogin = () => {
    console.log({ username, password })
    axios.post('http://localhost:8080/api/login', {
      username: username,
      password: password
    },{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .then(result => {
        console.log(result)
      })
    // axios.post('pg.ancrek.my.id/api/login', data)
    // .then(result => {
    //   console.log(result)sadfasfsdf
    // })
  }
  const validationSchema = Yup.object().shape({
    username:Yup.string().required('Required'),
    password:Yup.string().required("required")
  })

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
 
        <TextField id="standard-basic" variant="standard" label="Username" name="username" placeholder="Enter Username" value={username} onChange={onChangeUsername} fullWidth required 
          />
        <TextField id="standard-basic" variant="standard" label="Password" name="password" placeholder="Enter Password" type="password" value={password} onChange={onChangePassword} fullWidth required 
        />
        <FormControlLabel
          name="remember"
          control={<Checkbox color="primary" />}
          label="Remember Me"
        />
        <Button type="submit" color="primary" variant="contained"
         style={btnstyle} onClick={submitLogin} fullWidth >
          
          sign in

        </Button>

              
        <Typography>
          <Link href="#">Forgot Your Password</Link>
        </Typography>
        <Gap height={20} />
        <Typography>
          Do You Have An Account
          <Link href="#" onClick={() => handleChange("event", 1)}> Sign Up </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
