import axios from 'axios';
import { put } from 'redux-saga/effects';

function* updateMovie(action) {
  try {
    const movieId = action.payload.id;
    yield axios.put(`/api/movie/success/${movieId}`, action.payload);
    yield put({
      type: 'PUT_MOVIE',
      payload: action.payload,
    });
    yield put({
      type: 'GET_MOVIES',
    });
  } catch (err) {
    console.warn(err);
  }
}

export default updateMovie;
