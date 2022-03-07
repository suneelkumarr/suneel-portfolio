import React, { createContext, useState } from "react";
import { themeData } from '../data/themeData'
export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(themeData.theme);
  const [draweropen, setDrawerOpen] = useState(false);
  const setHandleDrawer = () => {
    setDrawerOpen(!draweropen);
  };

  const value = { theme, draweropen, setHandleDrawer };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
