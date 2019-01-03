import { fork, all } from 'redux-saga/effects';
import userSagas from './user/user.sagas';
import usersListSagas from './usersList/usersList.sagas';

// add here all your watchers

const sagas = [
  userSagas,
  usersListSagas
]

// Register all your watchers
export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}