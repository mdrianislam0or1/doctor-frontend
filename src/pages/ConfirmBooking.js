import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { createBooked } from "../redux/actions/bookActions";

const ConfirmBooking = () => {
  // const processAddress = useSelector(state => state.procssAddress)
  const booking = useSelector((state) => state.booking);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("booking", booking);

  //POST TO BACKEND

  const bookedCreate = useSelector((state) => state.bookedCreate);
  const { booked, error, success } = bookedCreate;

  useEffect(() => {
    if (success) {
      navigate(`/booked/${booked._id}`);
    }
  }, [navigate, success, booked]);

  const confirmBooking = () => {
    dispatch(
      createBooked({
        address: booking.processAddress.address,
        country: booking.processAddress.country,
        date: booking.processAddress.date,
        description: booking.processAddress.description,
        email: booking.processAddress.email,
        image: booking.processAddress.image,
        name: booking.processAddress.name,
        phone: booking.processAddress.phone,
        postalCode: booking.processAddress.postalCode,
        status: booking.processAddress.status,
        taka: booking.processAddress.taka,
        time: booking.processAddress.time,
        paymentMethod: booking.paymentMethod.paymentMethod,
        bookItems: booking.bookItems,
      })
    );
  };
  return (
    <div div className="px-10 container mx-auto">
      <CheckoutSteps step1 step2 step3 step4 />
      <h1>Confirm Booked Page</h1>
      <div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" grid grid-cols-3 gap-4 align-middle">
            <div className=" ">
              <h2>bookinging </h2>
              <p className="pt-1 text-sm text-black-500">
                Please confirm your order
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.address}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.name}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.email}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.postalCode}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.country}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.phone}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.taka}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.date}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.time}
              </p>
              <p className="pt-1 text-sm text-black-500">
                {booking.processAddress.status}
              </p>
            </div>
            <div className=" ">
              <h2>payment Method</h2>
              <strong>{booking?.paymentMethod?.paymentMethod} </strong>
            </div>

            <div className=" ">
              {booking?.bookItems?.length === 0 ? (
                <span className>Your Booking Item is Empty</span>
              ) : (
                <div>
                  {booking?.bookItems?.map((bookItem, index) => (
                    <div key={index} className="grid grid-cols-2 gap-2">
                      <div className="">
                        <strong>
                          <Link to={`/doctors/${bookItem?.name}`}>
                            {bookItem?.name}
                          </Link>
                        </strong>
                        <div className="">
                          <h1>
                            Degree : {bookItem?.degree}
                          </h1>
                          <h1>
                            Address : 
                          {bookItem?.address}
                          </h1>
                          <h1>
                            Email : {bookItem?.email}
                          </h1>
                          <h1>
                          Phone : {bookItem?.phone}
                          </h1>
                          <h1>
                          Speciality :{bookItem?.speciality}
                          </h1>
                          <h1>
                          Serial :{bookItem?.serial}
                          </h1>

                        </div>

                      </div>

                      {error && <h1>{error}</h1>}

                      <div className="">
                        <strong>Amount : {booking.processAddress.taka}</strong>
                        <strong>
                          <button
                            className=" bg-pink-300 text-base rounded-md"
                            disabled={booking.bookItems === 0}
                            onClick={confirmBooking}
                          >
                            Book Confirm
                          </button>
                        </strong>
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
  );
};

export default ConfirmBooking;
