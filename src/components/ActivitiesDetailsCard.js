import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { PropagateLoader } from "react-spinners";
import HandleSignUpBtn from "./HandleSignUpBtn";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenProvider";

export default function ActivitiesDetailsCard() {
  const { id } = useParams();
  const { data } = useAxios({
    url: `http://localhost:4000/api/v1/activities/${id}`,
  });

  const { token } = useContext(TokenContext);

  if (!data) {
    return <PropagateLoader className="text-center" color="#36d7b7" />;
  }

  const { name, asset, description } = data;

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
