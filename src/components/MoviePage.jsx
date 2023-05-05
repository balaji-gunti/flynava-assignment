import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import "./MoviePage.css";
import AdjustIcon from '@mui/icons-material/Adjust';
import { Stack } from '@mui/material';

const MoviePage = ({movies}) => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === id);
    const releaseYear = new Date(movie.released_on).getFullYear();
  return (
    <>
        <Navbar />
       <div className='moviepage' >
             <p>Home / Movies / <span className='text' > {movie.title} </span> </p>
            <br />
            <div className="movie-details">
                <div className="movie-image">
                    <img src={movie.poster} alt={movie.title} />
                </div>
                <div className="movie-info">
                    <h1><span className='text' >{movie.title}</span></h1>
                    <Stack direction='row' spacing={2} className="rating">
                        <p> <span className='imdb' >IMDb</span>  {movie.imdb_rating}</p>
                        <p className='length'><AdjustIcon /> {movie.length}</p>
                    </Stack>
                    <p>{movie.overview}</p>
                    <p>Director: {movie.director}</p>
                    <p>Stars: <span className='text'>{movie.cast.join(', ')}</span></p>
                    <p>Genres: <span className='text' >{movie.genres.join(', ')}</span></p>
                    <p>Released On:<span className='text' > {releaseYear}</span></p>
                </div>
            </div>
       </div>
    </>

  )
}

export default MoviePage