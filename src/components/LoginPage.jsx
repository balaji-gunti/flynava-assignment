import { Box, Button, CircularProgress, FormControlLabel, Radio, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {
    const [formData, setFormData] = useState({
    Email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { Email, password } = formData;

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = (formData) => {
    setLoading(true);
    setTimeout(() => {
        const token = "Wookie2019";
        setLoading(false);
        return token;
    }, 500);
    navigate("/");
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className="content">
        <Stack spacing={2} className="form">
         <Box className="titles">
             <h2 className="title">Welcome</h2>
             <p className='subtitle'>Sign in using</p>
         </Box>
          <TextField
            id="Email"
            name="Email"
            value={Email}
            onChange={handleOnChange}
            label="Email"
            variant="outlined"
          />
          <TextField
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            label="Password"
            variant="outlined"
          />
              <Box className="options">
                <form>
                    <input type="checkbox" id="rememberme" name="rememberMe" value="RememberMe" />
                    <label for="remeberme"> Remember me</label>
                </form>
                <Button variant="text">Reset Password</Button>
              </Box>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress size={25} color="primary" />
            </Box>
          ) : (
            <Button
            className="button"
              variant="contained"
              onClick={() => {
                login(formData);
              }}
            >
              Continue
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default LoginPage