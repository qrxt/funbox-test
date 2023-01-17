import React from "react";
import CardsList from "components/CardsList";
import { Card } from "types/card";
import { titleStyles, titleWrapperStyles } from "./GoodsPage.style";
import VisuallyHidden from "components/VisuallyHidden";

// TODO: move to config
const cardsList: Card[] = [
  {
    id: 0,
    name: "Нямушка",
    weight: 0.5,
    flavor: "С Фуа-Гра",
    description: "Сказочное заморское яство",
    features: ["10 порций", "мышь в подарок"],
    ingredients: "Печень утки разварная с артишоками.",
    goodsInStock: 1,
  },
  {
    id: 1,
    name: "Нямушка",
    weight: 2,
    flavor: "С РЫБОЙ",
    description: "Сказочное заморское яство",
    features: ["40 порций", "2 мыши в подарок"],
    ingredients: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    goodsInStock: 1,
  },
  {
    id: 2,
    name: "Нямушка",
    weight: 5,
    flavor: "С кУрОй",
    description: "Сказочное заморское яство",
    features: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
    ingredients: "Филе из цыплят с трюфелями в бульоне.",
    goodsInStock: 0,
  },
];

function GoodsPage() {
  return (
    <section>
      <VisuallyHidden as="h2">Каталог</VisuallyHidden>
      <div css={titleWrapperStyles}>
        <p css={titleStyles}>Ты сегодня покормил кота?</p>
      </div>
      <CardsList cards={cardsList} />
    </section>
  );
}

export default GoodsPage;
