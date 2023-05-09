import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listDoctorsDetails } from '../redux/actions/doctorActions';

const DoctorEditPage = () => {

    const [speciality, setSpeciality] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);
    const [password, setPassword] = useState('');
    const [serial, setSerial] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [reviews, setReviews] = useState([]);

    const params = useParams()
    const doctorId = params.id
    console.log("User",doctorId)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doctorDetails = useSelector((state) => state.doctorDetails)
    const {loading,error,doctor} = doctorDetails




    useEffect(() => {
       
            if(!doctor?.name || doctor._id !== doctorId){
                dispatch(listDoctorsDetails(doctorId))
            }else{
                setName(doctor?.name)
                setSpeciality(doctor?.speciality)
                setEmail(doctor?.email)
                setAdmin(doctor?.admin)
                setPassword(doctor?.password)
                setAddress(doctor?.address)
                setPhone(doctor?.phone)
                setPhone(doctor?.image)
                setReviews(doctor?.reviews)
        }
        
    }, [dispatch,navigate, doctorId, doctor]);



    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(upreviewsUser({_id:doctorId,name,speciality,email,admin,password,address,phone,image,reviews}))

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
        console.log(reviews);
        console.log(admin);
    }

  return (
    <>
            <h1>Edit User Page</h1>
            <Link to='/admin/doctorlist' >
                Doctor List
            </Link>
            {loading ? <Loader /> : error ? <h1>{error}</h1> : (
                <div>
                    <form onSubmit={submitHandler}>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <input id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">speciality</label>
                        <input id="speciality" name="speciality" type="text" value={speciality} onChange={e => setSpeciality(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <input id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                        <input id="serial" name="serial" type="password" value={serial} onChange={e => setSerial(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                        <input id="address" name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                        <input id="phone" name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                        <input id="image" name="image" type="text" value={image} onChange={e => setImage(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">reviews</label>
                        <input id="reviews" name="reviews" type="text" value={reviews} onChange={e => setReviews(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        {/* admin */}


                        <label className="block text-sm font-medium leading-6 text-gray-900">
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



                        <button type="submit" className="flex w-full justify-center rounded-md">Sign in</button>
                    </form>
                </div>
            )}
        </>
  )
}

export default DoctorEditPage