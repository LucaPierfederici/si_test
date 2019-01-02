import { combineReducers } from "redux";
import { UserFormReducer } from "../../ui/components/UserForm/redux/UserForm.reducer";

export const uiReducers = combineReducers({
    userForm: UserFormReducer,
});  