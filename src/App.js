import React, { useState, useEffect } from "react";
import { Quote } from "./components/Quote";
import quoteApis from "./apis/randomQuotes";
import Navbar from "./components/Navbar";
import { getCurrentTheme, swithCurrentTheme, themes } from "./utils/theme";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [quote, setQuote] = useState(null);
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    getRandomQuote();
    const currentTheme = themes[getCurrentTheme()];
    document.body.classList.add(currentTheme.backgroundColor);
    document.body.classList.add(currentTheme.textColor);
  }, []);

  const getRandomQuote = async () => {
    setQuote(null);
    const response = await quoteApis.get("/random");
    setQuote(response.data);
  };

  const switchTheme = () => {
    const previousTheme = themes[getCurrentTheme()];
    setTheme(swithCurrentTheme());
    const currentTheme = themes[getCurrentTheme()];
    document.body.classList.remove(previousTheme.backgroundColor);
    document.body.classList.remove(previousTheme.textColor);
    document.body.classList.add(currentTheme.backgroundColor);
    document.body.classList.add(currentTheme.textColor);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[getCurrentTheme()] }}>
      <Navbar
        theme={theme}
        switchTheme={switchTheme}
        getRandomQuote={getRandomQuote}
      />
      <main
        className={`container vh-100 d-flex justify-content-center align-items-center ${theme}`}
      >
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Quote quote={quote} getRandomQuote={getRandomQuote} />
          </div>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
