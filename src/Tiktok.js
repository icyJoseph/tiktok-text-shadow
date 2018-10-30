import React from "react";

// tiktok takes a letter, so all words
// must be split on ""
export const Tiktok = ({ letter }) =>
  letter !== " " ? (
    <span className="text with-shadow" data-letter={letter}>
      {letter}
    </span>
  ) : (
    <span className="text">&nbsp;</span>
  );
