import { Route, Routes } from 'react-router-dom';

import { Main } from './pages/main';
import VariantsModal from './Modals/variantsModal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/testModal"
          element={<VariantsModal />}
        />
      </Routes>
    </div>
  );
}

export default App;
