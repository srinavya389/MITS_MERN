import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;