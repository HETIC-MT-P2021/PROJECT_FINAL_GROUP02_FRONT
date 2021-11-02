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
