import { createReducer } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { setSpeakers } from 'actions/speakers';

const initialState = new Map({});

export const speakers = createReducer(initialState, (builder) => {
  builder
    .addCase(setSpeakers, (state, action) => {
      return state.set('speakers', action.payload);
    })
})

