import React, { useState } from "react";
import {
  cardStyle,
  cardDescriptionStyles,
  cardTitleStyles,
  cardFlavorStyles,
  cardHeaderStyles,
  cardFeatureItem,
  cardWeightStyles,
  cardCallToActionLinkStyles,
  cardFooterStyles,
} from "./Card.style";
import { Card as CardType } from "types/card";
import WeightLabel from "components/WeightLabel";

interface CardProps {
  card: CardType;
}

function CallToAction({ handleSelect }: { handleSelect: () => void }) {
  return (
    <p css={cardFooterStyles}>
      Чего сидишь? Порадуй котэ,{" "}
      <a css={cardCallToActionLinkStyles} href="#" onClick={handleSelect}>
        купи.
      </a>
    </p>
  );
}

function Ingredients({ composition }: { composition: string }) {
  return <p css={cardFooterStyles}>{composition}</p>;
}

function Card(props: CardProps) {
  const { card } = props;
  const [isSelected, setSelected] = useState(false);

  function handleSelect() {
    setSelected((prev) => !prev);
  }

  return (
    <article>
      <div css={cardStyle(isSelected)} onClick={handleSelect}>
        <header css={cardHeaderStyles}>
          <p css={cardDescriptionStyles}>{card.description}</p>

          <h3 css={cardTitleStyles}>{card.name}</h3>
          <p css={cardFlavorStyles}>{card.flavor}</p>
        </header>

        <ul>
          {card.features.map((feature) => (
            <li key={feature} css={cardFeatureItem}>
              {feature}
            </li>
          ))}
        </ul>

        <div css={cardWeightStyles}>
          <WeightLabel isSelected={isSelected} value={card.weight} />
        </div>
      </div>

      {isSelected ? (
        <Ingredients composition={card.ingredients} />
      ) : (
        <CallToAction handleSelect={handleSelect} />
      )}
    </article>
  );
}

export default Card;
