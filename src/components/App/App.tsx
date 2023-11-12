import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CreatePage from "../../pages/CreatePage/CreatePage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/aquelarre" />} />
      <Route path="/aquelarre" element={<HomePage />} />
      <Route path="/iniciar-sesion" element={<CreatePage />} />
    </Routes>
  );
};

export default App;
