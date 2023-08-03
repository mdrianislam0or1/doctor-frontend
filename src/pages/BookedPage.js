import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deliverBooked,
  getBookedDetails,
  payBooked,
} from "../redux/actions/bookActions";
import Loader from "../components/Loader";
import axios from "axios";
// import { PayPalButton } from "react-paypal-button-v2";
import {
  BOOKED_DELIVER_RESET,
  BOOKED_PAY_RESET,
} from "../redux/constants/bookConstant";
const BookedPage = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const booking = useSelector((state) => state.booking);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookedId = params.id;

  //USER INFO
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //POST TO BACKEND
  const bookedDetails = useSelector((state) => state.bookedDetails);
  const { booked, error, loading } = bookedDetails;

  //POST FOR BOOKED PAY
  const bookedPay = useSelector((state) => state.bookedPay);
  const { loading: loadingPay, success: successPay } = bookedPay;

  //POST FOR BOOKED DELIVERED
  const bookedDeliver = useSelector((state) => state.bookedDeliver);
  const { loading: loadingDeliver, success: successDeliver } = bookedDeliver;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }

    const addPayPalScript = async () => {
      const { data: bookedId } = await axios.get(
        `https://doctor-backend-six.vercel.app/api/config/paypal`
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${bookedId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!booked || successPay || successDeliver) {
      dispatch({ type: BOOKED_PAY_RESET });
      dispatch({ type: BOOKED_DELIVER_RESET });
      dispatch(getBookedDetails(bookedId));
    } else if (!booked.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, bookedId, successPay, booked, successDeliver]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payBooked(params.id, paymentResult));
  };

  const deliveryHandler = () => {
    dispatch(deliverBooked(booked));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <>
      <div div className="container px-10 mx-auto">
        <h1>Confirm Booke Details Page {booked?._id}</h1>
        <h1>Confirm Booke Details Page {booked?.email}</h1>
        <div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className=" grid grid-cols-3 gap-4 align-middle">
              <div className=" ">
                <h2>bookinging </h2>
                <p className="mt-2 text-sm text-black-500">
                  Please confirm your order
                </p>
                <p className="mt-2 text-sm text-black-500">{booked?.address}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.name}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.email}</p>
                <p className="mt-2 text-sm text-black-500">
                  {booked?.postalCode}
                </p>
                <p className="mt-2 text-sm text-black-500">{booked?.country}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.phone}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.taka}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.date}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.time}</p>
                <p className="mt-2 text-sm text-black-500">{booked?.status}</p>

                {booked?.isDelivered ? (
                  <h1>{booked?.deliveredAt}</h1>
                ) : (
                  <h1>Not delivered</h1>
                )}
              </div>
              <div className=" ">
                <h2>payment </h2>
                <strong>{booking?.paymentMethod?.paymentMethod} </strong>
              </div>

              <div className=" ">
                {booked?.bookItems.length === 0 ? (
                  <span className>Your booked? Item is Empty</span>
                ) : (
                  <div>
                    {booked?.bookItems?.map((bookItem, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4">
                        <div className="">
                          <h1>
                            <Link to={`/doctors/${bookItem?.name}`}>
                              {bookItem?.name}
                            </Link>
                          </h1>
                          <h1>Degree : {bookItem?.degree}</h1>
                          <h1>Address :{bookItem?.address}</h1>
                          <h1>Email : {bookItem?.email}</h1>
                          <h1>Phone : {bookItem?.phone}</h1>
                          <h1>Speciality :{bookItem?.speciality}</h1>
                          <h1>Serial :{bookItem?.serial}</h1>
                          <h1>Amount : {booking?.processAddress?.taka}</h1>
                        </div>

                        {error && <h1>{error}</h1>}

                        
                          <p>
                            Amount : {booking?.processAddress.taka}
                          </p>
                          {booked?.isPaid ? (
                            <h1>{booked?.paidAt}</h1>
                          ) : (
                            <h1>Not Paid</h1>
                          )}

                          <p>
                            {!booked?.isPaid && (
                              <div>
                                {loadingPay && <Loader />}
                                {!sdkReady ? (
                                  <Loader />
                                ) : (
                                  <button
                                    amount={booked?.taka}
                                    onSuccess={successPaymentHandler}
                                  />
                                )}
                                {loadingDeliver && <Loader />}

                                {userInfo &&
                                  userInfo.isAdmin &&
                                  booked?.isPaid &&
                                  !booked?.isDelivered && (
                                    <div className="">
                                      <button
                                      className=" mt-3 rounded-b-lg bg-fuchsia-950 text-white
                                      py-2 px-3"
                                        type="button"
                                        onClick={deliveryHandler}
                                      >
                                        Mark As Done
                                      </button>
                                    </div>
                                  )}
                              </div>
                            )}
                          </p>
                        
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookedPage;
