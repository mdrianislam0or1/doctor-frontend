import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userAction";

const Dropdown = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
    // localStorage.removeItem('userInfo')
    window.location.to = "/login";
  };
  return (
    <div
      className={
        isOpen
          ? "container px-10  grid grid-rows-4 text-start items-start"
          : "hidden"
      }
      onClick={toggle}
    >
      <>
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
      </>

      <div></div>
    </div>
  );
};

export default Dropdown;
