import React from 'react';
import Navbar from './Navbar';
import MoviesSection from './MoviesSection';
const HomePage = ({movies}) => {
    return (
        <>
        <Navbar />
        <MoviesSection movies={movies}/>
    </>
  )
}

export default HomePage