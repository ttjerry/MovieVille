/**
 * App Component
 * 
 * This is the main application component that renders the movie search interface.
 * 
 * The JSX element representing the App component.
 */
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import axios from 'axios';

/**
 * API URL for OMDB API
 * 
 * @type {string}
 */
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3f48c3cc';

/**
 * App Component Function
 * 
 * @returns {JSX.Element} The JSX element representing the App component.
 */
const App = () => {
  /**
   * State variable to store the search term
   * 
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * State variable to store the list of movies
   * 
   */
  const [movies, setMovies] = useState([]);

  /**
   * Search for movies by title
   * 
   * The title of the movie to search for
   */
  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Effect hook to search for movies on initial render
   */
  useEffect(() => {
    searchMovies('batman');
  }, []);

  return (
    <div className="app">
      <h1>MovieVille</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;