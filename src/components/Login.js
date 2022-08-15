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
import React from "react";
import Gap from "./Gap/Gap";

const Login = ({handleChange}) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#2196f3" };
  const btnstyle = {margin: '8px 0'}
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember Me"
        />
        <Button type="submit" color="primary" style={btnstyle} fullWidth variant="contained">
          Sign In
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
