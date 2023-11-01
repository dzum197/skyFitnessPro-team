/*import { Profile } from "./pages/profile";
import { NewPassword } from "./pages/new_password";
import { NewLogin } from "./pages/new_login";
import { BodyflexDesc } from "./pages/bodyflex-desc-page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <NewPassword></NewPassword>
      <NewLogin></NewLogin>
      <BodyflexDesc></BodyflexDesc>
    </div>
  );
}

export default App;*/


import { AppRoutes } from './routes';
import styled,{createGlobalStyle} from 'styled-components';
const GlobalStyle =createGlobalStyle `
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }   
   html,
   body {
      width: 100%;
      height: 100%;
      font-family: 'StratosSkyeng', sans-serif;
      
   }
   `
function App() {
  return (
    <>
      <GlobalStyle/>
      <AppRoutes  />
    </>

  );
}

export default App;
