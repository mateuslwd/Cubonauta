import { useState } from "react";
import "./favButton.css";

import { FaHeart } from "react-icons/fa";

function FavButton() {
  const handleClick = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };
  const [state, setState] = useState(false);

  return (
    <>
      <FaHeart
        onClick={handleClick}
        className={
          state
            ? "filter__cubeArea__favButton filter__cubeArea__favButton--active"
            : "filter__cubeArea__favButton"
        }
      />
    </>
  );
}

export default FavButton;
