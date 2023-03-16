import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../contexts/TokenProvider';
import useAxios from '../hooks/useAxios';
import { PropagateLoader } from 'react-spinners';

export default function Calendar() {
    const { token } = useContext(TokenContext);
    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/users/${token.userId}`,
        headers: {
            authorization: 'Bearer ' + token.token,
        },
    });
    const navigate = useNavigate();

    return (
        <>
            <div className="p-8">
                <h1 className="text-[36px] text-white py-4 font-ubuntu ml-5">Kalender</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data ? (
                        data.activities.length > 0 ? (
                            data.activities.map(activity => (
                                <div
                                    key={activity.id}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                                    onClick={() => navigate(`/activities/${activity.id}`)}
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
        </>
    );
}

