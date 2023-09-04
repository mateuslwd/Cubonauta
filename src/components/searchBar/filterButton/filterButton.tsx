import "./filterButton.css";
import { FaFilter } from "react-icons/fa";

interface Props {
  state: string;
  setState: (state: string) => void;
}

function FilterButton({ state, setState }: Props) {
  const clickHandle = () => {
    if (state == "close") {
      setState("open");
    } else {
      setState("close");
    }
  };

  return (
    <>
      <FaFilter onClick={clickHandle} className="searchBar__filterButton" />
    </>
  );
}

export default FilterButton;
