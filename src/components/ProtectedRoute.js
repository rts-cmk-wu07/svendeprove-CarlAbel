// Importerer nødvendige hooks og kontekster
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../contexts/TokenProvider";

export default function ProtectedRoute({ children }) {
	// Bruger TokenContext for at få adgang til brugerens token
	const { token } = useContext(TokenContext)
	// Beskytter bestemte ruter ved at kontrollere, om brugeren har en gyldig token
	// Hvis brugeren har en token, vises det beskyttede komponent, ellers omdirigeres brugeren til login-siden.
	return token ? children : <Navigate to="/login" />
}
