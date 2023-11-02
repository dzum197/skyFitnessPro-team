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
      color: #000000;
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