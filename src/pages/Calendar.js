import { useContext } from 'react';
import { TokenContext } from '../contexts/TokenProvider';
import CalendarForUser from '../components/CalendarForUser';

export default function Calendar() {
    const { token } = useContext(TokenContext);




    console.log(token);
    return (
        <>
            <div className="p-8">
                <CalendarForUser />


            </div>
        </>
    );
}

