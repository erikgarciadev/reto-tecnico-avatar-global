import { FullCharacter } from "../../interfaces/character";
interface Props {
  fullCharacterData: FullCharacter;
}

export default function FullCharacterCard({ fullCharacterData }: Props) {
  return (
    <div className="bg-white min-h-[400px] gap-2 sm:gap-6 p-4 flex flex-col sm:flex-row">
      <div className="md:w-[40%] ">
        <picture>
          <img
            className="w-full sm:min-w-[300px] object-contain h-60 sm:object-cover sm:h-96"
            alt="Image Character"
            src={fullCharacterData.images.webp.image_url}
          />
        </picture>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{fullCharacterData.name}</h2>
          <p className="text-sm">({fullCharacterData.name_kanji})</p>
        </div>
        <hr className="border border-black" />
        <label className="font-semibold">Sobre nombres</label>
        <div className="flex flex-wrap gap-2 my-2">
          {fullCharacterData.nicknames.map((nickName) => (
            <span
              key={nickName}
              className="px-2 rounded-full text-sm font-semibold text-gray-700 bg-green-300"
            >
              {nickName}
            </span>
          ))}
        </div>

        <label className="font-semibold">Información</label>
        <p className="whitespace-pre-line">{fullCharacterData.about}</p>
      </div>
    </div>
  );
}
