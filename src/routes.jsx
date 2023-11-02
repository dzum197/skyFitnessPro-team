import { Routes, Route } from "react-router-dom";
// import { AppRoutes } from './routes';
import { Main } from "./pages/main";
import { YogaDesc } from "./pages/yoga-desc-page";
import { StretchDesc } from "./pages/stretch-desc-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/YogaDescPage" element={<YogaDesc />} />
      <Route path="/StretchDescPage" element={<StretchDesc />} />
    </Routes>
  );
};



