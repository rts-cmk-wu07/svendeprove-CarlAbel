// Importerer useContext fra React og TokenContext fra TokenProvider
import { useContext } from 'react';
import { TokenContext } from '../contexts/TokenProvider';
// Importerer CalendarForUser og CalendarForInstructor komponenterne
import CalendarForUser from '../components/CalendarForUser';
import CalendarForInstructor from '../components/CalendarForInstructor';

// Definerer Calendar-funktionen
export default function Calendar() {
    // Bruger TokenContext til at hente 'token'-objektet
    const { token } = useContext(TokenContext);

    return (
        <>
            <div className="p-8">
                {/* Tjekker om brugerens rolle er 'instructor' */}
                {token.role === 'instructor' ? (
                    // Hvis brugeren er en instruktør, vises CalendarForInstructor-komponenten
                    <CalendarForInstructor />
                ) : (
                    // Hvis brugeren ikke er "instructor", vises CalendarForUser-komponenten
                    <CalendarForUser />
                )}
            </div>
        </>
    );
}


