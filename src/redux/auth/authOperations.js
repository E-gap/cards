import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/register', userData);
      Notiflix.Notify.success('You are registered');
      instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Registration failed, please check the credentials'
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/login', userData);
      Notiflix.Notify.success('You are loged in');
      instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Login failed, please check the credentials');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('/users/logout');
    Notiflix.Notify.success('You are loged out');
    instance.defaults.headers.common.Authorization = ``;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  if (!token)
    return thunkApi.rejectWithValue(
      'Sign In if you want to save your score history'
    );
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
