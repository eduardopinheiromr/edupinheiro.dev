import { createGlobalStyle, ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  html {
  scroll-behavior: smooth;
}
.anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
}
  .logo {
  font-family: "Trebuchet MS";
}
header{
  position: sticky;
  top:0;
  z-index: 999;
}
.min-height-80{
  min-height: 80vh;
}
textarea:focus, input:focus, select:focus{
    outline: none;
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
