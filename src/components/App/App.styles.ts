import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "lib/theme";
// TODO: alias "assets/..."
import patternImage from "../../assets/images/patternmin.png";

export const globalStyles = css`
  ${emotionReset}

  *,*::before,*::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 100;
    src: url("src/assets/fonts/exo-2-v20-latin_cyrillic-100.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("src/assets/fonts/exo-2-v20-latin_cyrillic-100.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("src/assets/fonts/exo-2-v20-latin_cyrillic-100.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("src/assets/fonts/exo-2-v20-latin_cyrillic-100.woff") format("woff"),
      /* Modern Browsers */
        url("src/assets/fonts/exo-2-v20-latin_cyrillic-100.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("src/assets/fonts/exo-2-v20-latin_cyrillic-100.svg#Exo2")
        format("svg"); /* Legacy iOS */
  }

  html,
  body,
  #root {
    min-height: 100%;
    font-family: ${theme.primaryText.font};
  }

  body {
    background-image: url(${patternImage});
  }
`;
