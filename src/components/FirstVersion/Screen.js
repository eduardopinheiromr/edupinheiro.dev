import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Screen = ({ children, bg }) => {
  return (
    <Layout style={{ background: bg }}>
      <div className="container">{children}</div>
    </Layout>
  );
};

export default Screen;
