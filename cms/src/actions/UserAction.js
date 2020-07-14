import { ADD_USER, VIEW_USERS } from '../constants/ActionType'
import { onAddUser, onloadedUsers } from '../api/index'

const addedUser = (data) => ({
    type: ADD_USER,
    data
});

const addUser = (data) => (dispatch) => onAddUser(data).then( (res) => {
        return dispatch(addedUser(res.data))
    })

const loadedUsers = (users) =>({
    type: VIEW_USERS,
    users
})

const loadUsers = () => (dispatch) => onloadedUsers().then( (res) => {
    return dispatch(loadedUsers(res.data.users))
})

export {
    addUser,
    loadUsers
}