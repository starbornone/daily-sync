import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Hello, World!</h1>
          </div>
        }
      ></Route>
      <Route path="/dashboard" element={<DashboardPage />}></Route>
    </Routes>
  );
}

export default App;
