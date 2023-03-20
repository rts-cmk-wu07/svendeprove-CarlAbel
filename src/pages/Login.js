// Importerer nødvendige ressourcer og hooks
import backgroundImage from "../Assets/splash-image.jpg"
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { X } from "lucide-react"

// Definerer Login-funktionen
export default function Login() {

  // Opretter state for login-information
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    rememberMe: false // tilføjet state for afkrydsningsfeltet
  });

  // Håndterer inputændringer
  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setLoginInfo(prevState => ({ ...prevState, [name]: newValue }));
  };

  // Henter handleLogin, loading og error fra useLogin-hook
  const { handleLogin, loading, error } = useLogin();

  // Funktion til at lukke login-vinduet og navigere til hjemmesiden
  const handleClose = () => {
    window.location = "/home";
  };

  // Returnerer login-komponenten
  return (
    <div className="Login overflow-hidden relative flex justify-center items-center">
      <div>{loading}</div>

      <div className="absolute text-red-600 z-30 translate-y-20 drop-shadow-lg">{error}</div>
      <img
        src={backgroundImage}
        alt="welcome-background"
        className="relative z-10 object-cover w-screen h-screen"
      />
      <div className="bg-[#5E2E5380] absolute inset-0 scale-125 -translate-y-7 overflow-hidden rotate-[60deg] z-20"></div>
      <form onSubmit={(e) => handleLogin(e, loginInfo)} className="absolute z-30 h-94 top-40 flex flex-col justify-center items-center">

        <X onClick={handleClose} className="bg-[#5E2E5380] rounded-3xl w-12 h-12 absolute -top-20 -right-10 text-white text-lg" />
        <h1 className="text-[48px] text-white py-4 font-ubuntu mr-20">Log ind</h1>
        <input
          className="bg-[#EAEAEA] text-black text-[18px] px-6 py-2 mb-4 w-full max-w-sm"
          type="text"
          name="username"
          value={loginInfo.username}
          onChange={handleInputChange}
          placeholder="brugernavn"
        />
        <input
          className="bg-[#EAEAEA] text-black text-[18px] px-6 py-2 mb-4 w-full max-w-sm"
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleInputChange}
          placeholder="adgangskode"
        />
        <div className="flex items-center gap-2 mr-32 mb-2">
          <input
            className=" border-black w-4 h-5 rounded-md"
            type="checkbox"
            name="rememberMe"
            checked={loginInfo.rememberMe}
            onChange={handleInputChange}
          />
          <label className="font-ubuntu text-white">Husk mig</label>
        </div>
        <input
          className="bg-[#5E2E53] text-white text-center text-[18px] px-16 py-4 rounded-xl shadow-lg"
          type="submit"
          value="Log ind"
        />
      </form>
    </div>
  );
}

