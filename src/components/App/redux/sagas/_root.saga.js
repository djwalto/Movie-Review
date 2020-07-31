import { takeEvery } from 'redux-saga/effects';
import getMovies from './movies.saga';

function* rootSaga() {
  yield takeEvery('GET_MOVIES', getMovies);
}

export default rootSaga;
