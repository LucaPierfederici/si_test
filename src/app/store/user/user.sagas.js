import { UserAction, UserActionType } from '../user/user.actions';
import { takeLatest, put, select } from 'redux-saga/effects';
import { getRegisteredUsers } from '../usersList/usersList.selectors';
import { UserFormAction } from '../../ui/components/UserForm/redux/UserForm.actions';
import pickBy from 'lodash/pickBy';

export function* loginUser(action) {

  action.payload.password = action.payload.password.trim()
  action.payload = pickBy(action.payload);

  yield put(UserFormAction.setErrorMessage(''))

  if (!action.payload || Object.keys(action.payload).length === 0) {
    yield put(UserFormAction.setErrorMessage('Insert email and password'))
    return
  }

  if (!action.payload.email.includes('@')) {
    yield put(UserFormAction.setErrorMessage('Invalid email'))
    return
  }

  if (!action.payload.password) {
    yield put(UserFormAction.setErrorMessage('Insert password'))
    return
  }

  let users = yield select(getRegisteredUsers);

  if (!users.find(t => t.email === action.payload.email && t.password === action.payload.password)) {
    yield put(UserFormAction.setErrorMessage('Email or password Invalid'));
    return
  }

  yield put(UserAction.saveUser({user: action.payload}));

}

export default function* () {
  yield takeLatest(UserActionType.LOGIN_USER, loginUser);
}