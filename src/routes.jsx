import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { YogaDesc } from "./pages/yoga-desc-page";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/YogaDescPage" element={<YogaDesc />} />
    </Routes>
  );
};
