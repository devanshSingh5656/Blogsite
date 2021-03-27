import { Fetch, MAIN_DATA, UPDATE, ADD_DATA, DELETE_DATA } from "./type";

export const fetch = (item) => {
  return {
    type: Fetch,
    payload: item,
  };
};
export const MainData = (item) => {
  return {
    type: MAIN_DATA,
    payload: item,
  };
};
export const Update = (item) => {
  return {
    type: UPDATE,
    payload: item,
  };
};
export const AddData = (item) => {
  return {
    type: ADD_DATA,
    payload: item,
  };
};
export const DeleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};
