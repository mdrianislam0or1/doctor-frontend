import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToBook, removeFromBooking } from "../redux/actions/bookingActions";

const BookingPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const doctorId = params.id;
  const serialNumber = window.location.search
    ? Number(window.location.search.split("=")[1])
    : 1;
  console.log(serialNumber);

  const dispatch = useDispatch();
  useEffect(() => {
    if (doctorId) {
      dispatch(addToBook(doctorId, serialNumber));
    }
  }, [dispatch, doctorId, serialNumber]);

  //USESELECTORS
  const booking = useSelector((state) => state.booking);
  const { bookItems } = booking;

  console.log("booking",booking)

  // const bookItems = useSelector(state => state.bookItems)

  const removeFromBookHandler = (id) => {
    dispatch(removeFromBooking(id));
    console.log("remove");
  };

  const processHandler = () => {
    navigate(`/process`);

    
  };
  return (
    <div className="container px-10 mx-auto">

    
    <div className="grid grid-cols-1 gap-4">
      {bookItems?.length === 0 ? (
        <Link to="/">Go to Home</Link>
      ) : (
        <div>
          {bookItems?.map((bookItem) => (
            <div className="">

               <div className="">
                {/* <!-- horizontal card --> */}

                <div class="bg-white rounded-lg shadow-2xl md:flex md:justify-center lg:flex lg:justify-between">
                  <div class="md:w-1/3 p-8">
                    <img
                      src="/images/imgOne.png"
                      alt={bookItem.image}
                      className=" w-full h-full"
                    />
                  </div>
                  {/* <img
                      src={bookItem?.image}
                      alt={bookItem.image}
                      class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    /> */}
                  <div class=" flex  items-center mx-auto sm:p-10 md:p-0 lg:p-0">
                    <div className="p-3">
                    <Link to={`/doctors/${bookItem.doctor}`}>
                      <h2 class="font-bold text-xl md:text-3xl mb-2 ">
                        {bookItem?.name}
                      </h2>
                      </Link>
                      <p class=" text-xl">
                        <strong>Degree: </strong> {bookItem?.degree}
                      </p>
                      <p class=" text-xl">
                        <strong>Speciality: </strong> {bookItem?.speciality}
                      </p>
                      <p class=" text-xl">
                        <strong>Address: </strong> {bookItem?.address}
                      </p>
                      <p class=" text-xl">
                        <strong>Phone: </strong> {bookItem?.phone}
                      </p>
                      <p class=" text-xl">
                        <strong>Serial: </strong> {bookItem?.serial}
                      </p>
                      <p class=" text-xl">
                        <strong>Date: </strong> {bookItem?.date}
                      </p>
                      <button
                        className=" bg-fuchsia-900 text-white p-2 rounded-lg"
                        onClick={() => navigate('/process')}
                      >
                        Book An Appointment
                      </button>
                      {/* <button
                        className=" bg-fuchsia-900 text-white p-2 rounded-lg"
                        onClick={() => removeFromBookHandler(bookItem.doctor)}

                      >
                        Remove from Book
                      </button> */}
                   
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <button
          onClick={() => processHandler()}
          disabled={bookItems.length === 0}
        >
          Process
        </button>
      </div>
    </div>
    </div>
  );
};

export default BookingPage;
