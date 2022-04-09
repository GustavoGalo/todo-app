import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { themes } from '../../styles/themes';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'light' ? themes.dark : themes.light);
  }, [theme.name]);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
