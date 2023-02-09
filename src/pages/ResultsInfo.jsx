import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ResultsInfo.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const ResultsInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const API_KEY = "52a7a71d55639529822b263b27201639";

  async function fetchMovieInfo(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    setMovie(data);
    console.log(data);
  }

  useEffect(() => {
    fetchMovieInfo(id);
  }, []);

  return (
    <div className="resultsInfo__container">
      <div className="resultsInfo__image--container">
        <img
          className="resultsInfo__image"
          src={`https://image.tmdb.org/t/p/original${
            movie.poster_path || movie.backdrop_path
          }`}
          alt=""
        />
      </div>
      <div className="resultsInfo__description">
        <Link to="/results">
          <button className="back">
            <IoMdArrowRoundBack />
          </button>
        </Link>
        <h1 className="resultsInfo__title">
          {movie.title || movie.original__title}
        </h1>
        <h2 className="resultsInfo__sub-title">({movie.release_date})</h2>
        <h2 className="resultsInfo__overview">Overview Summary</h2>
        <p className="resultsInfo__para">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default ResultsInfo;
