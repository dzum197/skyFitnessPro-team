
import { AppRoutes } from './routes';
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
      color: #FFFFFF;
   }
   `
function App() {
  return (
    <AppRoutes  />

  );
}

export default App;
