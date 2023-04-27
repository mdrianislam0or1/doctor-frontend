import React from 'react'
import { Link } from 'react-router-dom'

const Doctor = ({doctor}) => {
  return (
    <>
   <Link to={`/doctors/${doctor._id}`}>
   <h2>{doctor.name}</h2>
    <h2>{doctor.admin}</h2>
    <h2>{doctor.phone}</h2>
   </Link>
    </>
  )
}

export default Doctor