const themes = {
  dark: {
    backgroundColor: "bg-dark",
    textColor: "text-light",
    navbarColor: "navbar-dark",
  },
  light: {
    backgroundColor: "bg-light",
    textColor: "text-dark",
    navbarColor: "navbar-light",
  },
};

const getCurrentTheme = () => {
  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) {
    localStorage.setItem("theme", "light");
    currentTheme = "light";
  }

  return currentTheme;
};

const swithCurrentTheme = () => {
  let currentTheme = localStorage.getItem("theme");

  if (!currentTheme) {
    localStorage.setItem("theme", "light");
    currentTheme = "light";
  } else if (currentTheme === "light") {
    localStorage.setItem("theme", "dark");
    currentTheme = "dark";
  } else {
    localStorage.setItem("theme", "light");
    currentTheme = "light";
  }
  return currentTheme;
};

export { getCurrentTheme, swithCurrentTheme, themes };
