export type Icon = 'programming' | 'animals' | 'sports';
export type Difficulty = 'easy' | 'normal' | 'hard';
export type Stats = {
  general: {
    gamesPlayed: number;
    favouriteIcon: {
      programming: number;
      animals: number;
      sports: number;
    };
    favouriteDifficulty: {
      easy: number;
      normal: number;
      hard: number;
    };
  };
  easy: {
    gamesPlayed: number;
    bestTime: string;
    bestMoves: string;
  };
  normal: {
    gamesPlayed: number;
    bestTime: string;
    bestMoves: string;
  };
  hard: {
    gamesPlayed: number;
    bestTime: string;
    bestMoves: string;
  };
};
