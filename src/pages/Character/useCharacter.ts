import React from "react";
import { useParams } from "react-router-dom";
import AnimeService from "../../services/animeService";
import { FullCharacter } from "../../interfaces/character";

export default function useCharacter() {
  const [characterData, setCharacterData] =
    React.useState<FullCharacter | null>(null);
  const { character_mal_id } = useParams<{ character_mal_id: string }>();

  React.useEffect(() => {
    const getCharacter = async () => {
      const data = await AnimeService.getFullCharacter({
        character_mal_id: Number(character_mal_id),
      });
      setCharacterData(data.data);
    };
    getCharacter();
  }, [character_mal_id]);

  return {
    characterData,
  };
}
