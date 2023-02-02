import { css } from "@emotion/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const wrapperStyles = css`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;

  /*Center horizontaly ie */
  -ms-flex-pack: center;
  -ms-flex-align: center;

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  min-height: 100vh;
  /* height: 100vh; */
  width: 100%;
  padding: 40px 0;
`;

const pageStyles = css`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 5e-5) 49.88%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div css={pageStyles}>
      <div css={wrapperStyles}>{children}</div>
    </div>
  );
}

export default Layout;
