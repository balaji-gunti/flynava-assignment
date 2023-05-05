import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import "./Navbar.css"
import { Search } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    
    const options = ["Home", "Genre", "Comedy", "Action", "Romance", "Top IMDB"];

    const navigate = useNavigate();
    
    const handleLogin = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Stack className='navbar' spacing={5} direction='row' >
        <h2 id='title' >Wookie</h2>
        <Stack spacing={2} direction='row' className='navbar__options' >
            {options.map((option) => {
                return(
                    <span className='option' key={option} >{option}</span>
                )
            } )}
             <Stack direction='row' spacing={1} >
                <TextField
                    sx={{color: "gray"}}
                    fullWidth
                    className="search"
                    size="small"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <Search color="primary" />
                        </InputAdornment>
                    ),
                    }}
                    placeholder="Enter Keywords here"
                    name="search"
                />
                <Button onClick={handleLogin} variant="contained"> Login </Button>
             </Stack>
        </Stack>
    </Stack>
  )
}

export default Navbar