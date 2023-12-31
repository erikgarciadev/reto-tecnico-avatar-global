import { Character, Role } from "../../interfaces/characters";
import { PATHS } from "../../utils/constants";
import { Link } from "react-router-dom";
import BadgeRole from "../BadgeRole";
import Image from "../Image";

interface Props {
  character: Character;
  role: Role;
}

export default function CharacterCard({ role, character }: Props) {
  return (
    <div className="bg-white flex flex-col justify-between gap-2 p-2 rounded-md shadow-lg">
      <div className="flex flex-col gap-1">
        <picture>
          <Image
            className="w-full object-cover h-64"
            src={character.images.webp.image_url}
            alt="Image Character"
            loading="lazy"
            height={"256px"}
            width={"215px"}
          />
        </picture>
        <h2 className="font-semibold text-xl">{character.name}</h2>
        <div>
          <BadgeRole role={role} />
        </div>
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
