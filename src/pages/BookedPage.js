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
    <p>{error}</p>
  ) : (
    <>
      <div div className="container px-10 mx-auto">
        <p className="text-xl font-bold text-black">Confirm Id: {booked?._id}</p>
        <p className="text-xl font-bold text-black">Confirm Email: {booked?.email}</p>
        <div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className=" grid grid-cols-3 gap-4 align-middle">
              <div className=" ">
                <p className="mt-2 text-black-500">
                  Name: {booked?.name}
                </p>
                <p className="mt-2 text-black-500">
                  Address: {booked?.address}</p>
                
                <p className="mt-2 text-black-500">
                  Email:  {booked?.email}
                </p>
                <p className="mt-2 text-black-500">
                  PostalCode: {booked?.postalCode}
                </p>
                <p className="mt-2 text-black-500">
                 Country: {booked?.country}
                </p>
                <p className="mt-2 text-black-500">
                 Phone: {booked?.phone}
                </p>
                <p className="mt-2 text-black-500">
                  Taka: {booked?.taka}</p>
                <p className="mt-2 text-black-500">
                 Date: {booked?.date}
                </p>
                <p className="mt-2 text-black-500">
                 Time: {booked?.time}
                </p>
                <p className="mt-2 text-black-500">
                 Status: {booked?.status}
                </p>
                <p className="mt-2 text-black-500">
                Payment Method:{booked?.paymentMethod}
                </p>
                {/* {booked?.isDelivered ? (
                  
                <button className="px-4 py-2 bg-green-500 text-white">
                              Appoint
                </button>
                
                ) : (
                  <p>Not Appoint</p>
                )} */}

<p>
                          {!booked?.isPaid && (
                            <div>
                              {loadingPay && <Loader />}
                              {!sdkReady ? (
                                <Loader />
                              ) : (
                                <button
                                  className=" mt-3 rounded-b-lg bg-fuchsia-950 text-white
                                  py-2 px-3"
                                  amount={booked?.taka}
                                  onSuccess={successPaymentHandler}
                                >
                                  Visited
                                </button>
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
              <div className=" ">
                {booked?.bookItems.length === 0 ? (
                  <span className>Your booked? Item is Empty</span>
                ) : (
                  <div>
                    {booked?.bookItems?.map((bookItem, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4">
                        <div className="">
                          <p>
                            <Link to={`/doctors/${bookItem?.name}`}>
                            Doctor Name :{bookItem?.name}
                            </Link>
                          </p>
                          <p>Degree : {bookItem?.degree}</p>
                          <p>Address :{bookItem?.address}</p>
                          <p>Email : {bookItem?.email}</p>
                          <p>Phone : {bookItem?.phone}</p>
                          <p>Speciality :{bookItem?.speciality}</p>
                          <p>Serial :{bookItem?.serial}</p>
                        
                        {error && <p>{error}</p>}

                        {booked?.isPaid ? (
                          <p>
                      
                            <button className="px-4 py-2 bg-green-500 text-white">
                              Payment Done
                            </button>
                          </p>
                        ) : (
                          <button className="px-4 py-2 bg-green-500 text-white">
                            Not Paid
                          </button>
                        )}
                      </div>
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
