import "./filterPopUp.css";

import FilterArea from "./filterArea/filterArea";
import CubeArea from "./cubeArea/cubeArea";

interface Props {
  state: string;
}

function FilterPopUp({ state }: Props) {
  return (
    <>
      <div
        className={
          state == "open" ? "filterPopUp filterPopUp--active" : "filterPopUp"
        }
      >
        <div className="filterPopUp__deadArea"></div>
        <div className="filterPopUp__area">
          <FilterArea />
          <CubeArea />
        </div>
      </div>
    </>
  );
}

export default FilterPopUp;
