import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  return (
    <>
      <Link to={`/doctors/${doctor._id}`}>
        {/* <!-- card with image --> */}
        <div class=" w-full h-screen">
          <div class="bg-white rounded-lg shadow-lg">
            <div className="m-auto w-40 h-50">
              <img
                src={doctor.image}
                alt=""
                class="bg-fuchsia-100 rounded-lg"
              />
              {/* <img src='/images/imgOne.png' alt="" class="bg-fuchsia-100 rounded-lg" /> */}
            </div>
            <div class="p-6">
              <h2 class="font-bold mb-2 text-2xl text-fuchsia-700">
                {doctor.name}
              </h2>
              <p class=" mb-2">{doctor.degree}</p>
              <p class=" mb-2">{doctor.speciality}</p>
              <p class=" mb-2">{doctor.phone}</p>
              <Link
                to={`/doctors/${doctor._id}`}
                class=" hover:text-fuchsia-500 underline text-sm"
              >
                Read More 👉
              </Link>
            </div>
          </div>
        </div>

        {/* <h2></h2>
        <h2>{doctor.admian}</h2>
        <h2>{doctor.phone}</h2>
        <h2>{doctor.address}</h2>
        <h2>{doctor.degree}</h2>
        <h2>{doctor.image}</h2>
        <h2>{doctor.date}</h2>
        <h2>{doctor.uploading}</h2>
        <h2>{doctor.serial}</h2>
        <h2>{doctor.speciality}</h2> */}
      </Link>
    </>
  );
};

export default Doctor;
