// Importerer nødvendige hooks og funktioner
import { createContext, useEffect, useState } from "react"
import { getCookie } from "react-use-cookie"

// Opretter TokenContext, som vil blive brugt til at dele token mellem forskellige komponenter
export const TokenContext = createContext(null)

// TokenProvider er et komponent, der omslutter andre komponenter og gør token tilgængeligt for dem gennem context også kaldet "TokenProvider" inde i "app.js"
export default function TokenProvider({ children }) {
	// Bruger useState til at opbevare min token
	const [token, setToken] = useState(null)

	// Bruger useEffect til at hente token fra en cookie, når komponentet er monteret
	useEffect(() => {
		// Hvis token ikke er sat endnu, prøv at hente det fra en cookie
		if (!token) {
			const tokenObject = getCookie("auth-cookie")
			// Hvis cookien findes, sæt token med værdien fra cookien "auth-cookie"
			if (tokenObject) {
				setToken(JSON.parse(tokenObject))
			}
		}
	}, [token])

	// Gør token og setToken tilgængelige for underkomponenter gennem TokenContext.Provider
	return (
		<TokenContext.Provider value={{ token, setToken }}>
			{children}
		</TokenContext.Provider>
	)
}

