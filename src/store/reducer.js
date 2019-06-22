
import * as types from './action-types';

export const characters = (state=[], action) => {
  switch (action.type) {
    case types.SET_CHARACTERS:
        return action.characters;
    default:
        return state;
  }
};