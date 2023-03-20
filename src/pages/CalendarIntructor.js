// Importerer nødvendige hooks og komponenter
import useAxios from '../hooks/useAxios';
import { PropagateLoader } from 'react-spinners';
import { TokenContext } from '../contexts/TokenProvider';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Definerer CalendarInstructor-funktionen
export default function CalendarInstructor() {
    // Opretter en state til at gemme instruktørens tilmeldingsliste
    const [roster, setRoster] = useState(null);
    // Henter token-objektet fra TokenContext
    const { token } = useContext(TokenContext);

    // Bruger useAxios custom hook til at sende en GET-request til API'en og hente aktiviteterne
    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/activities`,
        headers: {
            authorization: 'Bearer ' + token.token,
        },
    });

    // useEffect til at hente instruktørens tilmeldingsliste baseret på aktiviteterne og brugerens id
    useEffect(() => {
        (async function () {
            // Mapper over aktiviteterne for at hente deres id'er
            const activities = data ? data.map(item => item.id) : "";
            // Filtrerer aktiviteterne baseret på brugerens id
            const userId = activities && activities.filter((activity) => activity === token.userId);
            // Hvis brugerens id findes i aktiviteterne, sendes en GET-request for at hente instruktørens tilmeldingsliste
            if (userId.length >= 0) {
                const response = await axios.get(`http://localhost:4000/api/v1/users/${token.userId}/roster/${userId}`,
                    {
                        headers: {
                            Authorization: 'Bearer ' + token.token,
                        },
                    }
                );
                // Sætter roster-state med det hentede data
                setRoster(response);
            }
        })();
    }, [data, token.userId, token.token]);

    // Returnerer CalendarInstructor-komponentet
    return (
        <div className="">
            <h1 className="text-[36px] text-white py-4 font-ubuntu ml-5">Holddeltagere</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
                {data ? (
                    // Hvis der er data, vises tilmeldingslisten
                    <ul>
                        {roster && roster.data.map((user) => (
                            <li className=" text-white font-ubuntu text-[18px]" key={user.id}>
                                {user.firstname} {user.lastname}
                            </li>
                        ))}
                    </ul>
                ) : (
                    // Hvis der ikke er data, vises en loader

                    <PropagateLoader className="ml-40 mt-54 h-12" color="#EAEAEA" />

                )}
            </div>
        </div >
    );
}

