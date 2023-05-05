import { Box, Stack } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard'

const MoviesSection = ({movies}) => {
  return (
    // sx={{marginLeft: "4rem", marginRight: "2rem"}}
   <Box sx={{margin: " 0rem 4rem"}}>
     <Stack sx={{margin: " 0rem 4rem"}} direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {movies.map((movie) => (
        <Box key={movie.id}>
          <MovieCard movie={movie} />
        </Box>
      ))}
    </Stack>
   </Box>
  )
}

export default MoviesSection