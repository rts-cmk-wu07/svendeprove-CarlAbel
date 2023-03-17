import { useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { PropagateLoader } from 'react-spinners';
import { TokenContext } from '../contexts/TokenProvider';

export default function CalendarForInstructor() {
    const { token } = useContext(TokenContext);
    const [instructorRoster, setInstructorRoster] = useState(null)

    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/activities`,
    });
    useEffect(() => {
        (async function () {
            const rosterActivities = data && data.filter(ids => ids.instructorId === token.userId);
            setInstructorRoster(rosterActivities);
        })();
    }, [data, token.userId]);

    return (
        <div className="">
            <h1 className="text-[36px] text-white font-ubuntu -translate-y-4 mb-2 -ml-1">Kalender</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data ? (
                    instructorRoster && instructorRoster.map(activity => (
                        <Link to={`/calendar/${activity.id}`}>
                            <h2>{activity.name}</h2>
                            <p>{activity.weekday} {activity.time}</p>
                        </Link>
                    ))
                ) : (
                    <PropagateLoader className="text-center" color="#36d7b7" />
                )}
            </div>
        </div >
    )
}
