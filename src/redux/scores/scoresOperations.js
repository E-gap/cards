import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const getAllScores = createAsyncThunk(
  'scores/getAllScores',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/scores');
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
      const { data } = await axios.get('/scores/user');
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
      const { data } = await axios.post('/scores', resultGame);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
