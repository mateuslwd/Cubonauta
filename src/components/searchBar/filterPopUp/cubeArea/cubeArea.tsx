import "./cubeArea.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiPuzzlePieceFill } from "react-icons/pi";

import FavButton from "./buttons/likeButton/favButton";

function CubeArea() {
  return (
    <div className="filterPopUp__cube">
      <div className="cube__header">
        <h1>3x3</h1>
        <h2>classic</h2>
      </div>
      <div className="cube__selector">
        <FaChevronLeft className="cube__selector__arrow" />
        <img src="img.png"></img>
        <FaChevronRight className="cube__selector__arrow" />
      </div>
      <div className="cube__actions">
        <PiPuzzlePieceFill className="cube__actions__act" />
        <FavButton />
      </div>
    </div>
  );
}

export default CubeArea;
