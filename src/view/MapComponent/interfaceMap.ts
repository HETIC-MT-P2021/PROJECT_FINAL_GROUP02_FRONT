export type DungeonParams = {
  dungeonId: string;
};

export interface DungeonSquare {
  Characters: string;
  DungeonId: number;
  Entities: string[];
  Events: string[];
  Id: number;
  IsDiscovered: boolean;
  IsExit: boolean;
  IsImpassable: boolean;
  X: number;
  Y: number;
}

export interface SquareCoord {
  X: number;
  Y: number;
}

export type Map = DungeonSquare[][];

export interface Player {
  Agility: number;
  AgilityMax: number;
  ChosenActionId: number;
  Endurance: number;
  EnduranceMax: number;
  Hitpoints: number;
  HitpointsMax: number;
  Id: number;
  IsAlive: boolean;
  IsOccupied: true;
  Name: string;
  PlayerId: number;
  Precision: number;
  PrecisionMax: number;
  Strength: number;
  StrengthMax: number;
}
