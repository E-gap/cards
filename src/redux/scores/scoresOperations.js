import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const getAllScores = createAsyncThunk(
  'scores/getAll',
  async (req, res, next) => {
    try {
      const { data } = await axios.get('/scores');
      return data.data;
    } catch (error) {}
  }
);
