import React from "react";

export const Quote = ({ quote, getRandomQuote }) => {
  if (!quote) {
    return (
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="display-4">{quote.en}</h1>
      <p className="lead">- {quote.author}</p>
      <div>
        <a
          className="btn btn-outline-primary mx-2"
          href={`https://twitter.com/intent/tweet?text=${quote.en}`}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <button className="btn btn-outline-primary" onClick={getRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};
