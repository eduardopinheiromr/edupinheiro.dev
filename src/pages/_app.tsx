import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles/GlobalStyle";

import "@styles/custom-bootstrap.scss";
import "@styles/fontawesome.scss";
import "@styles/vertical-timeline.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
