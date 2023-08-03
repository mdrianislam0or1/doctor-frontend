import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className=" grid grid-cols-4 items-center">
      <div className="">
        {step1 ? (
          <div className="text-green-500 hover:text-green-700 border-b-2 border-gray-500 mr-6 my-4 text-center">
            <Link to="/login">Sign In</Link>
          </div>
        ) : (
          <div className="text-red-500 hover:text-red-700   mr-6 my-4 text-center">
            <Link className=" " to="/login">
              Sign up
            </Link>
          </div>
        )}
      </div>
      <div className="">
        {step2 ? (
          <div className="text-green-500 hover:text-green-700 border-b-2 border-gray-500 mr-6 my-4 text-center">
            <Link to="/process">Process</Link>
          </div>
        ) : (
          <div className="text-red-500 hover:text-red-700   mr-6 my-4 text-center">
            <Link className="" to="/process">
              Process
            </Link>
          </div>
        )}
      </div>
      <div className="">
        {step3 ? (
          <div className="text-green-500 hover:text-green-700 border-b-2 border-gray-500 mr-6 my-4 text-center">
            <Link to="/payment">payment</Link>
          </div>
        ) : (
          <div className="text-red-500 hover:text-red-700   mr-6 my-4 text-center">
            <Link className=" " to="/payment">
              payment
            </Link>
          </div>
        )}
      </div>
      <div className="">
        {step4 ? (
          <div className="text-green-500 hover:text-green-700 border-b-2 border-gray-500 mr-6 my-4 text-center">
            <Link to="/confirmbooking">confirm booking</Link>
          </div>
        ) : (
          <div className="text-red-500 hover:text-red-700   mr-6 my-4 text-center">
            <Link
              className=" "
              to="/confirmbooking"
            >
              confirm booking
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
