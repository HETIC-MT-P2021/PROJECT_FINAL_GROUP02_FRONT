export interface DungeonSquare {
  x: number;
  y: number;
  discorverd: boolean;
  event: string;
  entities: string[];
  players: string[];
  isExit: boolean;
  impassable: boolean;
}

export interface SquareCoord {
  x: number;
  y: number;
}

export type Map = DungeonSquare[][];
