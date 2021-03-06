import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { usersListReducer } from './usersList/usersList.reducer';
import { uiReducers } from './components/components.reducers';
import { localeReducer } from './locale/locale.reducer';

export const rootReducer = combineReducers({
  components: uiReducers,
  user: userReducer,
  usersList: usersListReducer,
  locale: localeReducer
});
