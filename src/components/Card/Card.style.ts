import { css } from "@emotion/react";
import theme from "lib/theme";
import catImage from "../../assets/images/cat.png";
import sadCatImage from "../../assets/images/cat_sad.png";
import { match, P } from "ts-pattern";

export const cardStyle = (isSelected: boolean, isDisabled: boolean) => {
  const borderColor = match([isSelected, isDisabled] as const)
    .with([true, false], () => theme.border.selected.color)
    .with([false, false], () => theme.border.default.color)
    .with([P.any, true], () => theme.border.disabled.color)
    .exhaustive();

  const hoverBorderColor = match([isSelected, isDisabled] as const)
    .with([true, false], () => theme.border.selectedHover.color)
    .with([false, false], () => theme.border.hover.color)
    .with([P.any, true], () => theme.border.disabled.color)
    .exhaustive();

  const hovers =
    !isDisabled &&
    css`
      &:hover {
        border: 4px solid ${hoverBorderColor};
      }

      &:hover::before {
        border-color: transparent ${hoverBorderColor} transparent transparent;
      }
    `;

  const cursor = isDisabled ? "not-allowed" : "pointer";
  const fittingCat = isDisabled ? sadCatImage : catImage;

  return css`
    height: 480px;
    width: 320px;
    border-radius: 10px;
    position: relative;
    padding: 18px 45px 0;
    margin-bottom: 13px;

    background: #f2f2f2 url(${fittingCat}) center bottom/contain no-repeat;
    border: 4px solid ${borderColor};
    transition: ${theme.transition("border")};

    cursor: ${cursor};

    ${hovers}

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

    &:focus-visible {
      outline: none;
      opacity: 0.9;
    }
  `;
};

export const cardHeaderStyles = css`
  margin-bottom: 15px;
`;

export const cardDescriptionStyles = (
  isSelected: boolean,
  isHovered: boolean,
  isDisabled: boolean
) => {
  const textColor = match([isSelected, isHovered, isDisabled] as const)
    .with([true, true, false], () => theme.activeText.color)
    .with([false, false, false], () => theme.secondaryText.color)
    .with([P.any, P.any, true], () => theme.disabledText.color)
    .otherwise(() => theme.secondaryText.color);

  return css`
    font-family: ${theme.primaryText.font};
    color: ${textColor};
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 5px;
  `;
};

export const cardTitleStyles = (isDisabled: boolean) => {
  const textColor = isDisabled
    ? theme.disabledText.color
    : theme.primaryText.color;

  return css`
    font-family: ${theme.primaryText.font};
    color: ${textColor};
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
  `;
};

export const cardFlavorStyles = (isDisabled: boolean) => {
  const textColor = isDisabled
    ? theme.disabledText.color
    : theme.primaryText.color;

  return css`
    font-family: ${theme.primaryText.font};
    color: ${textColor};
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    text-transform: lowercase;
  `;
};

export const cardFeatureItem = (isDisabled: boolean) => {
  const textColor = isDisabled
    ? theme.disabledText.color
    : theme.secondaryText.color;

  return css`
    font-family: ${theme.primaryText.font};
    color: ${textColor};
    font-size: 14px;
    line-height: 16px;
    text-transform: lowercase;
  `;
};

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
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 85%;
    height: 1px;
    border-bottom: 1px dashed ${theme.link.default.color};
    position: absolute;
    bottom: 2px;
  }

  background: transparent;
  border: none;
  padding: 0;

  font-family: ${theme.primaryText.font};
  color: ${theme.link.default.color};
  font-size: 13px;
  line-height: 16px;

  transition: ${theme.transition("color")};

  &:hover {
    color: ${theme.link.hover.color};
  }
  &:focus {
    color: ${theme.link.focus.color};
  }
`;

export const cardOutOfStockStyles = css`
  font-size: 13px;
  line-height: 16px;
  font-family: ${theme.primaryText.font};
  text-align: center;
  color: ${theme.warningText.color};
`;
