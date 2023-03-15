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

  return (
    <div className="w-full px-2">
      <form className="relative flex " onSubmit={handleSubmit}>
        <button
          className="absolute inset-y-0 left-0 flex items-center pl-3"
          type="submit"
        >
          <SearchIcon className="text-gray-400" size={16} />
        </button>
        <input
          className="w-full center border-2 border-gray-250 bg-gray-200 h-12 px-5 pl-10 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search classes"
        />
      </form>

      {/* Display filtered activities */}
        <div className="flex flex-col items-center gap-8">
            {filteredActivities?.map((activity) => (
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
                        {activity.minAge} - {activity.maxAge} min
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}
