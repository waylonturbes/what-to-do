import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";

// Fonts Weights
import "@fontsource/inter/900.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/100.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
