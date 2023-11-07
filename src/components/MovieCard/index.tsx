import { Movie } from "../../interfaces/movie";
import StarIcon from "../Icons/Star";
import ButtonTrailer from "./ButtonTrailer";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  console.log(movie);
  return (
    <div className="bg-white group relative  rounded-lg shadow-lg">
      <div className="flex flex-col p-2 justify-between gap-3">
        <picture>
          <img
            className="w-full object-cover h-64"
            alt="Image Movie"
            src={movie.images.webp.large_image_url}
          />
        </picture>
        <h2 className="font-semibold">{movie.title}</h2>
      </div>
      <div className="group-hover:opacity-100 absolute  opacity-0 top-0 p-2 pb-4 bg-[#1e1d23] h-full text-white flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-lg mb-2">{movie.title}</h2>
          <p className="text-sm flex gap-1 items-center">
            Score: {movie.score} <StarIcon />
          </p>
          <p className="text-sm">Fecha de Estreno: {movie.aired.string}</p>
          {movie.synopsis ? (
            <div>
              <label className="text-xs font-semibold">Sinopsis</label>
              <p className="text-sm text-ellipsis line-clamp-4 overflow-hidden">
                {movie.synopsis}
              </p>
            </div>
          ) : null}
        </div>

        <div>
          {movie.trailer.url ? <ButtonTrailer url={movie.trailer.url} /> : null}
          <button className="w-full font-semibold bg-[#074b86] p-2">
            Ver Personajes
          </button>
        </div>
      </div>
    </div>
  );
}
