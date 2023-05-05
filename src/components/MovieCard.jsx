import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({movie}) => {
  return (
    <Card
        sx={{
        // width: { xs: "100%", sm: "358px", md: "190px" },
        width: "190px",
        boxShadow: "none",
        borderRadius: 0,
        }}
    >
        <CardContent>
             <Link to={`/movies/${movie.id}`}>
                <CardMedia
                    component="img"
                    height="230"
                    image={movie.poster}
                    alt={movie.title}
                    sx={{ 
                        "&:hover": {
                            border: "1px solid #00FF00",
                            color: 'gray',
                            backgroundColor: 'lightblue'
                        }, borderRadius: "10px", objectFit: "contain" }}
                        />
                </Link>
                <Typography  >
                    {movie.title}
                </Typography>

</CardContent>
    </Card>


)
}

export default MovieCard
