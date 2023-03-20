// Importér nødvendige hooks og komponenter
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../contexts/TokenProvider";
import axios from "axios";
import useCookie from "react-use-cookie";
import { useNavigate } from "react-router-dom";

// her definere API_URL fra .env.
const API_URL = process.env.REACT_APP_API_URL;

// Opret en brugerdefineret hook ved navn useLogin
export default function useLogin() {
    // Initialisér nødvendige hooks og states
    const navigate = useNavigate();
    const [, setTokenCookie] = useCookie("auth-cookie", "");
    const { token, setToken } = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Asynkron funktion til at håndtere login-processen
    async function handleLogin(e, request) {
        // Forhindre standardformularindsendelsesadfærd
        e.preventDefault();

        try {
            // Send en POST-anmodning til API'en med brugeroplysninger
            const response = await axios.post(`${API_URL}/auth/token`, request);

            // Hvis brugeren vælger "husk mig", skal du gemme token i en cookie
            if (request.rememberMe) {
                const milliseconds = response.data.validUntil - Date.now();
                const validFor = milliseconds / (1000 * 60 * 60 * 24);
                setTokenCookie(JSON.stringify(response.data), {
                    days: validFor,
                    SameSite: "Strict",
                });
            }

            // Indstil den modtagne token i TokenContext
            setToken(response.data);
        } catch (error) {
            // Håndter fejl relateret til ugyldigt brugernavn eller adgangskode
            if (error.response) {
                console.log(error.response.status); // 401 uautoriseret
                setError("Ugyldigt brugernavn eller adgangskode");
                return;
            }
            // Håndter fejl, når serveren er nede eller andre interne problemer
            setError("Intern serverfejl");
        } finally {
            // Indstil indlæsningsstatus til falsk, efter anmodningen er fuldført
            setLoading(false);
        }
    }

    // useEffect til at navigere til kalendersiden, når en token er tilgængelig
    useEffect(function () {
        if (token) {
            navigate("/calendar");
        }
    }, [token, navigate]);

    // Returnér et objekt, der indeholder handleLogin-funktionen og aktuelle tilstande
    return { handleLogin, loading, error };
}


// Path: src\components\Login.js

