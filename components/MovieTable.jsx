import React, { useState, useEffect } from 'react';
import styles from './MovieTable.module.css';

function MovieTable() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('movie');

  useEffect(() => {
    const query = searchQuery.trim() === '' ? 'movie' : searchQuery;

    const apiKey = 'fcf74b8d';
    const apiUrl = `https://www.omdbapi.com/?s=${query}&type=movie&page=${page}&apikey=${apiKey}`;

    async function fetchMovies() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovies();
  }, [page, searchQuery]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Movies from OMDB API</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <table className={styles.movietable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td className={styles.movietitle}>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
              <td>
                <img
                  className={styles.movieposter}
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default MovieTable;
