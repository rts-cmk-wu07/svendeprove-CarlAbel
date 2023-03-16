import { useNavigate } from "react-router-dom"
import backgroundImage from "../Assets/splash-image.jpg"
import { motion } from "framer-motion";

export default function Velkommen() {
  const navigate = useNavigate()
  function handleClick(event) {
    event.preventDefault()
    sessionStorage.setItem("key", true)
    navigate("/home")
    navigate(0)
  }
  return (
    <div className="Velkommen">
      <img
        src={backgroundImage}
        alt="welcome-background"
        className="absolute z-10 object-cover w-screen h-screen"
      />

      <div className="absolute z-20 bottom-24 h-94">
        <div className="-translate-y-48">
          <h1 className="text-transparent text-stroke-landrup ml-14 text-[36px] translate-y-8 font-roboto">
            LANDRUP
          </h1>
          <div className="flex-col items-center">
            <p className="text-[#E856EB] text-stroke
            italic text-[76px] ml-14 font-racing">DANS</p>
            <div className="border bg-[#913693] border-[#913693] h-[14px] w-[233px] drop-shadow-lg -translate-y-4"></div>
          </div>
        </div>
        <motion.input
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          onClick={handleClick}
          className="bg-[#5E2E53] text-[#E9E9E9] text-center text-[18px] absolute px-16 py-4 -bottom-8 rounded-xl left-[90px]"
          type="submit"
          value="Kom i gang"
        />
      </div>
    </div>
  )
}
