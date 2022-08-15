import React from "react";
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

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#2196f3" };
  const marginTop = {margin: 5}
  const selFont = { fontFamily: 'Raleway' }
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
        <form>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="Name"
            placeholder="Name"
          />
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="Email"
            placeholder="Email"
          />
          <FormControl style={marginTop}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              
              name="radio-buttons-group"
              style={{display: 'initial'}}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="Phone"
            placeholder="Phone"
          />
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            type="password"
            label="Password"
            placeholder="Password"
          />
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
          />
          <FormControlLabel control={<Checkbox />} 
          label="I Accept The Term And Condition" />
          <Button type="submit" color="primary" variant="contained">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
