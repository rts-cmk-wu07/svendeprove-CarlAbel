import React, { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../contexts/TokenProvider';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HandleSignUpBtn({ act }) {
  const { id } = useParams()

  const [isSignedUp, setIsSignedUp] = useState(false);
  const { token } = useContext(TokenContext)
  useEffect(() => {
    if (act.users.map(item => item.id).includes(token.userId)) {
      setIsSignedUp(true)
    }
  }, []);
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
      toast.success('You have signed up successfully!');
    } catch (error) {
      console.log(error);
    }
  }
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
      toast.success('You have been removed from the activity!');
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <>
      {isSignedUp ? (
        <input className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="button"
          value="Forlad"
          onClick={handleDelete}
        />

      ) : (
        <input
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="button"
          value="Tilmeld"
          onClick={handleSignUp}
        />
      )}
    </>
  )
}
