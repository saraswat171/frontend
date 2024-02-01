import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5080/home');
                setUserData(res.data);
            } catch (error) {
                console.error(error);
                navigate('/login');
            }
        };
        fetchData();
    }, [navigate]);

    const handleLogout = async () => {

        try {
            const response = await axios.post('http://localhost:5080/logout');
            if (response.data.success) {
                navigate('/login');
            } else {

                console.error('Logout failed:', response.data.message);
            }
        } catch (error) {

            console.error('Error during logout:', error);
        }
    };

    return (
        <div className='home'>
            {userData ? (
                <>

                    <h1>Welcome, {userData.name}!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Home;