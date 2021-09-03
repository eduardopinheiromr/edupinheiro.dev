import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }
  
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: #181d29;
    color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }

  .link {
    color: #b6b6b6;
    transition: .3s;
    &:hover {
      text-decoration: none;
      color: #fff;
    }
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
  .fadeIn {
    animation-name: fadeInAnimation;
    animation-duration: 1s;
  }
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .section-title {
    font-size: 52px;
    text-align: center;
    margin: 30px 0;
  }
  .bg-black {
    background: #000;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .link-savanna {
    transition: 0.1s;
  }
  .link-savanna:hover {
    text-decoration: none;
    color: #ffcc52;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #412856;
  }
`;
