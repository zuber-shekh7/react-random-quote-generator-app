import { createContext } from "react";
import { getCurrentTheme, themes } from "../utils/theme";

const ThemeContext = createContext(themes[getCurrentTheme()]);

export default ThemeContext;
