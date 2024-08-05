import React from 'react';

/**
 * MovieCard component
 *
 * Displays a single movie card with its details
 *
 * @param {object} movie - Movie object with the following properties:
 *   - imdbID: string
 *   - Year: string
 *   - Poster: string (image URL)
 *   - Title: string
 *   - Type: string
 *
 * @returns {JSX.Element} Movie card component
 *
 * @example
 * <MovieCard movie={{
 *   imdbID: "tt1234567",
 *   Year: "2020",
 *   Poster: "https://example.com/movie-poster.jpg",
 *   Title: "Movie Title",
 *   Type: "Movie"
 * }} />
 */
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;