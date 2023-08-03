import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import Loader from "../components/Loader";
import { savePaymentMethod } from "../redux/actions/bookingActions";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const processAddress = useSelector((state) => state.procssAddress);

  if (processAddress !== processAddress) {
    navigate("/process");
  }

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const [paymentMethod, setPaymentMethod] = useState(
    processAddress?.paymentMethod || ""
  );
  const [message, setMessage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      setMessage("Fill in paymentMethod");
    } else {
      dispatch(savePaymentMethod({ paymentMethod }));
      navigate("/confirmbooking");
    }
    console.log(paymentMethod);
  };

  return (
    <div className="px-10 container mx-auto">
      <h1>ProcessPage Page</h1>
      <CheckoutSteps step1 step2 step3 />
      {error && <h1>{error}</h1>}
      {message && <h1>{message}</h1>}
      {loading && <Loader>{loading}</Loader>}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <form onSubmit={submitHandler}>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Payment Method
          </label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                value="PayPal"
                className="form-radio h-4 w-4 text-indigo-600"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "PayPal"}
                required
              />
              <span className="ml-2">PayPal</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                id="stripe"
                name="paymentMethod"
                type="radio"
                value="Stripe"
                className="form-radio h-4 w-4 text-indigo-600"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "Stripe"}
                required
              />
              <span className="ml-2">Stripe</span>
            </label>
          </div>
          <button
            type="submit"
            className="mt-3 rounded-b-lg bg-fuchsia-950 text-white
            py-2 px-3"
            // className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue Process
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
