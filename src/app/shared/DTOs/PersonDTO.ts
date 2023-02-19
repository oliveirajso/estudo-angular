export interface Person {
  id: number;
  category: string;
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics;
  abilities: Abilities;
  movies: string[];
}

export interface Caracteristics {
  birth: string;
  weight: Weight;
  height: Height;
  universe: string;
}

export interface Weight {
  value: number;
  unity: string;
}

export interface Height {
  value: number;
  unity: string;
}

export interface Abilities {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}
