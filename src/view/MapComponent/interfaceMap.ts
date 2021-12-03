export type DungeonParams = {
  dungeonId: string;
};

export interface DungeonSquare {
  Characters: string;
  DungeonId: number;
  Entities: DungeonSquareEntity[];
  Events: DungeonSquareEvent[];
  Id: number;
  IsDiscovered: boolean;
  IsExit: boolean;
  IsImpassable: boolean;
  X: number;
  Y: number;
}

export interface DungeonSquareEntity {
  Agility: number;
  ChosenActionId: number;
  Endurance: number;
  Hitpoints: number;
  Id: number;
  IsAlive: boolean;
  ModelId: number;
  Name: string;
  Precision: number;
  Strength: number;
}

export interface DungeonSquareEvent {
  CategoryId: number;
  Description: string;
  EventModelId: number;
  Id: number;
  IsAlwaysActive: boolean;
  Name: string;
  WasActivated: boolean;
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
