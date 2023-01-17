import { css } from "@emotion/react";
import theme from "lib/theme";
import catImage from "../../assets/images/cat.png";

export const cardStyle = (isSelected: boolean) => {
  const borderColor = isSelected
    ? theme.border.selected.color
    : theme.border.default.color;
  const hoverBorderColor = isSelected
    ? theme.border.selectedHover.color
    : theme.border.hover.color;

  return css`
    height: 480px;
    width: 320px;
    border-radius: 10px;
    position: relative;
    padding: 18px 45px 0;
    margin-bottom: 13px;

    background: #f2f2f2 url(${catImage}) center bottom/contain no-repeat;
    border: 4px solid ${borderColor};
    transition: ${theme.transition("border")};

    cursor: pointer;

    &:hover {
      border: 4px solid ${hoverBorderColor};
    }

    &:hover::before {
      border-color: transparent ${hoverBorderColor} transparent transparent;
    }

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
      border-color: transparent ${borderColor} transparent transparent;
      transition: ${theme.transition("border-color")};
    }
  `;
};

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

export const cardFooterStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.contrastText.color};
  font-size: 13px;
  line-height: 16px;
  text-align: center;
`;
export const cardCallToActionLinkStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.link.default.color};
  font-size: 13px;
  line-height: 16px;
  text-decoration-style: dashed;

  transition: ${theme.transition("color")};

  &:hover {
    color: ${theme.link.hover.color};
  }
  &:focus {
    color: ${theme.link.focus.color};
  }
`;
