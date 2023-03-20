// Importerer nødvendige hooks og komponenter
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropagateLoader } from "react-spinners";

// Opretter et funktionskomponent ved navn Activities
export default function Activities() {
  // Bruger useAxios til at hente aktiviteter fra API'et
  const { data, loading, error } = useAxios({
    url: "http://localhost:4000/api/v1/activities",
  });
  const navigate = useNavigate();

  // Returnér et JSX-element
  return (
    <div className="pb-3">
      <pre>{error}</pre>
      {loading ? (
        // Vis en "Loader", imens data hentes
        <PropagateLoader className="text-center" color="#36d7b7" />
      ) : (
        <div className="flex flex-col items-center gap-8 pb-16 overflow-y-scroll">
          {data &&
            // mapper over hver aktivitet og visser dets indhold i et "Card"
            data.map((item) => (
              <div
                onClick={() => navigate(`/activities/${item.id}`)}
                className="w-50 overflow-hidden cursor-pointer relative"
                key={item.id}
              >
                <img
                  className="h-[344px] w-[356px] relative object-cover rounded-tr-[39px] rounded-tl-[39px] rounded-bl-[39px] shadow-sm"
                  src={item.asset.url}
                  alt=""
                />
                <div className="absolute bottom-0 w-full h-[96px] bg-[#E1A1E9] bg-opacity-80 rounded-tr-[39px] rounded-bl-[39px]">
                  <h2 className="text-[18px] truncate text-black font-ubuntu ml-8 mt-5">{item.name}</h2>
                  <h2 className="text-[18px] truncate text-black font-ubuntu ml-8">{item.minAge} - {item.maxAge} år</h2>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}


// Path: src\components\ActivitiesDetailsCard.js
