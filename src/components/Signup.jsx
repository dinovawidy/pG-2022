import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { blue } from "@mui/material/colors";
import axios from "axios";




const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#2196f3" };
  const marginTop = {margin: 5}
  const selFont = { fontFamily: 'Raleway' }

  const [username,setUsername]=useState('');
  const [name,setName]=useState('');
  // const [gender, setGender]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');


  const onChangeUsername = (e) => {
    const value = e.target.value
    setUsername(value)
  }
  const onChangeName = (e) => {
    const value = e.target.value
    setName(value)
  }
  // const onChangeGender = (e) => {
  //   const value = e.target.value
  //   setGender(value)
  // }


  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }
  const onChangeConfirmPassword = (e) => {
    const value = e.target.value
    setConfirmPassword(value)
  }

  const submitSignup = () => {
    console.log({name, username, password, confirmPassword})
    axios.post('http://localhost:8080/api/register', {
      username: username,
      name: name,
      password: password,
      confirmPassword: confirmPassword
    },{headers: { 'Content-Type': 'application/json' }})
    .then(result => {
      console.log(result)
    })
  }



  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography style={selFont} variant="caption">
            Please Fill This Form To Create An Account!
          </Typography>
        </Grid>
        
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            fullWidth
            name="name"
            label="Name"
            placeholder="Name" 
            value={name} 
            onChange={onChangeName}
            required
          />
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            fullWidth
            name="username"
            label="UserName"
            placeholder="UserName"
            value={username} 
            onChange={onChangeUsername}
            required
          />
          {/* <FormControl style={marginTop}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              
              name="radio-buttons-group"
              style={{display: 'initial'}}
            >
              <FormControlLabel
                name="gender"
                value="female"
                control={<Radio />}
                label="Female"
                onChange={onChangeGender}
              />
              <FormControlLabel 
                name="gender"
                value="male" 
                control={<Radio />} 
                label="Male"
                onChange={onChangeGender} />
            </RadioGroup>
          </FormControl>
          <h1>{gender}</h1> */}
          {/* <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="Phone"
            placeholder="Phone"
          /> */}
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            value={password} 
            onChange={onChangePassword}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            value={confirmPassword} 
            onChange={onChangeConfirmPassword}
          />

          <FormControlLabel control={<Checkbox />} 
          label="I Accept The Term And Condition" />
          <Button type="submit" color="primary" variant="contained"
            onClick={submitSignup}>
            Sign Up
          </Button>
        
      </Paper>
    </Grid>
  );
};

export default Signup;
