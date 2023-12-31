import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createDoctor,
  deleteDoctor,
  listDoctors,
} from "../redux/actions/doctorActions";
import { DOCTOR_CREATE_RESET } from "../redux/constants/doctorConstants";

const DoctorListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Doctor List

  const doctorCreate = useSelector((state) => state.doctorCreate);
  const {
    loading: loaddingCreate,
    error: errorCreate,
    success: successCreate,
    doctor: createdDoctor,
  } = doctorCreate;

  //Doctor List
  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  //Doctor List

  const doctorDelete = useSelector((state) => state.doctorDelete);
  const {
    loading: loaddingDelete,
    error: errorDelete,
    success: successDelete,
  } = doctorDelete;

  //Doctor Login
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: DOCTOR_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/doctor/${createdDoctor?._id}/edit`);
    } else {
      dispatch(listDoctors());
    }
  }, [
    dispatch,
    navigate,
    userLogin,
    successDelete,
    successCreate,
    createdDoctor,
    errorCreate,
  ]);

  const deleteHandler = (id) => {
    //delete doctor
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteDoctor(id));
    }
  };

  const joinADoctor = () => {
    dispatch(createDoctor());
  };

  return (
    <div className="px-10 container mx-auto h-screen">
      <div className="grid grid-cols-3 gap-5">
        <div className=" col-span-1">
          <h1>Doctors</h1>
        </div>

        <div className="col-span-1">
          <button
            className=" bg-purple-300 text-pink-700 px-5 py-5"
            onClick={joinADoctor}
          >
            Join a Doctor
          </button>
        </div>
      </div>
      <div>
        {loaddingDelete && <Loader />}
        {errorDelete && <h1>{errorDelete}</h1>}
        {loaddingCreate && <Loader />}
        {errorCreate && <h1>{errorCreate}</h1>}
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Admin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors?.map((doctor) => (
                  <tr
                    key={doctor?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {doctor?.name}
                    </th>
                    <td className="px-6 py-4">{doctor?.email}</td>
                    <td className="px-6 py-4">
                      {doctor?.isAdmin ? <h1>Admin</h1> : <h1>N/A</h1>}
                    </td>
                    <td className="px-6 py-4">
                      {doctor?.role ? <h1>Admin</h1> : <h1>N/A</h1>}
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/admin/doctor/${doctor?._id}/edit`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/admin/userlist`}>
                        <button
                          className="mt-3 rounded-b-lg bg-fuchsia-950 text-white
                                      py-2 px-3"
                          onClick={() => deleteHandler(doctor?._id)}
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorListPage;
