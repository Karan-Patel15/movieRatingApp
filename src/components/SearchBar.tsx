import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface props {
  contentType: number;
}
export default function SearchBar({ contentType }: props) {
  const [searchQuery, setSearchQuery] = useState("");
  const Navigate = useNavigate();

  const handleSearch = async () => {
    if (searchQuery.length > 0) {
      Navigate(`/search/${searchQuery}`, {
        state: { query: searchQuery, contentType: contentType },
      });
    }
  };
  return (
    <div className="flex justify-center mb-28 w-full h-10">
      <input
        type="text"
        placeholder="Search for Movies and TV Shows"
        className="w-96 h-10 rounded-md border border-gray-300 p-2"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <GrSearch
        className="text-gray-500 h-8 w-8 pt-2"
        onClick={() => handleSearch()}
      />
    </div>
  );
}
