import LeftArrowIcon from "../Icons/LeftArrow";

interface Props {
  onClick?: () => void;
}

export default function ButtonBack({ onClick }: Props) {
  return (
    <button
      className="p-2 flex items-center gap-2 bg-[#074b86] text-white font-semibold rounded-md"
      onClick={onClick}
    >
      <LeftArrowIcon />
      Volver
    </button>
  );
}
