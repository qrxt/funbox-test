import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
// TODO: alias "assets/..."
import patternImage from "../../assets/images/patternmin.png";

export const globalStyles = css`
  ${emotionReset}

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-image: url(${patternImage});
  }
`;
