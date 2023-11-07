import React from "react";
import { useParams } from "react-router-dom";
import AnimeService from "../../services/animeService";
import { CharacterData } from "../../interfaces/characters";

export default function useCharacters() {
  const [charactersData, setCharactersData] = React.useState<CharacterData[]>(
    []
  );
  const { mal_id } = useParams<{ mal_id: string }>();

  React.useEffect(() => {
    const getCharacters = async () => {
      const data = await AnimeService.getCharacters({ mal_id: Number(mal_id) });
      console.log(data);
      setCharactersData(data.data);
    };
    getCharacters();
  }, [mal_id]);

  return {
    charactersData,
  };
}
