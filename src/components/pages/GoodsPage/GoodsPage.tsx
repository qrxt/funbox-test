import React from "react";
import CardsList from "components/CardsList";
import { Card } from "types/card";
import { titleStyles, titleWrapperStyles } from "./GoodsPage.style";

// TODO: move to config
const cardsList: Card[] = [
  {
    id: 0,
    weight: 0.5,
    flavor: "fish",
    description: "asdasdasd",
    bonus: {
      portions: 40,
      mice: 4,
    },
  },
  {
    id: 1,
    weight: 0.5,
    flavor: "fish",
    description: "asdasdasd",
    bonus: {
      portions: 40,
      mice: 4,
    },
  },
  {
    id: 2,
    weight: 0.5,
    flavor: "fish",
    description: "asdasdasd",
    bonus: {
      portions: 40,
      mice: 4,
    },
  },
];

function GoodsPage() {
  return (
    <section>
      <div css={titleWrapperStyles}>
        <p css={titleStyles}>Ты сегодня покормил кота?</p>
      </div>
      <CardsList cards={cardsList} />
    </section>
  );
}

export default GoodsPage;
