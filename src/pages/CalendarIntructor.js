import useAxios from '../hooks/useAxios';
import { PropagateLoader } from 'react-spinners';
import { TokenContext } from '../contexts/TokenProvider';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

export default function CalendarInstructor() {
    const [roster, setRoster] = useState(null);
    const { token } = useContext(TokenContext);

    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/activities`,
        headers: {
            authorization: 'Bearer ' + token.token,
        },
    });

    useEffect(() => {
        (async function () {
            const activities = data ? data.map(item => item.id) : "";
            const userId = activities && activities.filter((activity) => activity === token.userId);
            if (userId.length >= 0) {
                const response = await axios.get(`http://localhost:4000/api/v1/users/${token.userId}/roster/${userId}`,
                    {
                        headers: {
                            Authorization: 'Bearer ' + token.token,
                        },
                    }
                );
                setRoster(response);
            }
        })();
    }, [data, token.userId, token.token]);

    return (
        <div className="">
            <h1 className="text-[36px] text-white py-4 font-ubuntu ml-5">Intructors Calendar</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
                {data ? (
                    <ul>
                        {roster && roster.data.map((user) => (
                            <li key={user.id}>
                                {user.firstname} {user.lastname}
                            </li>
                        ))}
                    </ul>


                ) : (
                    <div className="text-center">
                        <PropagateLoader color="#36d7b7" />
                    </div>
                )}
            </div>
        </div >
    );
}
