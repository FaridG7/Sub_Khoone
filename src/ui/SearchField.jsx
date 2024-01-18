import { useSearchParams } from "react-router-dom";

function SearchField() {
  const [searchParams, setSearchParams] = useSearchParams();
  const serachQuery = searchParams.get("searchQuery") || "";

  return (
    <div>
      <input
        value={serachQuery}
        onChange={(element) => {
          searchParams.set("searchQuery", element.target.value);
          setSearchParams(searchParams);
        }}
      />
    </div>
  );
}

export default SearchField;
