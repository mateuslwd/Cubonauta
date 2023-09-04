import "./filter.css";
import { useState } from "react";

interface Props {
  name: string;
}

function Filter({ name }: Props) {
  const clickHandle = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={clickHandle}
      className={
        active
          ? "filter__container__filters filter__container__filters--active"
          : "filter__container__filters"
      }
    >
      {name}
    </div>
  );
}

export default Filter;
