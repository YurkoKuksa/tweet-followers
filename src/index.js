import ReactDOM from "react-dom/client";
import App from "./compopnents/App";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./my-redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/tweet-followers">
      <ThemeProvider theme={theme}>
        <App />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
