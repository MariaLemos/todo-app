import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { themeMap } from "./theme/Themes";
import { useState } from "react";
import { getPreferredTheme } from "./theme/getPreferredTheme";
import Header from "./components/header/header";
import InputComponent from "./components/input";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>(getPreferredTheme());
  return (
    <ThemeProvider theme={themeMap[themeName]}>
      <BackgroundContainer>
        <GlobalStyle />
        <Main className="App">
          <Header
            changeTheme={() =>
              setThemeName(themeName === "dark" ? "light" : "dark")
            }
          />
          <InputComponent />
          Drag and drop to reorder list
        </Main>
      </BackgroundContainer>
    </ThemeProvider>
  );
}

export default App;
const Main = styled.main`
  max-width: 33.75rem;
  width: 90%;
  margin: auto;
`;
const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${({ theme }) => `url(${theme.bgImageDesk})`};
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.bgColor};
`;
