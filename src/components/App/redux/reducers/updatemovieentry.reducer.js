// update movie title and description reducer
const updateMovieEntry = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export default updateMovieEntry;
