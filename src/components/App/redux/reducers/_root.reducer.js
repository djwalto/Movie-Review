import { combineReducers } from 'redux';
import movies from './movies.reducer';
import genres from './genres.reducer';
import updateMovieEntry from './updatemovieentry.reducer';

const rootReducer = combineReducers({
  movies,
  genres,
  updateMovieEntry,
});

export default rootReducer;
