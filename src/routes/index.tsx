import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "../pages/Movies";
import Characters from "../pages/Characters";
import { PATHS } from "../utils/constants";
import Character from "../pages/Character";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path={PATHS.MOVIES} element={<Movies />} />
      <Route path={`${PATHS.CHARACTERS}/:mal_id`} element={<Characters />} />
      <Route
        path={`${PATHS.CHARACTER}/:character_mal_id`}
        element={<Character />}
      />
      <Route path="*" element={<Navigate to={PATHS.MOVIES} />} />
    </Routes>
  );
}
