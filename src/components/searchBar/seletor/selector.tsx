import { useState } from "react";
import "./seletor.css";

interface Props {
  name: string;
}

function Seletor({ name }: Props) {
  const handleClick = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const [state, setState] = useState(false);

  return (
    <span
      onClick={handleClick}
      className={
        state
          ? "searchBar__seletor__option searchBar__seletor__option--active"
          : "searchBar__seletor__option"
      }
    >
      {name}
    </span>
  );
}

export default Seletor;
