import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDoctorReview,
  listDoctorsDetails,
} from "../redux/actions/doctorActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { DOCTOR_CREATE_REVIEW_RESET } from "../redux/constants/doctorConstants";
const DoctorPage = () => {
  //   const {name} = props.doctor;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [serialNumber, setSerialNumber] = useState(1);
  const [comment, setComment] = useState("");

  //Doctor Details
  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { loading, error, doctor } = doctorDetails;

  //Doctor Details
  const doctorReviewCreate = useSelector((state) => state.doctorReviewCreate);
  const { error: errorDoctorReview, success: successDoctorReview } =
    doctorReviewCreate;

  //USER LOGIN
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //Add BOOKING
  const addToBookHandler = () => {
    navigate(`/booking/${params.id}?serial=${serialNumber}`);
    console.log(serialNumber);
  };

  //ADD SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createDoctorReview(params.id, {
        comment,
      })
    );
  };

  useEffect(() => {
    if (successDoctorReview) {
      alert("Review successfully");
      setComment("");
      dispatch({ type: DOCTOR_CREATE_REVIEW_RESET });
    }
    dispatch(listDoctorsDetails(params.id));
  }, [dispatch, successDoctorReview]);

  return (
    <div className=" grid grid-cols-3 gap-4">
      <div className=" col-span-1">
        <h1>Doctor Details</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="">
            <h1>{doctor?.name}</h1>
            <h1>{doctor?.speciality}</h1>
            <h1>{doctor?.degree}</h1>
            <h1>{doctor?.address}</h1>
            <h1>{doctor?.phone}</h1>
            <h1>{doctor?.serial}</h1>
            <img src={doctor?.image} alt={doctor.image} />
            <h1>{doctor?.date}</h1>
            {/* <h1>Reviews: {doctor?.reviews[4]}</h1> */}

            <button onClick={addToBookHandler}>Add Book</button>
          </div>
        )}
      </div>

      {/* {doctor.serial > 0 && (
        <div>
          <form value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}>
            {[...Array(doctor.serial).keys()].map(x => (
              <select data-te-select-init multiple>
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              </select>

            ))}
          </form>
        </div>
      )} */}

      <div className=" col-span-1">
        <h1>Review</h1>

        {doctor?.reviews?.length < 0 && <h1>NO REVIEWS</h1>}
        <div>
          {doctor?.reviews?.map((review) => (
            <div>
              <strong>{review?.name}</strong>
              {/* <p>{review.createdAt.substring(0, 10)}</p> */}
              <p>{review?.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" col-span-1">
        <h1>Write a Review</h1>
        {errorDoctorReview && <h1>{errorDoctorReview}</h1>}
        {userInfo ? (
          <form onSubmit={submitHandler}>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              comment
            </label>
            <input
              id="comment"
              name="comment"
              type="textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="block  sm:text-sm sm:leading-6"
            />

            <button type="submit">Submit Review</button>
          </form>
        ) : (
          <h1>
            <Link to="/login" />
            please login fast
          </h1>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;
