export const selectIsLogin = state => state.auth.isLogin;

export const selectUserName = state => state.auth.user.name;

export const selectAllScores = state => state.score.allScores;

export const selectScoresByUser = state => state.score.scoresByUser;

export const selectIsUserLoading = state => state.auth.isLoading;

export const selectIsScoreLoading = state => state.score.isLoading;

export const selectAuthError = state => state.auth.error;

export const selectScoreError = state => state.score.error;
