import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    performApiCall();
  }, []);

  const performApiCall = async () => {
    const response = await axios.get("https://wookie.codesubmit.io/movies", {
      headers: {
        Authorization: `Bearer Wookie2019`,
      },
    });
    setMovies(response.data.movies);
    console.log(movies);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movies/:id" element={<MoviePage movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
