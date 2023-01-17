export interface Bonus {
  portions: number;
  mice: number;
}

export interface Card {
  id: number;
  weight: number;
  bonus: Bonus;
  flavor: string;
  description: string;
}
