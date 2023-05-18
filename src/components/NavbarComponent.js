import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userAction";

const NavbarComponent = ({ toggle }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
    // localStorage.removeItem('userInfo')
    window.location.to = "/login";
  };
  return (
    <div className="container px-10 mx-auto">
      <nav
        className="flex justify-between items-center h-16  text-black relative
    "
        role="navigation"
      >
        <Link to="/" className="">
          <span className="text-xl">Doctor Management System</span>
        </Link>

        <div onClick={toggle} className="px-4 cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="pr-8 md:block hidden">
          {userInfo ? (
            <>
              <Link className=" p-2" to="/profile">
                Profile {userInfo.name}
              </Link>
              <small onClick={logOutHandler}>
                <button className=" bg-lime-300 text-secondary-900 p-1 rounded">
                  Logout
                </button>
              </small>
            </>
          ) : (
            <Link className=" p-2" to="/education">
              Education
            </Link>
          )}


            {userInfo && userInfo.isAdmin && (
              <>

                  <Link to="/admin/userlist" class="p-2" href="#">
                    Admin
                  </Link>
                  <Link to="/admin/doctorlist" class="p-2">
                    Doctor List
                  </Link>

                  <Link to="/admin/bookedlist" class="p-2" href="#">
                    Booked List
                  </Link>
                </>
            )}
          <Link className=" p-2" to="/doctors">
            Doctors
          </Link>
          <Link className=" p-2" to="/process">
            Process
          </Link>
          <Link className="p-2" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
