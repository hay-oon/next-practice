import { useRouter } from "next/router";
import { useState } from "react";

const SearchForm = ({ initialValue = "" }) => {
  const [search, setSearch] = useState(initialValue);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      router.push("/");
      return;
    }

    router.push(`/search?q=${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-2 border-gray-300 text-black rounded-md p-2"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white rounded-md p-2 ml-2 hover:bg-gray-700"
      >
        검색
      </button>
    </form>
  );
};

export default SearchForm;
