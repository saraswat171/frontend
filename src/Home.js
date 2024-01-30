import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate}  from 'react-router-dom'
function Home() {
    axios.defaults.withCredentials=true;
    const[userData,setUserData]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        // const token = getCookie('token');
        const fetchData = async ()=>{
            try{
                    const res = await axios.get('http://localhost:5080/home')
                    setUserData(res.data);
                }catch(error){
                console.error(error);

            }
        }
        fetchData()
    })
  return (
    <div className='home'>

        <Link to='/Login' ></Link>
    </div>
  )
}

export default Home