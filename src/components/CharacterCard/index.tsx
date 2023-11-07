import { Character, Role } from "../../interfaces/characters";
import { PATHS } from "../../utils/constants";
import { Link } from "react-router-dom";
import BadgeRole from "../BadgeRole";

interface Props {
  character: Character;
  role: Role;
}

export default function CharacterCard({ role, character }: Props) {
  return (
    <div className="bg-white flex flex-col justify-between gap-2 p-2 rounded-md shadow-lg">
      <div>
        <picture>
          <img
            className="w-full object-cover h-64"
            alt="Image Character"
            src={character.images.webp.image_url}
          />
        </picture>
        <h2 className="font-semibold text-xl">{character.name}</h2>
        <BadgeRole role={role} />
      </div>
      <div>
        <Link to={`${PATHS.CHARACTER}/${character.mal_id}`}>
          <button className="w-full text-white font-semibold bg-[#074b86] p-2">
            Ver Más Información
          </button>
        </Link>
      </div>
    </div>
  );
}
