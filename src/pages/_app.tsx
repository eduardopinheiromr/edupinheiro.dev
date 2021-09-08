import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles/GlobalStyle";

import "@styles/custom-bootstrap.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
