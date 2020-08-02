import { takeEvery } from 'redux-saga/effects';
import getMovies from './movies.saga';
import updateMovie from './updatemovie.saga';

// saga that consolidates all the other sagas
function* rootSaga() {
  yield takeEvery('GET_MOVIES', getMovies);
  yield takeEvery('UPDATE_MOVIE', updateMovie);
}

export default rootSaga;
