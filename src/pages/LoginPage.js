import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/userAction";
import Loader from "../components/Loader";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));

    console.log(email);
    console.log(password);
  };

  return (
    <div className="px-10 container mx-auto">
      <div className="text-center">
        {error && <h1>{error}</h1>}
        {loading && <Loader>{loading}</Loader>}
      </div>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="pt-20">
          <div class="relative z-0 w-full mb-6 group">
            <form onSubmit={submitHandler}>
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

              <button
                type="submit"
                className="mt-3 w-full rounded-b-lg bg-fuchsia-950 text-white
              py-2 px-3"
              >
                Sign In
              </button>
            </form>
          </div>

          <div>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : `/register`}
            >
              Register
            </Link>
          </div>
        </div>

        <div>
          <img src="/images/sOne.png" alt="" className=" w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
