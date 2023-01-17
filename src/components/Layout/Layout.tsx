import { css } from "@emotion/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const wrapperStyles = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  height: 100%;
  padding: 40px 0;

  // TODO: medias
  /* @media (min-width: 768px) {
    padding: 0 50px;
  } */
`;

function Layout(props: LayoutProps) {
  const { children } = props;

  return <div css={wrapperStyles}>{children}</div>;
}

export default Layout;
