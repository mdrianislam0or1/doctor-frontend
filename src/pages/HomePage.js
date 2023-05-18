import React, { useEffect } from "react";
import { listDoctors } from "../redux/actions/doctorActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Doctor from "../components/Doctor";
import { useParams } from "react-router-dom";
import Home from "../components/Home";
import data from "../data/data.js";
import ServiceCard from "../components/ServiceCard";
const HomePage = () => {
  const params = useParams;
  const keyword = params.keyword;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDoctors(keyword));
  }, [dispatch, keyword]);

  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  return (
    <>
      <div>
        <Home />
      </div>

      <div className=" container px-10 mx-auto">
        {/* Taking Services section start */}

        <div className="py-2">
          <h1 className=" text-center py-8 sm:text-5xl md:text-5xl lg:text-6xl">
            Monitor Doctor Availability <br/> and Patient Load
          </h1>
          <p className=" text-center py-8 text-gray-500">
            Streamline Communication and Collaboration Effective communication
            and collaboration among doctors, staff, and patients are vital for
            providing high-quality healthcare services. Our platform includes
            integrated communication features such as secure messaging,
            telehealth capabilities, and shared document repositories. This
            promotes seamless collaboration, enhances coordination of care, and
            improves overall efficiency.
          </p>
        </div>

        <div className="py-4">
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {data.map((service) => (
                <div key={service.id}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </>
        </div>
        {/* Taking Services section end */}

        {/* doctor section start */}
        <div className="py-4">
          <h1 className=" text-center py-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Our Team
          </h1>
          <p className=" text-center py-8 text-gray-500">
            Simplify Doctor Scheduling and Appointments
          </p>
        </div>
        {/* doctor section end */}

        <>
          <div className="grid grid-cols-4 gap-4">
            {loading ? (
              <Loader />
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              doctors.slice(0, 2).map((doctor) => (
                <div key={doctor._id}>
                  <Doctor doctor={doctor} />
                </div>
              ))
            )}
            {/* {loading ? (
              <Loader />
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              doctors.map((doctor) => (
                <div key={doctor._id}>
                  <Doctor doctor={doctor} />
                </div>
              ))
            )} */}
          </div>
        </>
      </div>
    </>
  );
};

export default HomePage;
