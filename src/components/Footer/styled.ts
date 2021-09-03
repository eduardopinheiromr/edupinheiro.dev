import styled from "styled-components";

export const Root = styled.div`
  .my-picture {
    border-radius: 100%;
    height: 85%;
    width: 250px;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 100%;
      height: 300px;
    }
  }
  .black-line {
    text-align: center;
    background: #000;
    padding: 10px 0;
  }
`;
