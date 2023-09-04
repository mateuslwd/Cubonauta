import { useState } from "react";
import "./searchBar.css";

import FilterButton from "./filterButton/filterButton";
import FilterPopUp from "./filterPopUp/filterPopUp";
import Seletor from "./seletor/selector";

function SearchBar() {
  const [state, setState] = useState("close");

  return (
    <>
      <div className="searchBar">
        <FilterPopUp state={state} />
        <div
          className={
            state == "open"
              ? "searchBar__holder searchBar__holder--active"
              : "searchBar__holder"
          }
        >
          <input
            className="searchBar__input"
            placeholder="Pesquise aqui"
          ></input>
          <div className="searchBar__divisor"></div>
          <FilterButton state={state} setState={setState} />
        </div>
      </div>
      <div className="searchBar__seletor">
        <Seletor name={"F2L"} />
        <Seletor name={"PLL"} />
        <Seletor name={"OLL"} />
      </div>
    </>
  );
}

export default SearchBar;
