import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// для того, чтобы не писать постоянно {extra: AxiosInstance}
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra : AxiosInstance;
  // rejectValue: string;
}>();
