import React from "react";
import "./GridCard.css";
import SnakeGrid from "../snakeGrid/SnakeGrid";

function GridCard() {
  return (
    <div className="bg-white border-4 border-gray-400 border-solid m-2 p-5 w-2/6 self-center rounded-lg shadow-xl text-center">
      <div>Hello</div>
      <SnakeGrid></SnakeGrid>
    </div>
  );
}

export default GridCard;
