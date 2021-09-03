import styled from "styled-components";

export const Root = styled.section`
  ul {
    list-style: none;
  }
  h2 {
    text-align: center;
  }
  .all-skills {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    li {
      display: flex;
      flex-direction: column;
      span {
        text-align: center;
        font-size: 15pt;
      }
    }
  }
  .skill-icon {
    transition: 0.2s;
    margin: 0 10px;
  }
  .skill-icon:hover {
    transform: scale(1.1);
  }
  .HTML5:hover {
    color: red;
  }
  .CSS3:hover {
    color: #254bdd;
  }
  .SASS:hover {
    color: #c66493;
  }
  .JavaScript:hover {
    color: yellow;
  }
  .WordPress:hover {
    color: #007094;
  }
  .ReactJs:hover {
    color: #48cef6;
  }
  .NodeJs:hover {
    color: #77b162;
  }
  .npm:hover {
    color: #cd3738;
  }
  .SQL:hover {
    color: lightgray;
  }

  .skill-icon {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 48pt;
    text-align: center;
    padding: 10px;
  }
  p {
    text-align: center;
  }
  .developer {
    order: 1;
    display: flex;
  }
  @media (min-width: 992px) {
    .developer {
      order: 0;
    }
  }
`;
