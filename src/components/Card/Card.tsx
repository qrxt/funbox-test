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

enum CardState {
  Initial = "Initial",
  Hovered = "Hovered",
  Selected = "Selected",
  SelectedHovered = "SelectedHovered",
  Disabled = "Disabled",
}

enum CardEvent {
  SetHovered = "SetHovered",
  SetSelected = "SetSelected",
  SetHoveredSelected = "SetHoveredSelected",
  SetDisabled = "SetDisabled",
}

// const reducer: Reducer<CardState, CardEvent> = (state, event) => {
//   const transitions = {
//     [CardState.Initial]: () => {},
//     [CardState.Hovered]: () => {
//       if (state === "Disabled") {
//         return state;
//       }

//       return state === "Selected" ? "SelectedHovered" : "Hovered";
//     },
//     [CardState.Selected]: () => {

//     },
//   };

//   return transitions[state] ? transitions[state]() : state;
// };

function Card(props: CardProps) {
  const { card } = props;
  const [isSelected, setSelected] = useState(false);
  const [isHovered, setHover] = useState(false);
  const isDisabled = card.goodsInStock === 0;
  // const [state, dispatch] = useReducer(reducer, CardState.Initial);

  // console.log(state, card.flavor);

  function handleSelect() {
    if (!isDisabled) {
      setSelected((prev) => !prev);
    }
  }

  return (
    <article>
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
          <WeightLabel
            isSelected={isSelected}
            isDisabled={isDisabled}
            value={card.weight}
          />
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
