import React from "react";
import { css } from "@emotion/react";
import {
  cardStyle,
  cardDescriptionStyles,
  cardTitleStyles,
  cardFlavorStyles,
  cardHeaderStyles,
  cardFeatureItem,
  cardWeightStyles,
} from "./Card.style";
import { Card as CardType } from "types/card";
import WeightLabel from "components/WeightLabel";

interface CardProps {
  card: CardType;
}

function Card(props: CardProps) {
  const { card } = props;

  return (
    <article css={cardStyle}>
      <header css={cardHeaderStyles}>
        <p css={cardDescriptionStyles}>{card.description}</p>

        <h3 css={cardTitleStyles}>{card.name}</h3>
        <p css={cardFlavorStyles}>{card.flavor}</p>
      </header>

      <ul>
        {card.features.map((feature) => (
          <li css={cardFeatureItem}>{feature}</li>
        ))}
      </ul>

      <div css={cardWeightStyles}>
        <WeightLabel value={card.weight} />
      </div>
    </article>
  );
}

export default Card;
