// Importerer Activities-komponenten
import Activities from "../components/Activities"

// Definerer Home-funktionen
export default function Home() {
  return (
    <div className="Activities bg-[#5E2E53] px-2 scrollbar-hide">
      {/* // Viser en overskrift for siden */}
      <h1 className="text-[36px] text-white py-4 font-ubuntu ml-5 ">Aktiviteter</h1>
      {/* // Indsætter Activities-komponentet */}
      <Activities />
    </div>
  )
}

