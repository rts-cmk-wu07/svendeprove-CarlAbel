import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { PropagateLoader } from 'react-spinners';
import { TokenContext } from '../contexts/TokenProvider';

export default function CalendarForInstructor() {
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();
    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/users/${token.userId}`,
        headers: {
            authorization: 'Bearer ' + token.token,
        },
    });
    return (
        <div className="">
            <h1 className="text-[36px] text-white font-ubuntu -translate-y-4 mb-2 -ml-1">Kalender</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data ? (
                    data.activities.length > 0 ? (
                        data.activities.map(activity => (
                            <div
                                key={activity.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                                onClick={() => navigate({
                                    pathname: `/calendar/${activity.id}`
                                })}
                            >
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{activity.name}</div>
                                    <p className="text-gray-700 text-base">{activity.time}</p>
                                    <p className="text-gray-700 text-base">{activity.weekday}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">Du er ikke tilmeldt nogle hold.</p>
                    )
                ) : (
                    <PropagateLoader className="text-center" color="#36d7b7" />
                )}
            </div>
        </div>
    )
}
