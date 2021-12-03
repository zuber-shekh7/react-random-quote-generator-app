const themes = {
  dark: {
    backgroundColor: "bg-dark",
    textColor: "text-light",
    navbarColor: "navbar-dark",
    btn: "btn btn-primary",
  },
  light: {
    backgroundColor: "bg-light",
    textColor: "text-dark",
    navbarColor: "navbar-light",
    btn: "btn btn-outline-primary",
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
