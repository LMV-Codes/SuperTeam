import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

const theme = extendTheme({
  fonts: {
    body: "Roboto",
    heading: "Roboto Condensed",
    mono: "Robot Mono",
  },

  colors: {
    brand: {
      50: "#100F10",
      100: "#1F2126",
      200: "#47000C",
      300: "#800D11",
      400: "#D70000",
    },
  },
  styles: {
    global: {
      body: {
        minH: "100vh",
        bg: "brand.50",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
