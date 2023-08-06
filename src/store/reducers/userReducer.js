import { 
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_FAVORITE_TEAM,
    SET_EMAIL
} from "../actions/types";

const initialState = {
    firstName: '',
    lastName: '',
    favoriteTeam: '',
    email: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload,
            }
        case SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            }
        case SET_FAVORITE_TEAM:
            return {
                ...state,
                favoriteTeam: action.payload,
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;