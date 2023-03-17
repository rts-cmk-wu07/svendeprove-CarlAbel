import { useContext } from 'react';
import { TokenContext } from '../contexts/TokenProvider';
import CalendarForUser from '../components/CalendarForUser';
import CalendarForInstructor from '../components/CalendarForInstructor';

export default function Calendar() {
    const { token } = useContext(TokenContext);

    return (
        <>
            <div className="p-8">
                {token.role === 'instructor' ? (
                    <CalendarForInstructor />
                ) : (
                    <CalendarForUser />
                )}
            </div>
        </>
    );
}

