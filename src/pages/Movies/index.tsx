import Layout from "../../layouts";
import { TITLES } from "../../utils/constants";
import MovieCard from "../../components/MovieCard";
import useMovies from "./useMovies";

export default function Movies() {
  const { movies } = useMovies();

  return (
    <Layout title={TITLES.LIST_MOVIES}>
      <div className="wrapper px-3 py-8">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {movies.map((movie) => (
            <MovieCard key={movie.mal_id} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
