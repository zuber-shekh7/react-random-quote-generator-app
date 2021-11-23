import React from "react";

export const Quote = ({ quote }) => {
  if (!quote) {
    return null;
  }

  return (
    <div>
      <h1>{quote.en}</h1>
      <p>{quote.author}</p>
    </div>
  );
};
