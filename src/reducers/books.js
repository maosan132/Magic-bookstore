const bookStoreReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return [...state].filter((b) => b.id !== action.book.id);
    default:
      return state;
  }
};

export default bookStoreReducer;
