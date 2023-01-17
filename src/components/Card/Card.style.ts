import { css } from "@emotion/react";
import theme from "lib/theme";
import catImage from "../../assets/images/cat.png";

export const cardStyle = css`
  height: 480px;
  width: 320px;
  padding: 18px 45px 0;
  border-radius: 10px;
  position: relative;

  // TODO: check ie11
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  &::before {
    content: "";
    width: 0;
    height: 0;
    left: 0;
    top: 0px;
    position: absolute;
    border-style: solid;
    border-width: 45px 45px 0 0;
    transform: rotate(180deg);
    border-color: transparent ${theme.border.default.color} transparent
      transparent;
  }

  background: #f2f2f2 url(${catImage}) center bottom/contain no-repeat;

  border: 4px solid ${theme.border.default.color};
`;

export const cardHeaderStyles = css`
  margin-bottom: 15px;
`;

export const cardDescriptionStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.primaryText.color};
  font-size: 16px;
  line-height: 19px;

  margin-bottom: 5px;
`;

export const cardTitleStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.primaryText.color};
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
`;

export const cardFlavorStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.primaryText.color};
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  text-transform: lowercase;
`;

export const cardFeatureItem = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.secondaryText.color};
  font-size: 14px;
  line-height: 16px;
  text-transform: lowercase;
`;

export const cardWeightStyles = css`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
