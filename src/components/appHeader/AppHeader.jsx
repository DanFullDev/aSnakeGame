import React from "react";
import "./AppHeader.css";

export default function AppHeader() {
  return (
    <div className="text-center m-5 transform duration-500 ease-linear hover:scale-110 cursor-pointer w-full">
      <h1 className="text-6xl text-gray-700 m-2">Snake Game</h1>
      <div className="text-xs"> Made with React</div>
    </div>
  );
}
