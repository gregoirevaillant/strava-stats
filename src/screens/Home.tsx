
import { useState } from 'react';
import { Link } from 'react-router';

import getLoggedInAthlete from '../services/athletes/getLoggedInAthlete';
import getStats from '../services/athletes/getStats';
import { IActivityStats } from '../types/activities/IActivityStats';
import { IDetailedAthlete } from '../types/athletes/IDetailedAthlete';

import styles from './Home.module.css';

const Home = () => {
    const [stats, setStats] = useState<IActivityStats>()
    const [loggedInAthlete, setLoggedInAthlete] = useState<IDetailedAthlete>()

    const onGetStats = async () => {
        if (loggedInAthlete?.id) {
            const res = await getStats(loggedInAthlete.id);
            setStats(res);
        }
    };

    const onGetLoggedInAthlete = async () => {
        const res = await getLoggedInAthlete();
        setLoggedInAthlete(res);
    };

    return (
        <div className={styles.wrapper}>
            <h1>Home</h1>

            <button onClick={onGetStats}>
                onGetStats
            </button>
            <button onClick={onGetLoggedInAthlete}>
                onGetLoggedInAthlete
            </button>

            {loggedInAthlete &&
                <div className={styles.profile}>
                    <img src={loggedInAthlete?.profile} alt="" />
                    <h3>{loggedInAthlete.firstname}</h3>
                    <p>{loggedInAthlete.bio}</p>
                </div>
            }
            {stats &&
                <div className={styles.stats}>
                    <table>
                        <thead>
                            <tr>
                                <th>Swim</th>
                                <th>Bike</th>
                                <th>Run</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{stats.ytd_swim_totals?.count}</td>
                                <td>{stats.ytd_ride_totals?.count}</td>
                                <td>{stats.ytd_run_totals?.count}</td>
                            </tr>
                            <tr>
                                <td>{((stats.ytd_swim_totals?.distance ?? 0) / 1000).toFixed(2)}</td>
                                <td>{((stats.ytd_ride_totals?.distance ?? 0) / 1000).toFixed(2)}</td>
                                <td>{((stats.ytd_run_totals?.distance ?? 0) / 1000).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>{((stats.ytd_swim_totals?.moving_time ?? 0) / 3600).toFixed(2)}</td>
                                <td>{((stats.ytd_ride_totals?.moving_time ?? 0) / 3600).toFixed(2)}</td>
                                <td>{((stats.ytd_run_totals?.moving_time ?? 0) / 3600).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }

            <Link to="/activities">Activities</Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home