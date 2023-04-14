import ThemeDefault from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
export default App;
