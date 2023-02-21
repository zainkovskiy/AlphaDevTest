import { createAction } from "@reduxjs/toolkit";
import { getSpeakersAPI } from '../Api';

export const setSpeakers = createAction('setSpeakers');

export const getSpeakers = () => {
  return async (dispatch) => {
    getSpeakersAPI().then((data) => {
      if(data?.success){
        dispatch(setSpeakers(data.response));
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}
