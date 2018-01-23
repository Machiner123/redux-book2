import { combineReducers } from 'redux';
import BooksList from './reducer_bookslist.js'
const rootReducer = combineReducers({
  books: BooksList
});

export default rootReducer;
