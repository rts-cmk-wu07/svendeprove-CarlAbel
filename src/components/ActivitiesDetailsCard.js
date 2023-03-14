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
          className="bg-white text-[26px] absolute right-0 px-6 py-3 bottom-6 rounded-l-xl"
          type="submit"
          value="Sign up"
        />
      </div>
      <div className="w-full ml-5">
          <h2 className="w-[17rem] font-ubuntu text-[24px] font-normal text-white">
                {name}
              </h2>
          <span className="text-white text-[18px]">{data.minAge} -  {data.maxAge} år</span>
          <p className="text-white leading-[1.4rem] text-[18px]">{description}</p>
      </div>
    </>
  )
}