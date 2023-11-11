import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/aquelarre" />} />
      <Route path="/aquelarre" element={<HomePage />} />
    </Routes>
  );
};

export default App;
