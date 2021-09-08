export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    filter,
  };
}
