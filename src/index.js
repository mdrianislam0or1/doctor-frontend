import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DoctorComponent from "./components/DoctorComponent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProcessPage from "./pages/ProcessPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmBooking from "./pages/ConfirmBooking";
import BookedPage from "./pages/BookedPage";
import DoctorPage from "./pages/DoctorPage";
import BookingPage from "./pages/BookingPage";
import UserListPage from "./pages/UserListPage";
import DoctorListPage from "./pages/DoctorListPage";
import BookedListPage from "./pages/BookedListPage";
import UserEditPage from "./pages/UserEditPage";
import DoctorEditPage from "./pages/DoctorEditPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<App />}>
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
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
  // <Provider store={store}>
  //   <React.StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>

  //   </React.StrictMode>

  // </Provider>
);
