import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [keyword,setKeyword] = useState('')
    const navigate = useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }else{
            navigate('/')
        }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search Here' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Search