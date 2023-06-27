export const selectIsLogin = state => state.auth.isLogin;

export const selectUserName = state => state.auth.user.name;

export const selectAllScores = state => state.score.allScores;

export const selectScoresByUser = state => state.score.scoresByUser;
