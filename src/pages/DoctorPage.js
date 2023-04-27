import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listDoctorsDetails } from '../redux/actions/doctorActions'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
const DoctorPage = () => {
  //   const {name} = props.doctor;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listDoctorsDetails(params.id))
  }, [dispatch])


  const [serialNumber, setSerialNumber] = useState(1);


  const doctorDetails = useSelector(state => state.doctorDetails)

  const { loading, error, doctor } = doctorDetails;


  //Add BOOKING
  const addToBookHandler = () => {
    navigate(`/booking/${params.id}?serial=${serialNumber}`)
    console.log(serialNumber)
  }

  return (
    <>
      <h1>Doctor Details</h1>
      {loading ? <Loader /> : error ? <h1>{error}</h1> : (
        <div className=''>
          <h1>{doctor.name}</h1>
          <h1>{doctor.speciality}</h1>
          <h1>{doctor.degree}</h1>
          <h1>{doctor.address}</h1>
          <h1>{doctor.phone}</h1>
          <h1>{doctor.serial}</h1>
          <img src={doctor.image} alt={doctor.image} />
          <h1>{doctor.date}</h1>

          <button onClick={addToBookHandler}>
            Add Book
          </button>
        </div>
      )}

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
    </>
  )
}

export default DoctorPage 