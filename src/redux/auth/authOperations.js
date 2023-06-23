import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://cards-backend-98c7.onrender.com/api';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.post('users/register', userData);
      console.log(data);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.post('users/login', userData);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = ``;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  if (!token) return thunkApi.rejectWithValue('No valid token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
