// Importerer ActivitiesDetailsCard-komponenten
import ActivitiesDetailsCard from "../components/ActivitiesDetailsCard";

// Definerer ActivitiesDetails-funktionen
export default function ActivitiesDetails() {
  return (
    // Aktivitetens detaljer vises med en baggrundsfarve og scrollbar skjult
    <div className="ActivitiesDetails bg-[#5E2E53] h-full scrollbar-hide">
      {/* // Indsætter ActivitiesDetailsCard-komponenten */}
      <ActivitiesDetailsCard />
    </div>
  )
}