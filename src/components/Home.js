import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Home = () => {
    const [doctors,setDectors] = useState([]);

    useEffect(() =>{
        const fetchdata = async() =>{
            const {data} = await axios.get('/localhost/api/doctors')
        }


        setDectors(data)
    },[])
  return (
    <div>
        <h1>Home</h1>
        <p>This is the home page</p>   


    </div>
  )
}

export default Home