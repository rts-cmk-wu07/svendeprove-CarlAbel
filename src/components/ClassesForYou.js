import useAxios from "../hooks/useAxios"
import { useNavigate } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { PropagateLoader } from 'react-spinners';

export default function ClassesForYou() {
    const { data, loading, error } = useAxios(
        {
         url: "http://localhost:4000/api/v1/activities"
        }
    )
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.75, // Styling purposes.
    slidesToScroll: 1.8, // If more classes gets added, change this accordingly.
  }
  
  return (
    <div className="pb-3">
        <pre>{error}</pre>
        {loading ? <PropagateLoader className="text-center" color="#36d7b7" /> : <Slider {...settings}>
        {data &&
          data.map((item) => (
            <div
              onClick={() => navigate(`/classDetails/${item.id}`)}
              className="w-32 overflow-hidden cursor-pointer"
              key={item.id}
            >
              <img
                className="h-32 w-[90%] object-cover rounded-xl shadow-sm"
                src={item.asset.url}
                alt=""
              />
              <h2 className="truncate pr-4">{item.className}</h2>
            </div>
          ))}
      </Slider>}
    </div>
  )
}
