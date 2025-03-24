import { useState } from 'react';
import getActivities from '../services/activities/getActivities';
import { Link } from 'react-router';
import { ISummaryActivity } from '../types/activities/ISummaryActivities';

const Activities = () => {
  const [activities, setActivities] = useState<ISummaryActivity[]>([]);

  const onGetActivities = async () => {
    const res = await getActivities();
    setActivities(res);
  };

  return (
    <div>
      <h1>Activities</h1>
      <div>
        {activities?.length > 0 ? (
          <>
            {activities?.map((activity) => (
              <Link to={`/activities/${activity.id}`} key={JSON.stringify(activity)}>
                <h2>{activity?.name}</h2>
              </Link>
            ))}
          </>
        ) : (
          <>No activities</>
        )}
      </div>

      <button onClick={onGetActivities}>Get Activities</button>
    </div>
  );
};

export default Activities;
