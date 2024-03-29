import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { saveProcessAddress } from "../redux/actions/bookingActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ProcessPage = () => {
  const processAddress = useSelector((state) => state.procssAddress);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [description, setDecription] = useState(
    processAddress?.description || ""
  );
  const [name, setName] = useState(processAddress?.name || "");
  const [email, setEmail] = useState(processAddress?.email || "");
  const [postalCode, setPostalCode] = useState(
    processAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(processAddress?.country || "");
  const [time, setTime] = useState(processAddress?.time || "");
  const [message, setMessage] = useState(null);
  const [address, setAddress] = useState(processAddress?.address || "");
  const [phone, setPhone] = useState(processAddress?.phone || "");
  const [taka, setTaka] = useState(processAddress?.taka || "");
  const [image, setImage] = useState(processAddress?.image || "");
  const [date, setDate] = useState(processAddress?.date || "");
  const [status, setStatus] = useState(processAddress?.status || "");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!description) {
      setMessage("Fill in description");
    } else {
      dispatch(
        saveProcessAddress({
          description,
          name,
          email,
          postalCode,
          country,
          time,
          address,
          phone,
          taka,
          image,
          date,
          status,
        })
      );
      navigate("/payment");
    }

    console.log(name);
    console.log(description);
    console.log(email);
    console.log(postalCode);
    console.log(country);
    console.log(time);
    console.log(address);
    console.log(phone);
    console.log(taka);
    console.log(image);
    console.log(date);
  };

  return (
    <div className="px-10 container mx-auto">
      <h1>ProcessPage Page</h1>
      <CheckoutSteps step1 step2 />
      {error && <h1>{error}</h1>}
      {message && <h1>{message}</h1>}
      {loading && <Loader>{loading}</Loader>}

      <div className="">
        <div className=" grid grid-cols-1 gap-4">
          <div className=" col-span-1">
            <div class="bg-white rounded-lg shadow-2xl md:flex md:justify-center lg:flex lg:justify-between">
              {/* form start  */}
              <div class=" flex  items-center mx-auto sm:p-10 md:p-0 lg:p-0">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <form onSubmit={submitHandler}>
                    <label className="block text-gray-500 font-bold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white   sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Description
                    </label>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      value={description}
                      onChange={(e) => setDecription(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Status
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        id="requested"
                        name="paymentMethod"
                        type="radio"
                        value="requested"
                        className="form-radio h-4 w-4 text-indigo-600"
                        onChange={(e) => setStatus(e.target.value)}
                        checked={status === "requested"}
                        required
                      />
                      <span className="ml-2">requested</span>
                    </label>

                    <label className="inline-flex items-center ml-6">
                      <input
                        id="pandding"
                        name="paymentMethod"
                        type="radio"
                        value="pandding"
                        className="form-radio h-4 w-4 text-indigo-600"
                        onChange={(e) => setStatus(e.target.value)}
                        checked={status === "pandding"}
                        required
                      />
                      <span className="ml-2">pandding</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        id="emergency"
                        name="paymentMethod"
                        type="radio"
                        value="emergency"
                        className="form-radio h-4 w-4 text-indigo-600"
                        onChange={(e) => setStatus(e.target.value)}
                        checked={status === "emergency"}
                        required
                      />
                      <span className="ml-2">emergency</span>
                    </label>

                    <label className="block text-gray-500 font-bold">
                      Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Postal Code
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="number"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Amount
                    </label>
                    <input
                      id="taka"
                      name="taka"
                      type="number"
                      value={taka}
                      onChange={(e) => setTaka(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Image
                    </label>
                    <input
                      id="image"
                      name="image"
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <label className="block text-gray-500 font-bold">
                      Time
                    </label>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className=" w-full border border-gray-200 rounded py-1 px-1 mb-1 leading-tight focus:outline-none focus:bg-white sm:text-sm sm:leading-6"
                    />
                    <button
                      type="submit"
                      className="mt-3 rounded-b-lg bg-fuchsia-950 text-white
                      py-2 w-full"
                    >
                      Contiue Process
                    </button>
                  </form>
                </div>
              </div>
              {/* Image start */}
              <div class="md:w-1/2 p-8">
                <img
                  src="/images/imgOne.png"
                  alt={name}
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
