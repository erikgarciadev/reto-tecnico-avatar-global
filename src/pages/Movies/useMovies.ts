import React from 'react'
import {  TYPES, WORD_SEARCH } from "../../utils/constants";
import AnimeService from "../../services/animeService";
import { Movie } from "../../interfaces/movie";

export default function useMovies() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  React.useEffect(() => {
    const getMovies = async () => {
      const data = await AnimeService.getMovies({
        search: WORD_SEARCH,
        type: TYPES.MOVIE,
      });
      setMovies(data.data);
    };
    getMovies();
  }, []);

  return { movies };
}
