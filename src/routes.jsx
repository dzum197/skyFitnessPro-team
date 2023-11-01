import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { YogaDesc } from "./pages/yoga-desc-page";
import { Profile } from "./pages/profile";
import { NewPassword } from "./pages/new-password";
import { NewLogin } from "./pages/new-login";
import { BodyflexDesc } from "./pages/bodyflex-desc-page";
import { DanceDesc } from "./pages/dance-desc-page";
import { StepDesc } from "./pages/step-desc-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/YogaDescPage" element={<YogaDesc />} />
      <Route path="/ProfilePage" element={<Profile />} />
      <Route path="/NewPasswordPage" element={<NewPassword />} />
      <Route path="/NewLoginPage" element={<NewLogin />} />
      <Route path="/BodyflexDescPage" element={<BodyflexDesc />} />
      <Route path="/DanceDescPage" element={<DanceDesc />} />
      <Route path="/StepDescPage" element={<StepDesc />} />
    </Routes>
  );
};