import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper, Box, Typography } from "@mui/material";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Container = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "20px auto" };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="fullWidth"
        aria-label="disabled tabs example"
        fullWidth
      >
        <Tab fullWidth label="Sign In" />
        <Tab fullWidth label="Sign Up" />
      </Tabs>
      <TabPanel fullWidth value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </Paper>
  );
};

export default Container;
