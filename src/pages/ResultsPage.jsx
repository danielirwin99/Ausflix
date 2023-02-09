import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../styles/ResultsPage.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import "../styles/SearchBar.css";

const ResultsPage = () => {
  const { id } = useParams;
  const [movies, setMovies] = useState([]);
  const [searchId, setSearchId] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const API_KEY = "52a7a71d55639529822b263b27201639";

  function onSearch() {
    fetchMovies(searchId);
  }

  async function fetchMovies(userId) {
    setLoading(true);
    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchId}&page=${pageNumber}&include_adult=false`
      )
      .catch((e) => console.log(e));
    setMovies(data.results);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchMovies();
      setLoading();
    }, 300);
  }, [searchId]);

  return (
    <div className="results__container">
      <SearchBar onSearch={onSearch} setSearchId={setSearchId} />

      <div className="movies__container">
        {loading
          ? new Array(6).fill(0).map((_, index) => (
              <div className="movies__card" key={index}>
                <figure className="image__wrapper">
                  <div className="img__wrapper--skeleton" />
                </figure>
                <div className="description__wrapper">
                  <div className="description__wrapper--skeleton" />
                </div>
              </div>
            ))
          : movies.map((movie) => (
              <div
                className="movies__card"
                onClick={() => navigate(`${movie.id}`)}
                key={movie.id}
              >
                <figure className="image__wrapper">
                  <img
                    className="image"
                    src={`https://image.tmdb.org/t/p/original${
                      movie.poster_path || movie.backdrop_path
                    }`}
                    alt="movie"
                  />
                </figure>
                <div className="description__wrapper">
                  <p className="description__title">
                    {movie.original_title || movie.title}
                  </p>
                  <div className="rating">
                    <AiFillStar className="rating__star" />
                    <p className="rating__number">
                      {movie.vote_average || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ResultsPage;
