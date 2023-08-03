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
import DoctorListPage from "./pages/DoctorListPage";
import DoctorEditPage from "./pages/DoctorEditPage";
import BookedListPage from "./pages/BookedListPage";
import NavbarComponent from "./components/NavbarComponent";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import DoctorComponent from "./components/DoctorComponent";
import Footer from "./components/Footer";


function App() {

  const [isOpen,setIsOpen] = useState(false);
  const toggle =() =>{
    setIsOpen(!isOpen)
  }

  useEffect(() =>{
    const hideMenu = () =>{
      if (window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize',hideMenu);
    return() =>{
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div>
      <NavbarComponent toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/doctors" element={<DoctorComponent />} />
        <Route exact path="/search/:keyword" element={<HomePage />} />
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
        <Route exact path="/admin/doctorlist" element={<DoctorListPage />} />
        <Route exact path="/admin/bookedlist" element={<BookedListPage />} />
        <Route exact path="/admin/user/:id/edit" element={<UserEditPage />} />
        <Route exact path="/admin/doctor/:id/edit" element={<DoctorEditPage />} />
      
      
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
