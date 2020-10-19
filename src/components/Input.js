import React, { useEffect, useState } from "react";
import { Input } from "antd";
import useFetchSearch from "../hooks/useFetchSearch";
import SearchResults from "./SearchResults";

const InputComponent = () => {
  const [searchVal, setSearchVal] = useState("");

  const { response, loading, error } = useFetchSearch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
    searchVal
  );

  useEffect(() => {
    console.log(searchVal);
    console.log("search response", response);
  }, [searchVal, response]);

  return (
    <div>
      <Input.Search
        enterButton={true}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        allowClear={true}
      />
      {response && <SearchResults data={response} />}
    </div>
  );
};

export default InputComponent;
