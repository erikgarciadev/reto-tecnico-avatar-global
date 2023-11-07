import React from "react";
import { useParams } from "react-router-dom";
import AnimeService from "../../services/animeService";
import { CharacterData } from "../../interfaces/characters";
import { PageState } from "../../interfaces/util";

export default function useCharacters() {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.LOADING
  );
  const [charactersData, setCharactersData] = React.useState<CharacterData[]>(
    []
  );
  const { mal_id } = useParams<{ mal_id: string }>();

  React.useEffect(() => {
    const getCharacters = async () => {
      try {
        setPageState(PageState.LOADING);
        const data = await AnimeService.getCharacters({
          mal_id: Number(mal_id),
        });
        setCharactersData(data.data);
        setPageState(PageState.SUCCESS);
      } catch (error) {
        setPageState(PageState.ERROR);
      }
    };
    getCharacters();
  }, [mal_id]);

  return {
    charactersData,
    pageState,
  };
}
