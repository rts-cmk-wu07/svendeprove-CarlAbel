// Importerer axios og nødvendige hooks
import axios from 'axios'
import { useState, useEffect } from 'react'

// Brugerdefineret hook til at udføre en Axios-anmodning
export default function useAxios({ url, method = "GET", headers = {} }) {
  // Bruger useState til at opbevare responsdata, loading-tilstand og eventuelle fejl
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Bruger useEffect til at udføre en axios-anmodning, når komponentet er monteret eller url ændres
  useEffect(function () {
    // Async funktion til at udføre anmodningen
    (async function () {

      try {
        // Hvis url ikke er givet, kaster en fejl
        if (!url) throw new Error("url is required")
        // Sætter loading tilstanden til true
        setLoading(true)
        // Udfører axios-anmodningen og gemmer responsdata
        const response = await axios({ url, method, headers })
        setData(response.data)
      } catch (error) {
        // Logger fejl i konsollen og sætter fejltilstanden
        console.error(error)
        setError("something went wrong")
      } finally {
        // Sætter loading tilstand til false
        setLoading(false)
      }
    })()
    /* eslint-disable-next-line */
  }, [url])

  // Returnerer responsdata, loading-tilstand og eventuelle fejl
  return { data, loading, error }
}

// Path: src\hooks\useLogin.js
