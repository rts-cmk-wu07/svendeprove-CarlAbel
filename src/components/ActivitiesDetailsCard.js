import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import { PropagateLoader } from 'react-spinners';
// import HandleSignUpBtn from "./HandleSignUpBtn";


export default function ActivitiesDetailsCard() {
  const { id } = useParams()
  //custom hook
  const { data } = useAxios(
        {
         url: `http://localhost:4000/api/v1/activities/${id}`
        }
    )
  if (!data) {
    return <PropagateLoader className="text-center" color="#36d7b7" />
  }

  const { name, asset, description } = data
  
  return (
    <>
      <div className="w-full h-[32rem] relative rounded-lg">
        <img
          src={asset.url}
          alt={name}
          className="absolute z-0 h-[32rem] w-full object-cover shadow-md"
        />
        <input
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="submit"
          value="Tilmeld"
        />
      </div>
      <div className="w-full h-[60px] ml-5 mt-4 relative">
          <h2 className="absolute top-0 w-[17rem] font-ubuntu text-[24px] font-normal text-white">
                {name}
              </h2>
          <span className="text-white text-[18px] absolute top-7"> {data.minAge} - {data.maxAge} år</span>
          <p className="text-white text-[18px] absolute top-16">{description}</p>
      </div>
    </>
  )
}