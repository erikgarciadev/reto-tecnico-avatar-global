import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "../pages/Movies";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
