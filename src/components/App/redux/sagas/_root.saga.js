import { takeEvery, put } from 'redux-saga/effects';
import getMovies from './movies.saga';
import updateMovie from './updatemovie.saga';

function* rootSaga() {
  yield takeEvery('GET_MOVIES', getMovies);
  yield takeEvery('UPDATE_MOVIE', updateMovie);
}

export default rootSaga;
