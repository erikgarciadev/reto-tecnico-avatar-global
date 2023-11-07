import React from "react";
import { TYPES, WORD_SEARCH } from "../../utils/constants";
import AnimeService from "../../services/animeService";
import { Movie } from "../../interfaces/movie";
import { PageState } from "../../interfaces/util";

export default function useMovies() {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.LOADING
  );
  const [movies, setMovies] = React.useState<Movie[]>([]);
  React.useEffect(() => {
    const getMovies = async () => {
      try {
        setPageState(PageState.LOADING);
        const data = await AnimeService.getMovies({
          search: WORD_SEARCH,
          type: TYPES.MOVIE,
        });
        setMovies(data.data);
        setPageState(PageState.SUCCESS);
      } catch (error) {
        setPageState(PageState.ERROR);
      }
    };
    getMovies();
  }, []);

  return { movies, pageState };
}
