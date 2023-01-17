import { css } from "@emotion/react";

export const cardsListStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (min-width: 320px) {
    justify-content: center;
  }

  @media (min-width: 720px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const cardsListItemStyles = css`
  padding: 0 40px;

  margin-bottom: 40px;
`;
