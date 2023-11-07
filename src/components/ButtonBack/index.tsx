import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../Icons/LeftArrow";

export default function ButtonBack() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <button
      className="p-2 flex items-center gap-2 bg-[#074b86] text-white font-semibold rounded-md"
      onClick={handleBack}
    >
      <LeftArrowIcon />
      Volver
    </button>
  );
}
