import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { instance } from '../auth/authOperations';

// axios.defaults.baseURL = 'http://localhost:3001/api';

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
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
