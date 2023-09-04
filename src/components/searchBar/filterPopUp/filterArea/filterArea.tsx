import "./filterArea.css";

import Filter from "./filter";
import { useState } from "react";

function FilterArea() {
  return (
    <div className="filterPopUp__filters">
      <div className="filter__method">
        <h1>Method</h1>
        <h2>Frederich</h2>
      </div>
      <div className="filter__container">
        <Filter name={"Shortest"} />
        <Filter name={"Olds"} />
        <Filter name={"Fastests"} />
        <Filter name={"Funny"} />
        <Filter name={"Easiest"} />
        <Filter name={"News"} />
      </div>
    </div>
  );
}

export default FilterArea;
