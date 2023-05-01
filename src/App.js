import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProcessPage from "./pages/ProcessPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmBooking from "./pages/ConfirmBooking";
import BookedPage from "./pages/BookedPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/process" element={<ProcessPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route exact path="/confirmbooking" element={<ConfirmBooking />} />
        <Route exact path="/booked/:id" element={<BookedPage />} />
        <Route exact path="/doctors/:id" element={<DoctorPage />} />
        <Route exact path="/booking/:id?" element={<BookingPage />} />
      </Routes>


    </div>
  );
}

export default App;
