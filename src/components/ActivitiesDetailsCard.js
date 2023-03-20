// Importér nødvendige hooks og komponenter
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { PropagateLoader } from "react-spinners";
import HandleSignUpBtn from "./HandleSignUpBtn";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenProvider";

// Opretter et funktionskomponent ved navn ActivitiesDetailsCard
export default function ActivitiesDetailsCard() {
  // Hent id fra URL-parametre
  const { id } = useParams();
  // Brug useAxios til at hente aktivitetsdetaljer fra API'et
  const { data } = useAxios({
    url: `http://localhost:4000/api/v1/activities/${id}`,
  });

  // Henter token fra TokenContext
  const { token } = useContext(TokenContext);

  // Vis en "loader", imens data hentes
  if (!data) {
    return <PropagateLoader className="text-center mt-52 h-12" color="#36d7b7" />;
  }

  // Dekonstruer nødvendige data fra API-svaret.
  const { name, asset, description } = data;

  // Returnere et JSX-element med aktivitetsdetaljerne og en tilmeldingsknap (hvis der er en token)
  return (
    <>
      <div className="w-full min-h-[32rem] relative rounded-lg">
        <img
          src={asset.url}
          alt={name}
          className="absolute z-0 h-[32rem] w-full object-cover shadow-md"
        />
        {token ? <HandleSignUpBtn act={data} /> : null}
      </div>
      <div className="w-full ml-5 mt-4 relative">
        <h2 className="top-0 w-[17rem] font-ubuntu text-[24px] font-normal text-white">
          {name}
        </h2>
        <span className="text-white text-[18px] top-7">
          {" "}
          {data.minAge} - {data.maxAge} år
        </span>
        <p className="text-white text-[18px] mt-2 top-16">{description}</p>
      </div>
    </>
  );
}

