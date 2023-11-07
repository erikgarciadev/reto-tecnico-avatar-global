import ButtonBack from "../../components/ButtonBack";
import FullCharacterCard from "../../components/FullCharacterCard";
import Layout from "../../layouts";
import { TITLES } from "../../utils/constants";
import useCharacter from "./useCharacter";

export default function Character() {
  const { characterData } = useCharacter();

  return (
    <Layout title={TITLES.DETAIL_CHARACTER}>
      <div className="wrapper px-3 py-8">
        <div className="mb-2">
          <ButtonBack />
        </div>
        {characterData ? (
          <FullCharacterCard fullCharacterData={characterData} />
        ) : null}
      </div>
    </Layout>
  );
}
