import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global.style";
import { lightTheme, darkTheme } from "./theme/theme";
import { useSystemTheme } from "./hooks/useSystemTheme";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ShoePage from "./components/ShoePage/ShoePage";
import CartPage from "./components/CartPage/CartPage";

function App() {
  const isDark = useSystemTheme();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:brand/:model" element={<ShoePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
