import { css } from "@emotion/react";
import theme from "lib/theme";

export const titleWrapperStyles = css`
  text-align: center;
  margin-bottom: 20px;
`;

export const titleStyles = css`
  color: ${theme.contrastText.color};
  font-family: ${theme.contrastText.font};
  font-size: 36px;
  line-height: 44px;
  font-weight: 100;
  text-shadow: 0px 1px 1px #000000;
`;
