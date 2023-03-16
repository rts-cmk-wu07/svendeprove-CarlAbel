import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { TokenContext } from '../contexts/TokenProvider';
import useAxios from '../hooks/useAxios';

export default function Kalender() {
    const { token } = useContext(TokenContext)
    const { paramsId } = useParams()

    const { data } = useAxios({
        url: `http://localhost:4000/api/v1/users/${token.id}/activities/${paramsId}`,
        headers: {
            authorization: "Bearer " + token.token,
        },
    });

    console.log(data.activities);

    return (
        <div>
            Calender
        </div>
    );

}
