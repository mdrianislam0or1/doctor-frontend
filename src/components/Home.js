import React from "react";
import { GoChevronRight } from "react-icons/go";
const Home = () => {
  return (
    <div className="container px-10 mx-auto">
      <div className="bg-[images/bgOne.png] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10">
        <div className=" py-10 ">
          <h1 className=" py-10 flex items-center sm:text-5xl md:text-7xl lg:text-8xl">
            We Provide Degital <br /> Health Service For Everyone
          </h1>
          <p className="leading-6 pb-4 text-gray-500">
            Welcome to our Doctor Management Platform Our Doctor Management
            Platform is designed to simplify and streamline the process of
            managing doctors and medical professionals. Whether you're running a
            clinic, hospital, or healthcare organization, our platform provides
            you with the tools you need to efficiently manage your doctors,
            schedules, appointments, and more.
          </p>

          <button
            className="rounded-b-lg bg-fuchsia-950 text-white
            px-2 py-4
          "
          >
            Explore More
          </button>
        </div>

        <div className="flex justify-center">
          <div>
            <img src="/images/imgOne.png" alt="doctor img" />
          </div>
        </div>
      </div>
      {/* //service Section start */}
      <div className="py-20">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          <div className="">
            <h1 className="sm:text-5xl md:text-5xl lg:text-6xl">
              You can Get The Quality Service Here
            </h1>
          </div>
          <div className="">
            <p className=" leading-5 items-center text-gray-500">
              Searching for the right doctor for your healthcare needs can be a
              daunting task. Our platform provides a reliable and comprehensive
              directory of highly qualified and trusted doctors across various
              specialties. With our easy-to-use search functionality, you can
              quickly find doctors based on location, specialty, and patient
              reviews. This empowers you to make informed decisions about your
              healthcare provider, ensuring that you receive the best possible
              care.
            </p>
          </div>
        </div>
      </div>
      {/* //service Section end */}

      {/* Short Story Section start */}
      <div className="py-20">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          <div className=" pe-20">
            <img src="/images/imgTwo.jpg" alt="" />
          </div>
          <div className="">
            <div className="">
              <h1 className=" py-10 flex items-center sm:text-5xl md:text-5xl lg:text-6xl">
              Who We Are!

              </h1>
              <p className="leading-6 pb-4 text-gray-500">
                Welcome to our Doctor Management Platform Our Doctor Management
                Platform is designed to simplify and streamline the process of
                managing doctors and medical professionals. Whether you're
                running a clinic, hospital, or healthcare organization, our
                platform provides you with the tools you need to efficiently
                manage your doctors, schedules, appointments, and more.
              </p>

              <button
                className="rounded-b-lg bg-fuchsia-950 text-white
            px-2 py-4
          "
              >
               <div className="flex items-center">
               <div>
                <span>See More</span>
                </div> 
                <div className="">
                <GoChevronRight className="mt-1"/>
                </div>
               </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Short Story Section end */}

    </div>
  );
};

export default Home;
