import React from "react";
import {
  weightLabelStyles,
  weightUnitStyles,
  weightValueStyles,
} from "./WeightLabel.style";

interface WeightLabelProps {
  value: React.ReactNode;
  isSelected: boolean;
  isDisabled: boolean;
}

function WeightLabel(props: WeightLabelProps) {
  const { value, isSelected, isDisabled } = props;

  const weight = String(value).replace(".", ",");
  return (
    <div css={weightLabelStyles(isSelected, isDisabled)}>
      <div css={weightValueStyles}>{weight}</div>
      <div css={weightUnitStyles}>кг</div>
    </div>
  );
}

export default WeightLabel;
