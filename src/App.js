import { Profile } from "./pages/profile";
import { NewPassword } from "./pages/new_password";
import { NewLogin } from "./pages/new_login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <NewPassword></NewPassword>
      <NewLogin></NewLogin>
    </div>
  );
}

export default App;
