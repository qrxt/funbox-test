import { css } from "@emotion/react";
import React, { ElementType } from "react";

interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: ElementType;
}

const visuallyHiddenStyles = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const defaultElement = "div";

function VisuallyHidden(props: VisuallyHiddenProps) {
  const { children, as } = props;
  const TagName = as || defaultElement;
  return <TagName css={visuallyHiddenStyles}>{children}</TagName>;
}

export default VisuallyHidden;
