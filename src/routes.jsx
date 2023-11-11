import { Routes, Route } from "react-router-dom";
// import { AppRoutes } from './routes';
import { Main } from "./pages/main";
import { YogaDesc } from "./pages/yoga-desc-page";

export const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/YogaDescPage" element={<YogaDesc />} />
    </Routes>
  );
};



