import { css } from "@emotion/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const wrapperStyles = css`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  min-height: 100vh;
  padding: 40px 0;
`;

function Layout(props: LayoutProps) {
  const { children } = props;

  return <div css={wrapperStyles}>{children}</div>;
}

export default Layout;
