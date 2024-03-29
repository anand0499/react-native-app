import { useState, createContext } from "react";

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightStyles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    text: {
      fontSize: 20,
      color: '#000000',
    },
  };

  const darkStyles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    text: {
      fontSize: 20,
      color: '#ffffff',
    },
  };

  const toggleMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const styles = isDarkMode ? darkStyles : lightStyles;
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode, styles }}>
      {children}
    </ThemeContext.Provider>
  )
}


export { ThemeContext, ThemeProvider }