import { css } from "@emotion/react";
import theme from "lib/theme";

export const cardStyle = css`
  background: tomato;
  height: 480px;
  width: 320px;
`;

export const cardDescriptionStyles = css`
  font-family: ${theme.secondaryText.font};
  color: ${theme.secondaryText.color};
  font-size: 16px;
  line-height: 19px;
`;
