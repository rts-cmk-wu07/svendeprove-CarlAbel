// Jeg importerer nødvendige hooks, komponenter og kontekster
import { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../contexts/TokenProvider';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

export default function HandleSignUpBtn({ act }) {
  // Bruger useParams og TokenContext for at få adgang til aktivitets-ID og brugerens token
  const { id } = useParams()
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { token } = useContext(TokenContext)

  // Tjekker, om brugeren er tilmeldt aktiviteten, og sætter isSignedUp til true, hvis brugeren er tilmeldt
  useEffect(() => {
    if (act.users.map(item => item.id).includes(token.userId)) {
      setIsSignedUp(true)
    }
  }, [act.users, token.userId]);

  // Axios-kald til backend, der tilmelder brugeren til aktiviteten
  async function handleSignUp() {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/users/${token.userId}/activities/${id}`,
        undefined,
        {
          headers: {
            authorization: "Bearer " + token.token,
          },
        }
      );
      console.log(response);
      setIsSignedUp(true);
      toast.success('Du er nu tilmeldt! Vi glæder os til at se dig!');
    } catch (error) {
      console.log(error);
    }
  }
  // Axios-kald til backend, der fjerner brugeren fra aktiviteten
  async function handleDelete() {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/users/${token.userId}/activities/${id}`,
        {
          headers: {
            authorization: "Bearer " + token.token,
          },
        }
      );
      console.log(response);
      setIsSignedUp(false);
      toast.success('Du er ikke længere tilmeldt dette hold!');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // Viser enten "Forlad" eller "Tilmeld" knappen baseret på brugerens tilmeldingsstatus
    <>
      {isSignedUp ? (
        <motion.input
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"

          type="button"
          value="Forlad"
          onClick={handleDelete}
        />
      ) : (
        <motion.input
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="button"
          value="Tilmeld"
          onClick={handleSignUp}
        />
      )}
    </>
  )
}
