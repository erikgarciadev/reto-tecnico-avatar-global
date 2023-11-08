import Layout from "../../layouts";
import { TITLES } from "../../utils/constants";
import CharacterCard from "../../components/CharacterCard";
import ButtonBack from "../../components/ButtonBack";
import useCharacters from "./useCharacters";

export default function Characters() {
  const { charactersData, pageState } = useCharacters();

  return (
    <Layout title={TITLES.LIST_CHARACTERS} pageState={pageState}>
      <div className="wrapper px-3 py-8">
        <div className="mb-2">
          <ButtonBack />
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {charactersData.map((characterData) => (
            <CharacterCard
              key={characterData.character.mal_id}
              role={characterData.role}
              character={characterData.character}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
