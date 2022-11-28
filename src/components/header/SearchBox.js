import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const items = [
  {
    id: 0,
    title: "Cobol",
  },
  {
    id: 1,
    title: "JavaScript",
  },
  {
    id: 2,
    title: "Basic",
  },
  {
    id: 3,
    title: "PHP",
  },
  {
    id: 4,
    title: "Java",
  },
];

export const SearchBox = () => {
  const [itemsMl, setItemsMl] = useState([]);
  const onChange = () => {
    console.log("Prueba");
  };

  const handleOnSearch = async (string, results) => {
    console.log(string, results);
    let resApi = await fetch(
      `https://api.mercadolibre.com/sites/MLC/search?q=${string}&limit=4`
    );
    let products = await resApi.json();
    console.log(products?.results);
    setItemsMl(products?.results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    console.log(item, "formatResult");
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          title: {item.title}
        </span>
      </>
    );
  };
  return (
    <div className="card wh-90">
      <div>
        <ReactSearchAutocomplete
          items={itemsMl}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          autoFocus
          placeholder="Nunca dejes de buscar"
          styling={{ borderRadius: "4px", height: "40px" }}
          fuseOptions={{ keys: ["title", "description"] }}
          resultStringKeyName="title"
        />
      </div>
    </div>
  );
};
