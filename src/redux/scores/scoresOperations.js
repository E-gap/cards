import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/authOperations';
import Notiflix from 'notiflix';

export const getAllScores = createAsyncThunk(
  'scores/getAllScores',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/scores');
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserScores = createAsyncThunk(
  'scores/getUserScores',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/scores/user');
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addScore = createAsyncThunk(
  'scores/addScore',
  async (resultGame, thunkApi) => {
    try {
      const { data } = await instance.post('/scores', resultGame);
      Notiflix.Notify.success('Your score has been saved');
      return data.data;
    } catch (error) {
      Notiflix.Notify.failure('Error! your score was not saved ');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
