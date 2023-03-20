// Importerer nødvendige komponenter og ikoner
import { Link } from "react-router-dom"
import { HomeIcon, Search, Calendar } from "lucide-react"

export default function Navbar() {

  return (
    // Viser en navigationsbjælke i bunden af skærmen med links til hjemmesiden, søgning, kalender og en logud-knap
    <div className="fixed bottom-0 bg-white z-50 border h-[66px] w-full">
      <ul className="flex text-lg justify-around items-center h-full">
        <li className="my-6 text-[28px] rounded-3xl border-[2px] border-black p-2">
          <Link to="/home">
            <HomeIcon size={28} />
          </Link>
        </li>
        <li className="my-6 text-[28px] rounded-3xl border-[2px] border-black p-2">
          <Link to="/search">
            <Search size={28} />
          </Link>
        </li>
        <li className="my-6 text-[28px] rounded-3xl border-[2px] border-black p-2">
          <Link to="/calendar">
            <Calendar size={28} />
          </Link>
        </li>
        {/* // Logud-knappen er ikke implementeret */}
        {/* <li className="my-6 text-[28px] rounded-3xl border-[2px] border-black p-2">
          <button onClick="">
            <LogOut size={26} />
          </button>
        </li> */}
      </ul>
    </div>
  )
}


