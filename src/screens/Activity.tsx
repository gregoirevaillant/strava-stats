import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { IActivity } from "../types/activities/IActivities"
import getActivity from "../services/activities/getActivity"

const Activity = () => {
    const [activity, setActivity] = useState<IActivity | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                if (params.id) {
                    const res = await getActivity(params.id)
                    setActivity(res)
                }
            } catch (error) {
                console.error("Error fetching activity:", error)
            }
        }

        fetchActivity()
    }, [params.id])

    const formatDistance = (distance: number | undefined): string => {
        return distance ? (distance / 1000).toFixed(2) + ' km' : '0 km'
    }

    const formatTimeInMinutes = (time: number | undefined): string => {
        return time ? (time / 60).toFixed(2) + ' minutes' : '0 minutes'
    }

    return (
        <div>
            <button onClick={() => navigate("/activities")}>Get Back</button>
            <h1>Activity</h1>
            {activity ? (
                <>
                    <h2>{activity?.name}</h2>
                    <h4>{new Date(activity?.start_date ?? "").toLocaleString("fr")}</h4>
                    <p>{activity?.description}</p>

                    <ul>
                        <li>{formatDistance(activity?.distance)}</li>
                        <li>{formatTimeInMinutes(activity?.moving_time)}</li>
                        <li>{activity?.calories} calories</li>
                        <li>{activity?.total_elevation_gain} elevation</li>
                    </ul>
                </>
            ) : (
                <p>Loading activity...</p>
            )}
        </div>
    )
}

export default Activity
