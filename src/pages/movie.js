import React, { useEffect, useState } from "react"

export default function MarvelMovies() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState("")

  const getMovies = async () => {
    const API_KEY = "18cd1938"
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=captain&type=movie`

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === "True") {
        setMovies(data.Search)
      } else {
        setError(data.Error)
      }
    } catch (err) {
      setError("Failed to fetch Marvel movies.")
      console.error("Error:", err)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <h1>Marvel Movies</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year})
              <br />
              {movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "100px" }}
                />
              ) : (
                <p>No poster available</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
