import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex gap-1 flex-col justify-center items-center">
      <picture>
        <img width="300px" height="300px" alt="" src="/error.webp" />
      </picture>
      <h3 className="font-bold text-lg">Ocurrio un Error</h3>
      <button
        onClick={() => navigate(0)}
        className="p-2 bg-white rounded-md font-semibold"
      >
        Refrescar
      </button>
    </div>
  );
}
