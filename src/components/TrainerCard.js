import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import { PropagateLoader } from 'react-spinners';

export default function TrainerCard() {
  const { id } = useParams()
  const [ trainersData, setTrainersData] = useState(null)
  const { data, error } = useAxios(
    {
     url: `https://test-trainer-api.onrender.com/api/v1/classes/${id}`
    }
)
    useEffect(() => {
        const fetchTrainers = async () => {
        const trainersResponse = await fetch(
            `https://test-trainer-api.onrender.com/api/v1/trainers/${data?.trainerId}` 
        )
        const trainersData = await trainersResponse.json()
            setTrainersData(trainersData)
        }
            fetchTrainers()
    }, [data, id])
    

  if (!data) {
    return <PropagateLoader className="text-center" color="#36d7b7" /> 
  }

  const { className, trainer } = data
  

  return (
    <div className="flex w-64 rounded-lg overflow-hidden">
      <pre>{error}</pre>
      <img
        src={trainersData?.asset?.url}
        alt={className}
        className="h-[90px] w-[25%] object-cover rounded-xl shadow-sm my-2"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium">{trainer.trainerName}</h2>
      </div>
    </div>
  )
}
