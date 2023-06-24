import { createSlice } from '@reduxjs/toolkit';
import { getAllScores, getUserScores, addScore } from './scoresOperations';

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    allScores: [],
    scoresByUser: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllScores.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllScores.fulfilled, (state, action) => {
        console.log(action.payload);
        state.allScores = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllScores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserScores.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserScores.fulfilled, (state, action) => {
        console.log(action.payload);
        state.scoresByUser = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserScores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addScore.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addScore.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addScore.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const scoreReducer = scoreSlice.reducer;
