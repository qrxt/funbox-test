import React from "react";
import { css } from "@emotion/react";
import { cardStyle, cardDescriptionStyles } from "./Card.style";
import { Card as CardType } from "types/card";

interface CardProps {
  card: CardType;
}

function Card(props: CardProps) {
  const { card } = props;

  return (
    <article css={cardStyle}>
      <p css={cardDescriptionStyles}>{card.description}</p>
    </article>
  );
}

export default Card;
