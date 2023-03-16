import { useContext, useEffect, useState } from "react"
import { TokenContext } from "../contexts/TokenProvider"
import axios from "axios";
import useCookie from "react-use-cookie"
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function useLogin() {
    const navigate = useNavigate()
    const [, setTokenCookie] = useCookie("auth-cookie", "")
    const { token, setToken } = useContext(TokenContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function handleLogin(e, request) {
        e.preventDefault()
        try {
            const response = await axios.post(`${API_URL}/auth/token`, request)
            if (request.rememberMe) {
                const milliseconds = response.data.validUntil - Date.now()
                const validFor = milliseconds / (1000 * 60 * 60 * 24)
                setTokenCookie(JSON.stringify(response.data), {
                    days: validFor,
                    SameSite: "Strict"
                })
            }
            setToken(response.data)
        } catch (error) {
            //Vores Fejlhåndtering for bruger og password
            if (error.response) {
                console.log(error.response.status); // 401 unauthorized
                setError("Ugyldigt brugernavn eller adgangskode")
                return
            }
            //Vores Fejlhåndtering ved evt. hvis server er nede
            setError("Internal server error")
        } finally {
            setLoading(false)
        }
    }
    useEffect(function () {
        if (token) {
            navigate("/calendar")
        }
    }, [token, navigate])

    return { handleLogin, loading, error }
}

