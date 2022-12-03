import { useState, FC } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { searchProducts } from "../../api/mercadolibre";
import { Item } from "../../interfaces/products"

export const SearchBox:FC = () => {

  const [items, setItems] = useState<Item[]>([]);

  const handleOnSelect = (item:Item) => {
    let text = item.title;
    let formated = text.replace(/\s/g, "-");
    document.location.href = `/items?search=${formated}`;
  };

  const handleOnSearch = async(keyword:string) => {
    const data:Item[] = [];
    await searchProducts(keyword).then((response:any) => {
      response.map((res:any) => data.push(res.items[0]))
      setItems(data);
    })
  };

  const formatResult = (item:Item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>
        {item.title}
      </span>
    );
  };

  return (
    <div className="card wh-90">
      <div>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
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
