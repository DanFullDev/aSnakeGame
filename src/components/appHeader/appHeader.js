import React from "react";
import "./appHeader.css";

export default function AppHeader() {
  return (
    <div className="text-center m-5">
      <h1 className="text-6xl text-gray-700 m-2">Snake Game</h1>
      <div className="text-xs"> Made with React</div>
    </div>
  );
}
