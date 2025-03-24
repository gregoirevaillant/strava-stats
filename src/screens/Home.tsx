
import { useState } from 'react'
import { Link } from 'react-router'
import getStats from '../services/getStats';

const Home = () => {
    const [stats, setStats] = useState()

    const onGetStats = async () => {
        const res = await getStats("147434");
        setStats(res);
    };

    console.log('stats', stats)

    return (
        <div>
            <h1>Home</h1>
            <button onClick={onGetStats}>
                onGetStats
            </button>

            <Link to="/activities">Activities</Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home