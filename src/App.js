import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />

        <Route exact path="/doctors/:id" element={<DoctorPage />} />

      </Routes>


    </div>
  );
}

export default App;
