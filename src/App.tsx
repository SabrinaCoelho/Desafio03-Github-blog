import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"
import { RepoProvider } from "./Contexts/RepoContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <RepoProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </RepoProvider>
    </ThemeProvider>
  )
}

export default App
