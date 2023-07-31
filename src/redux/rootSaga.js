import routerSaga from './router/routerSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([routerSaga()]);
}
