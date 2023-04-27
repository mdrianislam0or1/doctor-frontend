import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import BookingPage from "./pages/BookingPage";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/doctors/:id" element={<DoctorPage />} />
        <Route exact path="/booking/:id?" element={<BookingPage />} />
      </Routes>


    </div>
  );
}

export default App;
