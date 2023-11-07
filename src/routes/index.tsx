import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "../pages/Movies";
import Characters from "../pages/Characters";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/characters/:mal_id" element={<Characters />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
