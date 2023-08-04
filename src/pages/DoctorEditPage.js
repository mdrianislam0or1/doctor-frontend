import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listDoctorsDetails,
  updateDoctor,
} from "../redux/actions/doctorActions";
import { DOCTOR_UPDATE_RESET } from "../redux/constants/doctorConstants";
import axios from "axios";

const DoctorEditPage = () => {
  const [speciality, setSpeciality] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [serial, setSerial] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const params = useParams();
  const doctorId = params.id;
  console.log("doctorId", doctorId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fetch doctor Details
  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { loading, error, doctor } = doctorDetails;

  //doctor Update
  const doctorUpdate = useSelector((state) => state.doctorUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    successUpdate: successUpdateUpdate,
  } = doctorUpdate;

  console.log("tmi", doctorDetails);

  useEffect(() => {
    if (successUpdateUpdate) {
      dispatch({ type: DOCTOR_UPDATE_RESET });
      navigate("/admin/doctorlist");
    } else {
      if (!doctor?.name || doctor._id !== doctorId) {
        dispatch(listDoctorsDetails(doctorId));
      } else {
        setName(doctor?.name);
        setSpeciality(doctor?.speciality);
        setEmail(doctor?.email);
        setAdmin(doctor?.admin);
        setPassword(doctor?.password);
        setAddress(doctor?.address);
        setPhone(doctor?.phone);
        setImage(doctor?.image);
        setUploading(doctor?.uploading);
      }
    }
  }, [dispatch, navigate, doctorId, doctor]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateDoctor({
        _id: doctorId,
        name,
        speciality,
        email,
        admin,
        password,
        address,
        phone,
        image,
      })
    );

    // if ( password !== serial) {
    //     setMessage('Passwords do not match')
    // } else {

    //     //DISPATCH UPreviews
    //     dispatch(upreviewsUserProfile({

    //         id: user._id,
    //         name,
    //         speciality,
    //         email,
    //         password,
    //         address,
    //         phone,
    //         image,
    //         reviews

    //     }))

    // }
    // // dispatch(register(name, speciality , email, password ,address,phone,image  ,reviews))
    // // }

    console.log(name);
    console.log(speciality);
    console.log(email);
    console.log(password);
    console.log(address);
    console.log(phone);
    console.log(image);
    console.log(admin);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "https://doctor-backend-six.vercel.app/api/uploads",
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="px-10 container mx-auto">
      <h1>Edit User Page</h1>
      <Link to="/admin/doctorlist">Doctor List</Link>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          {loadingUpdate && <Loader />}
          {errorUpdate && <h1>{errorUpdate}</h1>}
          {loading ? (
            <Loader />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div>
              <form onSubmit={submitHandler}>
                <div class="relative z-0 w-full mb-6 group">
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
                    speciality
                  </label>
                  <input
                    id="speciality"
                    name="speciality"
                    type="text"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
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
                    id="serial"
                    name="serial"
                    type="number"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
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

                  <div className=" from-success-500">
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
                    <input
                      id="image-file"
                      name="uploading"
                      type="file"
                      label="Choose a File"
                      custom
                      onChange={uploadFileHandler}
                      required
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />

                    {uploading && <Loader />}
                  </div>

                  {/* admin */}

                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Admin Action
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        id="admin"
                        name="admin"
                        type="checkbox"
                        value="admin"
                        className="form-radio h-4 w-4 text-indigo-600"
                        onChange={(e) => setAdmin(e.target.checked)}
                        checked={admin}
                        required
                      />
                      <span className="ml-2">true</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-3 w-full rounded-b-lg bg-fuchsia-950 text-white
                    py-2 px-3"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div>
          <img src="/images/sOne.png" alt={name} className=" w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DoctorEditPage;
