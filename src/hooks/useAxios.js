import axios from 'axios'
import { useState, useEffect } from 'react'


export default function useAxios({ url, method = "GET", headers = {} }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    

    useEffect(function() {
      (async function() {
          
        try {
         if (!url) throw new Error ("url is required")
          setLoading(true)
          const response = await axios({ url, method, headers })
          setData(response.data)
        } catch (error) {
            console.error(error) // evt. Sentry.io
            setError("something went wrong")
        } finally {
        setLoading(false)
        }
      })()
    /* eslint-disable-next-line*/
    }, [url])


    return { data, loading, error }
  
}