import React from "react";
import Buttons from "./colorButtons";
import { useState } from "react";

const Body = () => {
  const [color, setColor] = useState("white");
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <Buttons colorSet={setColor} />
    </div>
  );
};

export default Body;
