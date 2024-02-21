import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./compopnents/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <ThemeProvider theme={theme}>
      <App />
      {/* <ToastContainer autoClose={1000} /> */}
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
