import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/index";
import { YogaDesc } from "./pages/yoga-desc-page/index";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/YogaDescPage" element={<YogaDesc />} />
    </Routes>
  );
};
