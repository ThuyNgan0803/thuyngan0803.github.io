import { VIEW_USERS } from "../constants/ActionType";

const initialStateUsers = {
    users: []
};
const usersReducer = (state = initialStateUsers, action) => {
    switch (action.type) {
        case VIEW_USERS:
            return {
                users: action.users
            };
        default:
            return state;
    }
};

export { usersReducer };