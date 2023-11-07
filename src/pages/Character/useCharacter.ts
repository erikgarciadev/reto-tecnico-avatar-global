import React from "react";
import { useParams } from "react-router-dom";
import AnimeService from "../../services/animeService";
import { FullCharacter } from "../../interfaces/character";
import { PageState } from "../../interfaces/util";

export default function useCharacter() {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.LOADING
  );
  const [characterData, setCharacterData] =
    React.useState<FullCharacter | null>(null);
  const { character_mal_id } = useParams<{ character_mal_id: string }>();

  React.useEffect(() => {
    const getCharacter = async () => {
      try {
        setPageState(PageState.LOADING);
        const data = await AnimeService.getFullCharacter({
          character_mal_id: Number(character_mal_id),
        });
        setCharacterData(data.data);
        setPageState(PageState.SUCCESS);
      } catch (error) {
        setPageState(PageState.ERROR);
      }
    };
    getCharacter();
  }, [character_mal_id]);

  return {
    characterData,
    pageState,
  };
}
