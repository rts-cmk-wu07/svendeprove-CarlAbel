import React, { useContext, useState } from 'react'
import { TokenContext } from '../contexts/TokenProvider';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HandleSignUpBtn() {
  const { id } = useParams()
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { token } = useContext(TokenContext)

  async function handleSignUp() {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/users/${token.userid}/activities/${id}`,
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
  return (

    <>
      {isSignedUp ? (
        <span className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl">
          Signed up
        </span>
      ) : (
        <input
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="submit"
          value="Sign up"
          onClick={handleSignUp}
        />
      )}
    </>
  )

}
