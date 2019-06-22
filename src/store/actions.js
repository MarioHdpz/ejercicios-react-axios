
import * as types from './action-types';
import axios from 'axios';


export const setCharacters = characters => ({
    type: types.SET_CHARACTERS,
    characters,
})

export const search = query => {
    return async dispatch => {
        const response = await axios.get(`https://swapi.co/api/people/?search=${query}`);
        const { results } = response.data;
        dispatch(setCharacters(results));
    }
}