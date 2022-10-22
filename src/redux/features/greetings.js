import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { pendingEffect, fulfilledEffect, rejectedEffect } from '../effects/greetings'
import { getAny } from '../../apis/greetings'

const initialState = {
  greeting: null,
  error: null,
  isLoading: false,
}

export const fetchAnyGreeting = createAsyncThunk('greetings/fetchAny', getAny);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,

  extraReducers: {
    [fetchAnyGreeting.pending]: pendingEffect,
    [fetchAnyGreeting.fulfilled]: fulfilledEffect,
    [fetchAnyGreeting.rejected]: rejectedEffect,
  },
});

export default greetingSlice.reducer;
