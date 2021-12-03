import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export const Quote = ({ quote, getRandomQuote }) => {
  const { theme } = useContext(ThemeContext);
  if (!quote) {
    return (
      <div className={`spinner-border ${theme.textColor}`} role="status">
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
          className={`${theme.btn} mx-2`}
          href={`https://twitter.com/intent/tweet?text=${quote.en}`}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <button className={theme.btn} onClick={getRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};
