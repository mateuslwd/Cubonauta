import "./card.css";

import FavButton from "../../searchBar/filterPopUp/cubeArea/buttons/likeButton/favButton";
import CheckMark from "../../commons/checkMark/checkMark";

interface Props {
  formula: string;
}

function Card({ formula }: Props) {
  return (
    <>
      <div className="card">
        <span className="card__span">{formula}</span>
        <img src="img.png" className="card__img"></img>
        <div className="card__actions">
          <CheckMark />
          <FavButton />
        </div>
      </div>
    </>
  );
}

export default Card;
