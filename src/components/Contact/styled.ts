import styled from "styled-components";

export const Root = styled.div`
  .contact-form {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  input,
  select {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border-radius: 10px;
    border: none;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px 15px;
  }
  label {
    margin: 10px;
    margin-top: 0;
  }
  .submit {
    transition: 0.3s;
  }
  .submit:hover {
    transform: scale(1.02);
    font-weight: bold;
  }
`;
