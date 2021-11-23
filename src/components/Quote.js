import React from "react";

export const Quote = ({ quote }) => {
  if (!quote) {
    return (
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="display-4">{quote.en}</h1>
      <p className="lead">- {quote.author}</p>
    </div>
  );
};
