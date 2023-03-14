import React, { useContext, useState } from 'react'
import { TokenContext } from './TokenProvider';
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
        `https://test-trainer-api.onrender.com/api/v1/users/${token.userId}/classes/${id}`,
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
          <span className="bg-white text-[26px] absolute right-0 px-6 py-3 bottom-6 rounded-l-xl z-50">
            Signed up
          </span>
        ) : (
          <input
            className="bg-white text-[26px] absolute right-0 px-6 py-3 bottom-6 rounded-l-xl z-50"
            type="submit"
            value="Sign up"
            onClick={handleSignUp}
          />
        )}
</>        
  )
  
}
