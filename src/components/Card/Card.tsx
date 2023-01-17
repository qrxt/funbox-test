import React, { Reducer, useReducer, useState } from "react";
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
  cardOutOfStockStyles,
} from "./Card.style";
import { Card as CardType } from "types/card";
import WeightLabel from "components/WeightLabel";
import { match, P } from "ts-pattern";

interface CardProps {
  card: CardType;
  isInitiallySelected: boolean;
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

function OutOfStock({ flavor }: { flavor: string }) {
  return (
    <p
      css={cardOutOfStockStyles}
    >{`Печалька, ${flavor.toLowerCase()} закончился.`}</p>
  );
}

function Card(props: CardProps) {
  const { card, isInitiallySelected } = props;
  const [isSelected, setSelected] = useState(isInitiallySelected);
  const [isHovered, setHover] = useState(false);
  const isDisabled = card.goodsInStock === 0;

  function handleSelect() {
    if (!isDisabled) {
      setSelected((prev) => !prev);
    }
  }

  return (
    <article aria-disabled={isDisabled}>
      <div
        css={cardStyle(isSelected, isDisabled)}
        onClick={handleSelect}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <header css={cardHeaderStyles}>
          <p css={cardDescriptionStyles(isSelected, isHovered, isDisabled)}>
            {isSelected && isHovered && !isDisabled
              ? "Котэ не одобряет?"
              : card.description}
          </p>

          <h3 css={cardTitleStyles(isDisabled)}>{card.name}</h3>
          <p css={cardFlavorStyles(isDisabled)}>{card.flavor}</p>
        </header>

        <ul>
          {card.features.map((feature) => (
            <li key={feature} css={cardFeatureItem(isDisabled)}>
              {feature}
            </li>
          ))}
        </ul>

        <div css={cardWeightStyles}>
          <WeightLabel
            isSelected={isSelected}
            isDisabled={isDisabled}
            value={card.weight}
          />
        </div>
      </div>

      {match([isSelected, isDisabled] as const)
        .with([true, false], () => (
          <Ingredients composition={card.ingredients} />
        ))
        .with([false, false], () => (
          <CallToAction handleSelect={handleSelect} />
        ))
        .with([P.any, true], () => <OutOfStock flavor={card.flavor} />)
        .exhaustive()}
    </article>
  );
}

export default Card;
