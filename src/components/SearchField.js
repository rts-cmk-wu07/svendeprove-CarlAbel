import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function SearchField() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useAxios({
    url: "http://localhost:4000/api/v1/activities",
  });

  const navigate = useNavigate();

  const filteredActivities = data?.filter((activity) =>
    activity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action on form submission
  };

  const hasResults = searchQuery !== "" && filteredActivities?.length > 0;

  return (
    <div className="w-full px-5">
      <form className="relative flex" onSubmit={handleSubmit}>
        <button
          className="absolute inset-y-0 right-4 flex items-center pl-3"
          type="submit"
        >
          <SearchIcon className="text-gray-400" size={16} />
        </button>
        <input
          className="w-full center bg-[#C4C4C430] h-12 pl-5 text-sm focus:outline-none text-white appearance-none"
          type="search"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Søg efter aktiviteter"
        />
      </form>

      {/* Display filtered activities */}
      {hasResults ? (
        <div className="flex flex-col items-center gap-8 mt-8">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="w-50 overflow-hidden cursor-pointer relative"
              onClick={() => navigate(`/activities/${activity.id}`)}
            >
              <img
                className="h-[344px] w-[356px] relative object-cover rounded-tr-[39px] rounded-tl-[39px] rounded-bl-[39px] shadow-sm"
                src={activity.asset.url}
                alt=""
              />
              <div className="absolute bottom-0 w-full h-[96px] bg-[#E1A1E9] bg-opacity-80 rounded-tr-[39px] rounded-bl-[39px]">
                <h2 className="text-[18px] truncate text-black font-ubuntu ml-8 mt-5">
                  {activity.name}
                </h2>
                <p className="text-[18px] truncate text-black font-ubuntu ml-8">
                  {activity.minAge} - {activity.maxAge} år
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-white">
          {searchQuery !== "" ? (
            "Der blev ikke fundet nogle aktiviteter med det navn, prøv at søge efter noget andet"
          ) : (
            "Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet."
          )}
        </div>
      )}
    </div>
  );
}
