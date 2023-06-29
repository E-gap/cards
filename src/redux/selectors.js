export const selectIsLogin = state => state.auth.isLogin;

export const selectUserName = state => state.auth.user.name;

export const selectAllScores = state => state.score.allScores;

export const selectScoresByUser = state => state.score.scoresByUser;

export const selectIsUserLoading = state => state.auth.isLoading;

export const selectIsScoreLoading = state => state.score.isLoading;

export const selectError = state => {
  return state.auth.error || state.score.error;
};
