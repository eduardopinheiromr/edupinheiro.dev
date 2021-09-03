import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export const GlobalStyle = createGlobalStyle`
  background: #181d29;
  color: #fff;
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
