import actionTypes from "../constants/actionTypes";

const defaultState = {
    phone: "",
    username: "",
}

const auth =   (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_LOGIN_OR_REGISTER:
            return {
                ...state,
                phone: action.payload
            }
            case actionTypes.AUTH_REGISTER:
                return {
                    ...state,
                    username: action.payload,
                }
        default:
            return state;
    }
};

 export default auth; 