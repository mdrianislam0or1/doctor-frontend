import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listDoctors } from '../redux/actions/doctorActions';
import Loader from './Loader';
import Doctor from './Doctor';

const DoctorComponent = () => {

    const params = useParams;
    const keyword = params.keyword;
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(listDoctors(keyword));
    }, [dispatch, keyword]);
  
    const doctorList = useSelector((state) => state.doctorList);
    const { loading, error, doctors } = doctorList;

  return (
    <div>
        {loading ? (
              <Loader />
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              doctors.map((doctor) => (
                <div key={doctor._id}>
                  <Doctor doctor={doctor} />
                </div>
              ))
            )}
    </div>
  )
}

export default DoctorComponent