import { Routes, Route } from "react-router-dom";
import { Main } from './pages/main';
import { YogaDesc } from "./pages/yoga-desc-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/YogaDesc" element={<YogaDesc />} />
    </Routes>
  );
}

export default App;
