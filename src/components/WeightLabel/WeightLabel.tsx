import React from "react";
import {
  weightLabelStyles,
  weightUnitStyles,
  weightValueStyles,
} from "./WeightLabel.style";

interface WeightLabelProps {
  value: React.ReactNode;
}

function WeightLabel(props: WeightLabelProps) {
  const { value } = props;

  const weight = String(value).replace(".", ",");
  return (
    <div css={weightLabelStyles}>
      <div css={weightValueStyles}>{weight}</div>
      <div css={weightUnitStyles}>кг</div>
    </div>
  );
}

export default WeightLabel;
