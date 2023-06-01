const initialStats = {
    general: {
        gamesPlayed: 0,
        favouriteIcon: {
            programming: 0,
            animals: 0,
            sports: 0,
        },
        favouriteDifficulty: {
            easy: 0,
            normal: 0,
            hard: 0,
        },
    },
    easy: {
        gamesPlayed: 0,
        bestTime: '--',
        bestMoves: '--',
    },
    normal: {
        gamesPlayed: 0,
        bestTime: '--',
        bestMoves: '--',
    },
    hard: {
        gamesPlayed: 0,
        bestTime: '--',
        bestMoves: '--',
    },
};
const setInitialStats = () => {
    localStorage.setItem('stats', JSON.stringify(initialStats));
};
export default setInitialStats;
