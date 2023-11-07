import { CharactersResponse } from "../interfaces/characters";
import { MoviesResponse } from "../interfaces/movie";
import { BASE_URL_API } from "../utils/constants";

class AnimeService {
  static async getMovies({
    search,
    type,
  }: {
    search: string;
    type: string;
  }): Promise<MoviesResponse> {
    const response = await fetch(
      `${BASE_URL_API}/anime?q=${search}&type=${type}`
    );
    const data = await response.json();
    return data;
  }

  static async getCharacters({
    mal_id,
  }: {
    mal_id: number;
  }): Promise<CharactersResponse> {
    const response = await fetch(`${BASE_URL_API}/anime/${mal_id}/characters`);
    const data = await response.json();
    return data;
  }

  static async getFullCharacter({
    character_mal_id,
  }: {
    character_mal_id: number;
  }) {
    const response = await fetch(
      `${BASE_URL_API}/characters/${character_mal_id}/full`
    );
    const data = await response.json();
    return data;
  }
}

export default AnimeService;
