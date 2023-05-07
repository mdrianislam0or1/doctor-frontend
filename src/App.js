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
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";


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
        {/* admin */}
        <Route exact path="/admin/userList" element={<UserListPage />} />
        <Route exact path="/admin/user/:id/edit" element={<UserEditPage />} />
      
      
      </Routes>


    </div>
  );
}

export default App;
