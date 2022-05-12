import actions from "./Actions";
import { getUsers } from "../../../Api/usersApi";

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams));
        return getUsers()
            .then(result => {
                dispatch(actions.fetchUsersSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchUsersFail(err));
                return err;
            })
    }
}
//eslint-disable-next-line
export default {
    fetchUsers
}