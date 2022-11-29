import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate, useLocation } from "react-router-dom";

export const SearchBox = () => {
  const location = useLocation();
  const history = useNavigate();
  const [items, setItems] = useState([]);
  const onChange = () => {
    console.log("Prueba");
  };

  const handleOnSearch = async (string, results) => {
    console.log("2");
    console.log(string, results);
    let resApi = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${string}&limit=4`
    );
    console.log("pppppp", string, results);
    let products = await resApi.json();
    await setItems(products?.results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    let text = item.title;
    let formated = text.replace(/\s/g, "-");
    document.location.href = `/items?search=${formated}`;
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.title}</span>
    );
  };
  return (
    <div className="card wh-90">
      <div>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          autoFocus
          placeholder="Nunca dejes de buscar"
          styling={{ borderRadius: "6px", height: "40px" }}
          fuseOptions={{ keys: ["title"] }}
          resultStringKeyName="title"
          formatResult={formatResult}
        />
      </div>
    </div>
  );
};
