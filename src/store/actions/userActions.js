import { SET_FIRST_NAME, SET_LAST_NAME, SET_FAVORITE_TEAM, SET_EMAIL } from "./types";

export const setFirstName = (firstName) => {
    return {
        type: SET_FIRST_NAME,
        payload: firstName,
    };
};

export const setLastName = (lastName) => {
    return {
        type: SET_LAST_NAME,
        payload: lastName,
    };
};

export const setFavoriteTeam = (favoriteTeam) => {
    return {
        type: SET_FAVORITE_TEAM,
        payload: favoriteTeam,
    };
};

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload: email,
    };
};