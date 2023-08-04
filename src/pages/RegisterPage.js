import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userAction";
import Loader from "../components/Loader";

const RegisterPage = () => {
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

  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        register(name, role, email, password, address, phone, image, date)
      );
    }

    console.log(name);
    console.log(role);
    console.log(email);
    console.log(password);
    console.log(address);
    console.log(phone);
    console.log(image);
    console.log(date);
  };

  return (
    <div className="px-10 container mx-auto">
      <h1>Register Page</h1>
      <div className="text-center">
        {error && <h1>{error}</h1>}
        {message && <h1>{message}</h1>}
        {loading && <Loader>{loading}</Loader>}
      </div>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img src="/images/sOne.png" alt="" className=" w-full h-full" />
        </div>
        <div className="pt-20">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <form onSubmit={submitHandler}>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-b-lg bg-fuchsia-950 text-white
              py-2 px-3"
              >
                Register
              </button>
            </form>

            <div className="font-blod">
              Have you an Account?
              <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
                {" "}
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
