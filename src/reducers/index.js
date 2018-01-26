import { combineReducers } from 'redux';
import BooksList from './reducer_bookslist'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksList,
  activeBook: ActiveBook
});

export default rootReducer;
