import { css } from "@emotion/react";
import theme from "lib/theme";
import { match, P } from "ts-pattern";

export const weightLabelStyles = (isSelected: boolean, isDisabled: boolean) => {
  // const backgroundColor =
  //   isSelected && !isDisabled
  //     ? theme.decoration.selected.color
  //     : theme.decoration.default.color;

  const backgroundColor = match([isSelected, isDisabled] as const)
    .with([true, false], () => theme.decoration.selected.color)
    .with([false, false], () => theme.decoration.default.color)
    .with([P.any, true], () => theme.decoration.disabled.color)
    .exhaustive();

  return css`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: ${backgroundColor};
    transition: ${theme.transition("background-color")};

    padding-top: 20px;

    text-align: center;
    text-transform: lowercase;
  `;
};

export const weightValueStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.primaryText.color};
  color: ${theme.contrastText.color};
  font-size: 42px;
  line-height: 22px;

  margin-bottom: 8px;
`;

export const weightUnitStyles = css`
  font-family: ${theme.primaryText.font};
  color: ${theme.primaryText.color};
  color: ${theme.contrastText.color};
  font-size: 20px;
  line-height: 22px;
`;
