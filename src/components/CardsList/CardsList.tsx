import React from "react";
import Card from "components/Card";
import { Card as CardType } from "types/card";
import { cardsListItemStyles, cardsListStyles } from "./CardsList.style";

interface CardsListProps {
  cards: CardType[];
}

function CardsList(props: CardsListProps) {
  const { cards } = props;
  return (
    <ul css={cardsListStyles}>
      {cards.map((card) => (
        <li key={card.id} css={cardsListItemStyles}>
          <Card card={card} isInitiallySelected={card.id === 1} />
        </li>
      ))}
    </ul>
  );
}

export default CardsList;
