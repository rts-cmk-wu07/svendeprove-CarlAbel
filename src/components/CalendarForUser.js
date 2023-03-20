// Importerer nødvendige hooks, komponenter og kontekster
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { PropagateLoader } from 'react-spinners';
import { TokenContext } from '../contexts/TokenProvider';

export default function CalendarForUser() {
    // Bruger TokenContext for at få adgang til brugerens token
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();
    // Henter brugerens aktiviteter fra API'et med custom hook useAxios.
    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/users/${token.userId}`,
        headers: {
            authorization: 'Bearer ' + token.token,
        },
    });

    return (
        <div className="CalendarForUser">
            <h1 className="text-[36px] text-white py-4 font-ubuntu -ml-1 -translate-y-6">Kalender</h1>
            {/* // Viser aktiviteterne i et gitterlayout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* // Hvis data er tilgængelig, skal du enten vise aktiviteter, eller en besked om, at der ikke er nogen aktiviteter at vise */}
                {data ? (
                    data.activities.length > 0 ? (
                        data.activities.map(activity => (
                            <div
                                key={activity.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                                onClick={() => navigate(`/activities/${activity.id}`)}
                            >
                                <div className="px-6 py-4">
                                    <h2 className="font-bold text-xl mb-2">{activity.name}</h2>
                                    <div className="flex">
                                        <p className="text-gray-700 text-base ">{activity.weekday}</p>
                                        <p className="text-gray-700 text-base pl-2">{activity.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">Du er ikke tilmeldt nogle hold.</p>
                    )
                    // Ellers vises en loader, mens data hentes
                ) : (

                    <PropagateLoader className="ml-40 mt-54 h-12" color="#36d7b7" />
                )}
            </div>
        </div>
    )
}

