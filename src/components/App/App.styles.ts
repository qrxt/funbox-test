import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "lib/theme";
// TODO: alias "assets/..."
import patternImage from "../../assets/images/patternmin.png";
import exoFontWoff2 from "../../assets/fonts/exo-2-v20-latin_cyrillic-100.woff2";
import exoFontWoff from "../../assets/fonts/exo-2-v20-latin_cyrillic-100.woff";
import exoFontEot from "../../assets/fonts/exo-2-v20-latin_cyrillic-100.eot";
import exoFontTtf from "../../assets/fonts/exo-2-v20-latin_cyrillic-100.ttf";
import exoFontSvg from "../../assets/fonts/exo-2-v20-latin_cyrillic-100.svg";

export const globalStyles = css`
  ${emotionReset}

  *,*::before,*::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 100;
    src: url(${exoFontEot}); /* IE9 Compat Modes */
    src: local(""), url(${exoFontTtf}) format("embedded-opentype"),
      url(${exoFontWoff2}) format("woff2"), url(${exoFontWoff}) format("woff"),
      url(${exoFontTtf}) format("truetype"), url(${exoFontSvg}) format("svg");
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
