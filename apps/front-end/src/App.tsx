import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import OptimizedResult from "./pages/OptimizedResult";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<OptimizedResult />} />
    </Routes>
  );
};

export default App;
