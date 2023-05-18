import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  return (
    <>
      <Link to={`/doctors/${doctor._id}`}>
        <h2>{doctor.name}</h2>
        <h2>{doctor.admian}</h2>
        <h2>{doctor.phone}</h2>
        <h2>{doctor.address}</h2>
        <h2>{doctor.degree}</h2>
        <h2>{doctor.image}</h2>
        <h2>{doctor.date}</h2>
        <h2>{doctor.uploading}</h2>
        <h2>{doctor.serial}</h2>
        <h2>{doctor.speciality}</h2>
      </Link>
    </>
  );
};

export default Doctor;
