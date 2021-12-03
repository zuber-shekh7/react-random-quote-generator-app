import React, { useState, useEffect } from "react";
import { Quote } from "./components/Quote";
import quoteApis from "./apis/randomQuotes";
import Navbar from "./components/Navbar";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    setQuote(null);
    const response = await quoteApis.get("/random");
    setQuote(response.data);
  };
  return (
    <>
      <Navbar />
      <main className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Quote quote={quote} getRandomQuote={getRandomQuote} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
