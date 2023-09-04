import { useState } from "react";
import "./checkMark.css";

import { BsCheck } from "react-icons/bs";

function CheckMark() {
  const clickHandle = () => {
    if (state) {
      setState(false);
    }
    {
      setState(true);
    }
  };
  const [state, setState] = useState(false);

  return (
    <BsCheck
      onClick={clickHandle}
      className={state ? "checkMark checkMark--active" : "checkMark"}
    />
  );
}

export default CheckMark;
