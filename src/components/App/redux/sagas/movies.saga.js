import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getMovies(action) {
  try {
    const response = yield axios.get('/api/movie');
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default getMovies;
