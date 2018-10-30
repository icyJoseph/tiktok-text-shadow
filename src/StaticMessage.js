import React from "react";
import { Tiktok } from "./Tiktok";

export const StaticMessage = ({ message = "Welcome" }) => (
  <div className="container">
    {message
      .split("")
      .map((letter, index) => <Tiktok key={letter + index} letter={letter} />)}
  </div>
);
